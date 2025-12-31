
import React, { useState, useEffect, useCallback } from 'react';
import { TypeformData, Field, WelcomeScreen, ThankYouScreen } from '../types';
import { formData } from '../data/formData';
import { ChevronDown, ChevronUp, Star, ExternalLink, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1); // -1 is Welcome Screen
  const [currentFieldId, setCurrentFieldId] = useState<string>(formData.welcome_screens[0].id);
  const [isFinished, setIsFinished] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  // Parse links and basic markdown in text
  const renderText = (text: string) => {
    const parts = text.split(/(\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        return (
          <a
            key={i}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 inline-flex items-center gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            {match[1]} <ExternalLink size={14} />
          </a>
        );
      }
      // Handle bold
      const boldParts = part.split(/(\*.*?\*)/g);
      return boldParts.map((bp, j) => {
        const boldMatch = bp.match(/\*(.*?)\*/);
        if (boldMatch) return <strong key={j} className="font-bold">{boldMatch[1]}</strong>;
        return bp;
      });
    });
  };

  const findNextFieldId = (choiceId?: string): string | null => {
    const currentRef = currentIndex === -1 
      ? formData.welcome_screens[0].ref 
      : formData.fields.find(f => f.id === currentFieldId)?.ref;

    const logicEntry = formData.logic.find(l => l.ref === currentRef);
    
    if (logicEntry) {
      for (const action of logicEntry.actions) {
        if (!action.condition || action.condition.op === 'always') {
          return action.details.to.value;
        }
        if (action.condition.op === 'is' && choiceId) {
          const choiceVar = action.condition.vars.find(v => v.type === 'choice');
          if (choiceVar && choiceVar.value === choiceId) {
            return action.details.to.value;
          }
        }
      }
    }

    // Default: just next in the array if no jump logic matches
    if (currentIndex === -1) return formData.fields[0].id;
    const nextIdx = formData.fields.findIndex(f => f.id === currentFieldId) + 1;
    return formData.fields[nextIdx]?.id || null;
  };

  const handleNext = (choiceId?: string) => {
    setDirection('next');
    const nextId = findNextFieldId(choiceId);
    
    if (!nextId) {
      setIsFinished(true);
      return;
    }

    // Check if it's a thank you screen ID
    const isThankYou = formData.thankyou_screens.some(s => s.ref === nextId || s.id === nextId);
    if (isThankYou) {
      setIsFinished(true);
      return;
    }

    setHistory(prev => [...prev, currentFieldId]);
    setCurrentFieldId(nextId);
    setCurrentIndex(formData.fields.findIndex(f => f.id === nextId));
  };

  const handleBack = () => {
    if (history.length === 0) return;
    setDirection('prev');
    const lastId = history[history.length - 1];
    setHistory(prev => prev.slice(0, -1));
    setCurrentFieldId(lastId);
    setCurrentIndex(formData.fields.findIndex(f => f.id === lastId));
  };

  const currentField = formData.fields.find(f => f.id === currentFieldId);
  const welcomeScreen = formData.welcome_screens[0];
  const thankYouScreen = formData.thankyou_screens[0];

  const progress = Math.max(0, ((currentIndex + 1) / formData.fields.length) * 100);

  return (
    <div className="flex flex-col h-screen w-full bg-white relative overflow-hidden text-[#212121]">
      {/* Progress Bar */}
      {!isFinished && currentIndex >= 0 && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 z-50">
          <div 
            className="h-full bg-blue-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <main className="flex-1 flex items-center justify-center p-6 md:p-12 overflow-y-auto scrollbar-hide">
        <div className="max-w-3xl w-full">
          {isFinished ? (
            <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h1 className="text-4xl font-light leading-tight">{thankYouScreen.title}</h1>
              <button 
                onClick={() => window.location.reload()}
                className="bg-blue-600 text-white px-8 py-3 rounded text-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                Recomeçar
              </button>
            </div>
          ) : currentIndex === -1 ? (
            <div className="flex flex-col md:flex-row items-center gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex-1 space-y-8">
                <h1 className="text-4xl md:text-5xl font-light leading-tight whitespace-pre-line">
                  {renderText(welcomeScreen.title)}
                </h1>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => handleNext()}
                    className="bg-blue-600 text-white px-8 py-3 rounded text-xl font-medium hover:bg-blue-700 transition-all flex items-center gap-2 group"
                  >
                    {welcomeScreen.properties.button_text}
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-xs text-gray-400 hidden md:block">pressione <strong>ENTER</strong></span>
                </div>
              </div>
              {welcomeScreen.attachment && (
                <div className="w-full md:w-1/2 flex justify-center">
                  <img src={welcomeScreen.attachment.href} alt="Felinpi" className="max-h-96 rounded-lg object-contain" />
                </div>
              )}
            </div>
          ) : currentField ? (
            <div key={currentFieldId} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-blue-500 text-sm font-medium mt-1">
                    {currentIndex + 1} <ArrowRight className="inline-block" size={12} />
                  </span>
                  <h2 className="text-2xl md:text-3xl font-light leading-snug whitespace-pre-line">
                    {renderText(currentField.title)}
                  </h2>
                </div>
              </div>

              {currentField.type === 'multiple_choice' && (
                <div className="space-y-2 max-w-xl">
                  {currentField.properties.choices?.map((choice, idx) => (
                    <button
                      key={choice.id}
                      onClick={() => handleNext(choice.id)}
                      className="w-full text-left p-3 rounded-lg border border-blue-100 bg-blue-50/30 hover:bg-blue-50 hover:border-blue-300 transition-all group flex items-center gap-4 relative overflow-hidden"
                    >
                      <span className="flex-shrink-0 w-6 h-6 border border-blue-200 rounded text-[10px] flex items-center justify-center bg-white font-bold group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-colors uppercase">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1 text-lg font-normal text-blue-900 pr-8">{choice.label}</span>
                      <ArrowRight size={16} className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              )}

              {currentField.type === 'rating' && (
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <button
                      key={val}
                      onClick={() => handleNext()}
                      className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-gray-400 hover:text-blue-500 group"
                    >
                      <Star size={32} className="fill-current" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : null}
        </div>
      </main>

      {/* Navigation Controls */}
      <footer className="p-4 flex justify-end gap-2 bg-white/80 backdrop-blur z-50">
        <div className="flex items-center bg-blue-600 rounded overflow-hidden shadow-lg">
          <button 
            disabled={history.length === 0}
            onClick={handleBack}
            className="p-2 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed border-r border-blue-800"
            title="Voltar"
          >
            <ChevronUp size={24} />
          </button>
          <button 
            disabled={isFinished || !currentField?.properties.choices} // Can't skip choice fields easily without a direct flow
            onClick={() => handleNext()}
            className="p-2 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Próximo"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;
