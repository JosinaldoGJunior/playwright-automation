import { test } from '../support/fixtures/playwright-fixtures';

test.describe('Login Suite', () => {

  test('Should Login with Success', async ({ login }) => {
    await login.signIn();
  });

  test('Should fail to login', async ({ login,toast }) => {
    await login.navigate();
    await login.fillEmail("test");
    await login.submit();
    await toast.checkToast("Erro: Error: Request failed with status code 401");
  });
  
});
