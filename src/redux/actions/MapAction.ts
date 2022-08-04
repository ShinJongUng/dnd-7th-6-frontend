import {FOCUS_BOOTH, INPUT_SEARCH_KEYWORD} from '../types/MapActionType';

import {BoothSummary} from 'src/types';

export const focusBooth = (booth: BoothSummary) => ({
  type: FOCUS_BOOTH,
  payload: {booth},
});

export const inputSearchKeyword = (keyword: string) => ({
  type: INPUT_SEARCH_KEYWORD,
  payload: {keyword},
});
