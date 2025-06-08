export interface DefaultInputField {
  id: string;
  constraints?: string;
  placeholder?: string;
}

export interface DropdownInputFieldOption {
  value: unknown;
  label: string;
}

export interface DropdownInputField extends DefaultInputField {
  preselectedOption: unknown;
  options: DropdownInputFieldOption[];
  type: 'dropdown';
}

export interface AnyInputField extends DefaultInputField {
  type: string;
}

export type FormInputField = DropdownInputField | AnyInputField;

export interface FormProps {
  title: string;
  fields: Record<string, FormInputField>;
  submit: {
    title: string;
    handler: (values: Record<string, unknown>) => void;
  }
}

export interface FormInputProps {
  fieldName: string;
  fieldInput: FormInputField;
}

export interface FormControlsProps {
  submit: FormProps['submit'];
}