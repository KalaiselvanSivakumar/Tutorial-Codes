/**
 * Run "npm test" in terminal to run tests and get results
 * Run "npm test -- --watch" in terminal to run tests and stand watching for any changes
 * Fist double dashes "--" means pass the following parameters to jest instead of use it for npm
 * Run "npm test -- --coverage" to get code coverage
 */

const { test, expect } = require('@jest/globals');
const handlers = require('../handlers');

test('home page renders', () => {
  const req = {};
  const res = {
    render: jest.fn() // Mock function which keep tracks of how it's called.
  };
  handlers.home(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  // First index is the invocation time (index of number of times it called)
  // Second index is the argument passed while calling function
  expect(res.render.mock.calls[0][0]).toBe('home');
});

test('about page renders with fortune', () => {
  const req = {};
  const res = {
    render: jest.fn()
  };
  handlers.about(req, res);
  // i.e. Exactly called only one time
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe('about');
  expect(res.render.mock.calls[0][1])
    .toEqual(expect.objectContaining({
      fortune: expect.stringMatching(/\W/)
    }));
});

test('404 handler renders', () => {
  const req = {};
  const res = {
    render: jest.fn()
  };
  handlers.notFound(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe('404');
});

test('500 handler renders', () => {
  const err = new Error('Some mock error');
  const req = {};
  const res = {
    render: jest.fn()
  };
  const next = jest.fn();
  handlers.serverError(err, req, res, next);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe('500');
});
