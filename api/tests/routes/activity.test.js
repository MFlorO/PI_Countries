
const app = require('../../src/app.js');
const { conn, Country, Activity } = require('../../src/db.js');
const request = require("supertest")



describe('activities Post', () => {

    beforeAll(async () => {
        await conn.sync({ force: true });
    })

    describe('Parte UNO', () => {
        
        describe('POST /activities', () => {
            it('should return status 404 and corresponding text if any of the mandatory parameters is not send', async () => {
                const res = await request(app)
                .post('/');
                expect(res.statusCode).toBe(404);
            });

            
            it('should return status 200 and activity object if the activity was succesfully created', async () => {
                const res = await request(app)
                    .post('/activities')
                    .send({ id: ["ATF"], name: 'Raftting', difficulty: 4, duration: "10:30", seassion: 'Autunm'});
                expect(res.body).toEqual({ msg: "Activity created with exit" });
            });

        })

    })

    afterAll( async () => {
        conn.close();
    })
})