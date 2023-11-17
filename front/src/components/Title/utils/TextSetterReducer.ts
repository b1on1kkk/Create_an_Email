import {
  TextSetterAction,
  TextSetterState,
  TextSetterEnum
} from "../interfaces/interfaces";

export function TextSetterReducer(
  state: TextSetterState,
  action: TextSetterAction
) {
  const { type, payload } = action;

  switch (type) {
    case TextSetterEnum.TextSetting:
      return {
        ...state,
        value: payload.value,
        actual_length: payload.MAX_TITLE_LENGTH! - payload.value!.length
      };
    default:
      return state;
  }
}
