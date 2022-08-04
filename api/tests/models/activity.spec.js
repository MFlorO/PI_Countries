const { conn, Activity } = require('../../src/db.js');





describe('Ability Model', () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });

  describe('Parte UNO: name and duration', () => {
    it('should not create the Activity if name is not send', async () => {
      expect.assertions(1);
      try {
        await Activity.create({duration: "10:20"});
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });
  

    it('should create the Activity if all required properties are ok', async () => {
        const ability = await Activity.create({
          name: 'Rafting',
        });
        expect(ability.toJSON()).toHaveProperty('name','Rafting');
        expect(ability.toJSON()).toHaveProperty('duration', null);
        expect(ability.toJSON()).toHaveProperty('seassion',null);
        expect(ability.toJSON()).toHaveProperty('difficulty',null);
      });


  })

  describe('Parte DOS: Difficulty and Seassion', () => {

    it('should not create the Activity if difficulty is lower than the min value', async () => {
        expect.assertions(1);
        try {
          await Activity.create({name: 'Treakking', difficulty: 0});
        } catch (error) {
          expect(error.message).toBeDefined();
        }
      });

      it('should not create the Activity if difficulty is higher than the max value', async () => {
        expect.assertions(1);
        try {
          await Activity.create({name: 'Treakking', difficulty: 6});
        } catch (error) {
          expect(error.message).toBeDefined();
        }
      });

      it('should not create the Activity if seassion is not a valid option', async () => {
        expect.assertions(1);
        try {
          await Activity.create({name: 'Rafting', difficulty: 4, duration: "10:20", seassion: 'Monster'});
        } catch (error) {
          expect(error.message).toBeDefined();
        }
      });
  })

   afterAll(async () => {
    await conn.sync({ force: true });
    conn.close();
   })

});