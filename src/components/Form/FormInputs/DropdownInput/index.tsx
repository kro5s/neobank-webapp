import {useFormValues} from "../../Providers/FormValuesProvider.tsx";
import styles from './DropdownInput.module.css';
import type {DropdownInputField} from "../../types.ts";
import arrowDown from '../../../../assets/icons/arrow-down.svg';
import {useState} from "react";
import clsx from "clsx";
import useClickOutside from "../../../../hooks/useClickOutside.tsx";

interface DropdownInputProps {
  fieldInput: DropdownInputField;
}

function DropdownInput({fieldInput}: DropdownInputProps) {
  const [isOpened, setIsOpened] = useState(false);
  const {values, setValues} = useFormValues();

  const toggleDropdown = () => setIsOpened(prev => !prev);

  const handleChooseOption = (value: unknown) => () => {
    setValues({...values, [fieldInput.id]: value})
    setIsOpened(false);
  }

  const outsideRef = useClickOutside<HTMLDivElement>(() => setIsOpened(false));

  return (
    <div className={styles.container} ref={outsideRef}>
      <div className={clsx(styles.selected, {
        [styles.opened]: isOpened
      })} onClick={toggleDropdown}>
        <span>{fieldInput.options.find(option => option.value === values[fieldInput.id])?.label ?? ""}</span>
        <img style={{transition: "transform 0.3s", transform: isOpened ? "rotate(-180deg)" : undefined}} src={arrowDown}
             alt=""/>
      </div>
      {
        isOpened && (
          <div className={styles.dropdownMenu}>
            {
              fieldInput.options.map(option => (
                <div
                  key={option.value as string}
                  className={styles.dropdownOption}
                  onClick={handleChooseOption(option.value)}
                >
                  {option.label}
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  );
}

export default DropdownInput;
