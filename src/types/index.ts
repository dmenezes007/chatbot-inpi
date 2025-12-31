
export interface Choice {
  id: string;
  ref: string;
  label: string;
}

export interface FieldProperties {
  choices?: Choice[];
  allow_multiple_selection?: boolean;
  shape?: string;
  steps?: number;
  button_text?: string;
}

export interface Field {
  id: string;
  title: string;
  ref: string;
  type: string;
  properties: FieldProperties;
}

export interface WelcomeScreen {
  id: string;
  ref: string;
  title: string;
  properties: {
    show_button: boolean;
    button_text: string;
  };
  attachment?: {
    href: string;
  };
}

export interface ThankYouScreen {
  id: string;
  ref: string;
  title: string;
  properties: {
    show_button: boolean;
    button_text?: string;
  };
}

export interface LogicAction {
  action: 'jump';
  details: {
    to: {
      type: string;
      value: string;
    };
  };
  condition?: {
    op: string;
    vars: Array<{
      type: string;
      value: string;
    }>;
  };
}

export interface Logic {
  type: string;
  ref: string;
  actions: LogicAction[];
}

export interface TypeformData {
  id: string;
  title: string;
  welcome_screens: WelcomeScreen[];
  fields: Field[];
  thankyou_screens: ThankYouScreen[];
  logic: Logic[];
}
