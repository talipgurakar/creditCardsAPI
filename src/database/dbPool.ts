import { Pool } from 'pg';

export default new Pool({

    user: 'postgres',

    host: 'localhost',

    database: 'bank',

    password: '123',

    port: 5432
});
