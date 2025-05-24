import { test } from '../support/fixtures/playwright-fixtures';
import { v4 as uuid } from 'uuid';



test.describe('Account Suite', () => {
  let accountName : string;

  test.beforeEach(async ({ login,home }) => {
    await login.signIn();
    accountName = `account-${uuid().slice(0, 6)}`;
    await home.menuAccount();
  })

  
  test('Should create account', async ({ toast, account }) => {
    await account.createAccount(accountName);
    await toast.checkToast('Conta inserida com sucesso');
  });


  test('Should not create account with same name', async ({ toast,  account }) => {
    await account.createAccount(accountName);
    await account.createAccount(accountName);
    await toast.checkToast('code 400');
  });


  test('Should edit account', async ({ toast,  account }) => {
    await account.createAccount(accountName);
    await account.editAccount(accountName);
    await toast.checkToast('Conta atualizada');
  });


  test('Should delete account', async ({ toast,  account }) => {
    await account.createAccount(accountName);
    await account.deleteAccount(accountName);
    await toast.checkToast('Conta excluída com sucesso!');
  });


});
