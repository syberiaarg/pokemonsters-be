import knex from "knex";

const { MYSQL_HOST, MYSQL_DB_NAME, MYSQL_USER } = process.env

export const db = knex({
    client: 'mysql',
    connection: {
        host: MYSQL_HOST,
        user: MYSQL_USER,
        database: MYSQL_DB_NAME,
    }
})

export default knex
