const { types, Pool } = require('pg');

const timestampOID = 1114;
types.setTypeParser(timestampOID, (str) => new Date(Date.parse(str + '+0000')));

const pool = new Pool({
  connectionString:
    'postgres://postgres:alchemypostgres@dvdrental.cs8jrzrcb82x.us-west-1.rds.amazonaws.com/dvdrental',
  ssl: process.env.PGSSLMODE && { rejectUnauthorized: false },
});

module.exports = pool;
