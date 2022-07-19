/* global jest, beforeEach */
const { mockDeep, mockReset } = require('jest-mock-extended')

const prisma = require('./client')
const prismaMock = prisma

jest.mock('./client', () => mockDeep())

beforeEach(() => {
  mockReset(prismaMock)
})

module.exports = { prismaMock }
