export interface UserInterface {
  name: string;
  email: string;
  password: string;
  account:
    | {
        balance: number;
        movements: {
          index: number;
          type: string;
          value: number;
          balance: number;
          date: string;
        }[];
      }
    | {
        balance: number;
        movements: {
          index: number;
          type: string;
          value: number;
          balance: number;
          date: string;
        }[];
      };
}

export const userAccountFake = {
  name: 'Sysnovare',
  email: 'sysnovare@email.pt',
  password: '1234',
  account: {
    balance: 10,
    movements: [
      {
        index: 0,
        type: 'deposit',
        value: 10,
        balance: 10,
        date: 'Thu, 26 Jan 2023 11:02:09 GMT',
      },
      {
        index: 1,
        type: 'deposit',
        value: 10,
        balance: 20,
        date: 'Thu, 26 Jan 2023 11:03:09 GMT',
      },
      {
        index: 2,
        type: 'withdraw',
        value: 10,
        balance: 10,
        date: 'Thu, 26 Jan 2023 11:05:09 GMT',
      },
    ],
  },
};
