export enum TextSetterEnum {
  TextSetting = "TextSetting"
}

export interface TextSetterAction {
  type: TextSetterEnum;
  payload: {
    value?: string;
    MAX_TITLE_LENGTH?: number;
    edit_modal_status?: boolean;
  };
}

export interface TextSetterState {
  value?: string;
  actual_length?: number;
  edit_modal_status?: boolean;
}
