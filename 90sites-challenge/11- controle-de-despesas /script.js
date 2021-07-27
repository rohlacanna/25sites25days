const transactionsUl = document.querySelector('#transactions');
const incomeDisplay = document.querySelector('#money-plus');
const expenseDisplay = document.querySelector('#money-minus');
const balanceDisplay = document.querySelector('#balance');

const dummyTransactions = [
  { id: 1, name: 'Bolo de pote da Eleni', amount: -12 },
  { id: 2, name: 'Salário', amount: 300 },
  { id: 3, name: 'Sonho', amount: -5 },
  { id: 4, name: 'Pão de mel', amount: 7 },
];

const addTransactionIntoDOM = (transaction) => {
  const operator = transaction.amount < 0 ? '-' : '+';
  const CSSClass = transaction.amount < 0 ? 'minus' : 'plus';
  const amountWidthoutOperator = Math.abs(transaction.amount);
  const li = document.createElement('li');

  li.classList.add(CSSClass);
  li.innerHTML = `
  ${transaction.name} <span>${operator} R$ ${amountWidthoutOperator}</span>
    <button class="delete-btn">x</button>
  `;
  transactionsUl.append(li);
};

const updateBalanceValues = () => {
  const transactionsAmounts = dummyTransactions.map(
    (transaction) => transaction.amount
  );
  const total = transactionsAmounts
    .reduce((accumulator, transaction) => accumulator + transaction, 0)
    .toFixed(2);
  const income = transactionsAmounts
    .filter((value) => value > 0)
    .reduce((accumulator, value) => accumulator + value, 0)
    .toFixed(2);
  const expense = Math.abs(
    transactionsAmounts
      .filter((value) => value < 0)
      .reduce((accumulator, value) => accumulator + value, 0)
  ).toFixed(2);

  balanceDisplay.textContent = `R$ ${total}`;
  incomeDisplay.textContent = `R$ ${income}`;
  expenseDisplay.textContent = `R$ ${expense}`;
};

const init = () => {
  dummyTransactions.forEach(addTransactionIntoDOM);
  updateBalanceValues();
};

init();
