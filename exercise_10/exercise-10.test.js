const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 10', () => {
  afterAll(() => pool.end());

  it.skip('find the category name of all inventory items that have never been rented', async () => {
    const { rows } = await pool.query(
      fs.readFileSync(`${__dirname}/exercise-10.sql`, 'utf-8')
    );
    expect(rows).toEqual([{ name: 'Documentary' }]);
  });
});
