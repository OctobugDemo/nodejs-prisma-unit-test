const { PrismaClient } = require('@prisma/client')
const { mockDeep } = require('jest-mock-extended')

const createMockContext = () => {
  return {
    prisma: mockDeep(PrismaClient)
  }
}

module.exports = {
  createMockContext
}
