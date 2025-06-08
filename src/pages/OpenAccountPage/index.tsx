import type {FormInputField} from "../../components/Form/types.ts";
import {useNavigate} from "react-router-dom";
import Form from "../../components/Form";

const fields: Record<string, FormInputField> = {
  "Валюта": {
    id: 'currency',
    type: 'dropdown',
    options: [
      {
        label: "Рубль, ₽",
        value: "ruble"
      },
      {
        label: "Доллар, $",
        value: "usd"
      }
    ],
    preselectedOption: "ruble"
  },
  "Сумма пополнения": {
    id: 'total',
    type: 'number',
    placeholder: "Введите сумму",
  }
};

function OpenAccountPage() {
  const navigate = useNavigate();

  return (
    <Form
      title="Новый счет"
      fields={fields}
      submit={{
        title: "Открыть счет",
        handler: () => {
          navigate('/accounts');
        }
      }}
    />
  );
}

export default OpenAccountPage;
