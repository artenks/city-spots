import request from 'supertest';
import app from '../../src/app';

describe('Spot', () => {
  it('should be able to list all', async done => {
    const response = await request(app)
      .get('/spots')
      .send();

    expect(Array.isArray(response.body)).toBe(true);
    done();
  });

  it('should be able to register', async done => {
    const response = await request(app)
      .post('/spots')
      .send({
        name: 'Casa Alves III',
        type: 'Supermercado',
        longitude: -7.0278495,
        latitude: -35.8607108,
      });

    expect(response.body).toHaveProperty('_id');
    done();
  });
});
