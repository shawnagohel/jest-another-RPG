// test('creates a health potion object', () => {
//     const potion = new Potion('health');
  
//     expect(potion.name).toBe('health');
//     expect(potion.value).toEqual(expect.any(Number));
//   });


  function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
  
    if (this.name === 'health') {
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }
  }
  
  module.exports = Potion;