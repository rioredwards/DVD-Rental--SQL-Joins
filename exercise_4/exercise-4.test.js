const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 4', () => {
  afterAll(() => pool.end());

  it('find all customers first_name, last_name, address, and city', async () => {
    const { rows } = await pool.query(
      fs.readFileSync(`${__dirname}/exercise-4.sql`, 'utf-8')
    );
    expect(rows).toEqual(require('./answer.json'));
  });
});
