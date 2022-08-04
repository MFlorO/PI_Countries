/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
// const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, Activity, conn } = require('../../src/db.js');

// const agent = session(app);
// const country = {
//     name: 'Argentina',
// };

describe('Activity Routes', () => {
    beforeAll(async () => {
        await conn.sync({ force: true });
    })

    describe('Parte UNO', () => {
        describe('POST /activity', () => {
            it('should return status 404 and corresponding text if any of the mandatory parameters is not send', async () => {
                const res = await request(app).post('/activity');
                expect(res.statusCode).toBe(404);
                expect(res.text).toBe('Falta enviar datos obligatorios');
            });

            it('should return status 201 and ability object if the ability was succesfully created', async () => {
                const res = await request(app)
                    .post('/activity')
                    .send({ name: 'Raftting' });
                expect(res.statusCode).toBe(201);
                expect(res.body).toEqual(expect.objectContaining({
                    name: 'Raftting',
                    difficulty: null,
                    duration: null,
                    seassion: null
                }));
            });
        })


        describe('Multiple Routes', () => {
            beforeAll(async () => {
                const p1Country = Country.create({
                    id: 'ATF', name: '"Territory of the French Southern and Antarctic Lands"', imageFlag: [
                        "https://flagcdn.com/tf.svg",
                        "https://flagcdn.com/w320/tf.png"
                    ], continent: [
                        "Antarctica"
                    ], capital: [
                        "Port-aux-Français"
                    ], subregion: "", area: 7747, population: 400
                });
                const p2Country = Country.create({
                    id: 'COL', name: 'Republic of Colombia', imageFlag: [
                        "https://flagcdn.com/co.svg",
                        "https://flagcdn.com/w320/co.png"
                    ], continent: [
                        "South America"
                    ], capital: [
                        "Bogotá"
                    ], subregion: "South America", area: 1141748, population: 50882884
                });

                const p3Country = Country.create({
                    id: 'TJK', name: "Republic of Tajikistan", imageFlag: [
                        "https://flagcdn.com/tj.svg",
                        "https://flagcdn.com/w320/tj.png"
                    ], continent: [
                        "Asia"
                    ], capital: [
                        "Dushanbe"
                    ], subregion: "Central Asia", area: 143100, population: 9537642
                });
                const p1Activity = Activity.create({ name: 'Raffting' });
                const p2Activity = Activity.create({ name: 'Trekking' });
                const p3Activity = Activity.create({ name: 'Nadar' });
                await Promise.all([p1Country, p2Country, p3Country, p1Activity, p2Activity, p3Activity]);
            })

            it('should associate activity with country', async () => {
                const res = await request(app)
                    .put('/activity')
                    .send({ ActivityId: 1, countryId: 'TJK' });
                expect(res.body).toEqual(expect.objectContaining({
                    name: 'Raffting',
                    difficulty: 4,
                    duration: "10:30",
                    seassion: 'Autunm'
                }));
                const [results] = await conn.query('SELECT "countryId" FROM "Activity" WHERE id = 1');
                expect(results[0].countryId).toBe('ONE');
            })
        })
    })

    afterAll(() => {
        conn.close();
    })
})