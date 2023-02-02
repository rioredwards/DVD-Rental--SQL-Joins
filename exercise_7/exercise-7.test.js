const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 7', () => {
  afterAll(() => pool.end());

  it('find all film titles rented out by customers who live in the city of Dundee', async () => {
    const { rows } = await pool.query(
      fs.readFileSync(`${__dirname}/exercise-7.sql`, 'utf-8')
    );
    expect(rows).toEqual([
      { title: 'Whale Bikini' },
      { title: 'Unforgiven Zoolander' },
      { title: 'Wife Turn' },
      { title: 'Siege Madre' },
      { title: 'Comforts Rush' },
      { title: 'Deceiver Betrayed' },
      { title: 'Horror Reign' },
      { title: 'Pity Bound' },
      { title: 'Streak Ridgemont' },
      { title: 'Seabiscuit Punk' },
      { title: 'Potter Connecticut' },
      { title: 'Brotherhood Blanket' },
      { title: 'Gorgeous Bingo' },
      { title: 'Chance Resurrection' },
      { title: 'Werewolf Lola' },
      { title: 'Wife Turn' },
      { title: 'Run Pacific' },
      { title: 'None Spiking' },
      { title: 'Congeniality Quest' },
      { title: 'Empire Malkovich' },
      { title: 'Karate Moon' },
      { title: 'League Hellfighters' },
      { title: 'Rocketeer Mother' },
      { title: 'Hardly Robbers' },
      { title: 'Loathing Legally' },
      { title: 'Outfield Massacre' },
    ]);
  });
});
