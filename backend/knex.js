// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    client: 'oracledb',
    connection: {
      user: 'MYUSER',
      password: 'mypassword',
      connectString: 'localhost:1521/XEPDB1'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: '../migrations'
    }
  };