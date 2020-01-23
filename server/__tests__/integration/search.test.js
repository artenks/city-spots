import request from 'supertest';

import app from '../../src/app';

describe('Search', () => {
  it('should be able to find spots', async done => {
    const response = await request(app)
      .get('/search')
      .query({
        longitude: -6.970255,
        latitude: -35.7902484,
      })
      .send();

    expect(Array.isArray(response.body)).toBe(true);
    done();
  });

  it('should not be able to find spots', async done => {
    const response = await request(app)
      .get('/search')
      .send();

    expect(response.status).toBe(400);
    done();
  });
});
