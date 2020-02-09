import { SWITCH_LANGUAGE, CHANGE_DISPLAY_RESOLUTION } from './actionTypes';
import { Locale, SwitchLanguage, ChangeDisplayResolution } from './interfaces';

export function switchLanguage(locale: Locale): SwitchLanguage {
  return {
    type: SWITCH_LANGUAGE,
    payload: locale,
  };
}

export function changeDisplayResolution(): ChangeDisplayResolution {
  return {
    type: CHANGE_DISPLAY_RESOLUTION,
  };
}

export type Action = SwitchLanguage | ChangeDisplayResolution;
