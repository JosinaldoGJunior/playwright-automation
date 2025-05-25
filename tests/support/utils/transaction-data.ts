import { faker } from '@faker-js/faker';

export function getYesterdayFormatted(): string {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const day = String(yesterday.getDate()).padStart(2, '0');
  const month = String(yesterday.getMonth() + 1).padStart(2, '0');
  const year = yesterday.getFullYear();

  return `${year}-${month}-${day}`;
}

export interface TransactionData {
  description: string;
  value: number;
  owner: string;
  date: string;
}

export const createTransactionData = (): TransactionData => ({
  description: `Transaction-${faker.string.alphanumeric(6)}`,
  value: parseFloat((Math.random() * 1000 + 1).toFixed(2)),
  owner: faker.person.firstName(),
  date: getYesterdayFormatted()
});

export const createTransactionFixedData = (overrides?: Partial<TransactionData>): TransactionData => ({
  description: 'Test Transaction',
  value: 100.50,
  owner: 'TestUser',
  date: getYesterdayFormatted(),
  ...overrides
});

