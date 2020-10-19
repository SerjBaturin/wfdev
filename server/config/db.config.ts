export const techLogin = 'ufa_test';
export const techPasswd = '1234';
export const days = 30;

const dbName = 'estvis';

const isDev = process.env.NODE_ENV !== 'production';

let password = '';
export const mongoUrl = isDev
    ? `mongodb://localhost:27017/${dbName}`
    : ((password = 'ckYseZajDdF48my'),
      `mongodb+srv://dbAdmin:${password}@cluster0.uzjr8.mongodb.net/${dbName}?retryWrites=true&w=majority`);

const MINUTE = 60 * 1000;
export const updateInterval = MINUTE * (isDev ? 60 : 5);
