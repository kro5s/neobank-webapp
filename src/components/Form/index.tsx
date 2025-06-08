import type {DropdownInputField, FormControlsProps, FormInputProps, FormProps} from "./types.ts";
import styles from "./Form.module.css";
import FormValuesProvider, {useFormValues} from "./Providers/FormValuesProvider.tsx";
import DropdownInput from "./FormInputs/DropdownInput";
import type {ChangeEvent} from "react";
import clsx from "clsx";
import {useNavigate} from "react-router-dom";

function FormControls({ submit }: FormControlsProps) {
  const { values } = useFormValues();

  const navigate = useNavigate();

  const handleCancel = () => navigate(-1);

  return (
    <div className={styles.controls}>
      <button onClick={() => submit.handler(values)} className={clsx(styles.control, styles.submit)}>{submit.title}</button>
      <button onClick={handleCancel} className={styles.control}>Отмена</button>
    </div>
  )
}

function FormInput({fieldName, fieldInput}: FormInputProps) {
  const {values, setValues} = useFormValues();
  let input = null;

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [fieldInput.id]: e.target.value});
  }

  switch (fieldInput.type) {
    case "dropdown": {
      input = <DropdownInput fieldInput={fieldInput as DropdownInputField}/>;
      break;
    }
    default:
      input = <input
        className={styles.textInput} type={fieldInput.type}
        value={values[fieldInput.id] as string}
        onChange={changeHandler}
        placeholder={fieldInput.placeholder}
      />
  }

  return (
    <div className={styles.fieldInput}>
      <span>{fieldName}</span>
      {input}
      {fieldInput.constraints && <div className={styles.fieldInputConstraints}>{fieldInput.constraints}</div>}
    </div>
  );
}

function Form({title, fields, submit}: FormProps) {
  return (
    <>
      <h1 className={styles.formTitle}>{title}</h1>
      <FormValuesProvider fields={fields}>
        <div className={styles.fieldInputs}>
          {
            Object.entries(fields).map(([fieldName, fieldInput]) => (
              <FormInput
                key={fieldInput.id}
                fieldName={fieldName}
                fieldInput={fieldInput}
              />
            ))
          }
        </div>
        <FormControls submit={submit} />
      </FormValuesProvider>
    </>
  );
}

export default Form;
