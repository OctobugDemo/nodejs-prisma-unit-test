const { mockDeep } = require('jest-mock-extended')

const createMockContext = () => {
  return {
    prisma: mockDeep()
  }
}

module.exports = {
  createMockContext
}
