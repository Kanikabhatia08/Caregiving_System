// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    client: 'oracledb',
    connection: {
      user: 'sys as sysdba',
      password: 'root',
      connectString: 'localhost:1521/naman'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: '../migrations'
    }
  };