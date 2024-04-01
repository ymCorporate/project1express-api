module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: '12345',
            database: 'knex2',
        },
        migrations: {
            directory: 'db/migrations',
        },
        seeds: { directory: 'db/seed' },

    }
    ,
    production: {
        client: 'pg',
        connection: process.env.DB_URL,
        migrations: {
            directory: './migrations',
        },
        seeds: { directory: './seed' },
    },
    test: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: '12345',
            database: 'knex2',
        },
    },
};



