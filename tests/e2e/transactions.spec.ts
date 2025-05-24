import { test } from '../support/fixtures/playwright-fixtures';
import { createTransactionData, createTransactionFixedData } from '../support/utils/transactionData';
import { v4 as uuid } from 'uuid';

test.describe('Transaction Suite', () => {
  let accountName: string;

  test.beforeEach(async ({ login, home, account }) => {
    await login.signIn();
    accountName = `account-${uuid().slice(0, 6)}`;
    await home.menuAccount();
    await account.createAccount(accountName);
    await home.menuTransaction();
  })

  
  test('Should create transaction with current date', async ({  transaction, toast }) => {
    const { date, description, value, owner } = createTransactionData();

    await transaction.createTransaction(date, description, value, owner, accountName);
    await toast.checkToast('Movimentação inserida com sucesso!');
  });


  test('Should create transaction with past date', async ({ transaction, toast }) => {
    const { date, description, value, owner } = createTransactionFixedData({
      date: '2025-05-01',
    });

    await transaction.createTransaction(date, description, value, owner, accountName);
    await toast.checkToast('Movimentação inserida com sucesso!');
  });


  test('Should not create transaction with future date', async ({ transaction, toast }) => {

    const { date, description, value, owner } = createTransactionFixedData({
      date: '2026-05-01',
    });

    await transaction.createTransaction(date, description, value, owner, accountName);
    await toast.checkToast('Erro: Error: Request failed with status code 400');
  });


});