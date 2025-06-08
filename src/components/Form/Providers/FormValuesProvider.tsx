import React, {type PropsWithChildren, useContext, useState} from "react";
import type {DropdownInputField, FormInputField} from "../types.ts";

const FormValuesContext = React.createContext<{
  values: Record<string, unknown>;
  setValues: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
}>({
  values: {},
  setValues: () => {}
});

interface FormValuesProviderProps extends PropsWithChildren {
  fields: Record<string, FormInputField>;
}

function prepareInitialValues(inputs: FormInputField[]) {
  return inputs.reduce<Record<string, unknown>>((acc, item) => {
    acc[item.id] = item.type === 'dropdown' ? (item as DropdownInputField).preselectedOption : '';

    return acc;
  }, {});
}

function FormValuesProvider({children, fields}: FormValuesProviderProps) {
  const [values, setValues] = useState(prepareInitialValues(Object.values(fields)));

  return (
    <FormValuesContext.Provider value={{values, setValues}}>
      {children}
    </FormValuesContext.Provider>
  );
}

export function useFormValues() {
  return useContext(FormValuesContext);
}

export default FormValuesProvider;
