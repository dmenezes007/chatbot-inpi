import { TypeformData } from '../types';

/**
 * Carrega os dados do formulário de forma assíncrona
 * Prioridade:
 * 1. Tenta carregar de estrutura_form.json (exportado do Typeform)
 * 2. Fallback para formData.ts (dados locais)
 */

let cachedFormData: TypeformData | null = null;

export async function loadFormData(): Promise<TypeformData> {
  // Se já carregou, retorna do cache
  if (cachedFormData) {
    return cachedFormData;
  }

  try {
    // Tenta carregar do JSON público
    const response = await fetch('/estrutura_form.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const jsonData: TypeformData = await response.json();
    
    // Valida se tem conteúdo mínimo
    if (!jsonData.fields || jsonData.fields.length === 0) {
      console.warn('⚠️ estrutura_form.json está vazio, usando fallback');
      throw new Error('Empty JSON file');
    }
    
    console.log('✅ Carregou estrutura_form.json com sucesso');
    cachedFormData = jsonData;
    return jsonData;
    
  } catch (error) {
    console.warn('⚠️ Não foi possível carregar estrutura_form.json:', error);
    console.log('🔄 Usando formData.ts como fallback');
    
    // Fallback para dados locais
    const { formData } = await import('./formData');
    cachedFormData = formData;
    return formData;
  }
}

/**
 * Recarrega os dados (útil para atualização em tempo real)
 */
export function reloadFormData(): void {
  cachedFormData = null;
}

/**
 * Verifica se está usando JSON ou fallback
 */
export function isUsingJsonSource(): boolean {
  return cachedFormData !== null;
}
