const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 2', () => {
  afterAll(() => pool.end());

  it('find all rental dates for customers with the first_name Patricia', async () => {
    const { rows } = await pool.query(
      fs.readFileSync(`${__dirname}/exercise-2.sql`, 'utf-8')
    );
    expect(rows.length).toEqual(27);
  });
});
