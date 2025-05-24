import { test } from '../support/fixtures/playwright-fixtures';
import { createTransactionData } from '../support/utils/transactionData';
import { v4 as uuid } from 'uuid';

test.describe('Exctract Suite', () => {
  let accountName: string;

  test.beforeEach(async ({ login,home,account }) => {
    await login.signIn();
    accountName = `account-${uuid().slice(0, 6)}`;
    await home.menuAccount();
    await account.createAccount(accountName);
    await home.menuTransaction();
  })

  test('Should delete a transaction from extract', async ({ transaction, extract, toast, }) => {
    const { date, description, value, owner } = createTransactionData();

    await transaction.createTransaction(date, description, value, owner, accountName);
    await extract.deleteTransaction(description);
    await toast.checkToast('Movimentação removida com sucesso!');

  });


  test('Should edit a transaction from extract', async ({ transaction, extract, toast, }) => {
    const { date, description, value, owner } = createTransactionData();

    await transaction.createTransaction(date, description, value, owner, accountName);
    await extract.editTransaction(description);
    await toast.checkToast('Movimentação inserida com sucesso!');

  });


});
