import Form from "../../components/Form";
import type {FormInputField} from "../../components/Form/types.ts";
import {accounts} from "../../mocks/accounts.ts";
import {useNavigate} from "react-router-dom";

const formatter = new Intl.NumberFormat("ru");

const fields: Record<string, FormInputField> = {
  "Выберите счет": {
    id: 'account',
    type: 'dropdown',
    options: accounts.filter(account => account.status === 'active').map(account => ({
      label: `${account.title.replace(/^\d\d\d\d \d\d\d\d/, "**** ****")} - ${formatter.format(account.available)}₽`,
      value: account.id
    })),
    preselectedOption: accounts[0].id
  },
  "Выберите продукт": {
    id: 'product',
    type: 'dropdown',
    options: [
      {
        label: "Идеальный старт",
        value: "ideal_start",
      },
      {
        label: "Идеальный финиш",
        value: "ideal_finish",
      }
    ],
    preselectedOption: "ideal_start"
  },
  "Срок": {
    id: 'duration',
    type: 'dropdown',
    options: [
      {
        label: "3 месяца - 7,8%",
        value: 3
      },
      {
        label: "6 месяцев - 7,5%",
        value: 6
      },
      {
        label: "9 месяцев - 7,3%",
        value: 9
      },
      {
        label: "12 месяцев - 6,8%",
        value: 12
      },
    ],
    preselectedOption: 3
  },
  "Сумма вклада": {
    id: 'total',
    type: 'number',
    placeholder: "Введите сумму",
    constraints: "Сумма от 30 000₽ до 1 000 000₽"
  }
};

function OpenDeposit() {
  const navigate = useNavigate();

  return (
    <Form
      title="Открыть вклад"
      fields={fields}
      submit={{
        title: "Открыть вклад",
        handler: () => {
          navigate('/deposits');
        }
      }}
    />
  );
}

export default OpenDeposit;
