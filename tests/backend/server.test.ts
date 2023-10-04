const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();

describe('GET /api/ebird', function() {
  it('responds with json', async function() {
    const response = await request(app)
      .get('/api/ebird')
      .set('Accept', 'application/json')
    expect(response.headers["Content-Type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.email).toEqual('foo@bar.com');
  });
});