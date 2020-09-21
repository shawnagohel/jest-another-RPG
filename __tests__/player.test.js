const Player = require('/Users/shawnagohel/Desktop/module_10/lib/Player');

test('creates a player object', () => {
    const player = new Player('Dave');
  
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
      );
      
  });

  const Potion = require('/Users/shawnagohel/Desktop/module_10/lib/Potion');

jest.mock('../lib/Potion');

console.log(new Potion());