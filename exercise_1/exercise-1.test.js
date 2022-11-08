const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 1', () => {
  afterAll(() => pool.end());

  it('find all address_id of addresses in the city of Dundee', async () => {
    const { rows } = await pool.query(
      fs.readFileSync(`${__dirname}/exercise-1.sql`, 'utf-8')
    );
    expect(rows).toEqual([{ address_id: 146 }]);
  });
});
