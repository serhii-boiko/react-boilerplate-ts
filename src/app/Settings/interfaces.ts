export interface Locale {
  languageId: string;
  locale: string;
  name: string;
  icon: string;
}

export interface SwitchLanguage {
  type: string;
  payload: Locale;
}

export interface ChangeDisplayResolution {
  type: string;
}

export interface State {
  locale: Locale;
}
