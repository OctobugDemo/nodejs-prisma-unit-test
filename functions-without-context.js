const prisma = require('./client')

async function createUser (user) {
  if (user.acceptTermsAndConditions) {
    return await prisma.user.create({
      data: user
    })
  } else {
    return new Error('User must accept terms!')
  }
}

async function updateUsername (user) {
  return await prisma.user.update({
    where: { id: user.id },
    data: user
  })
}

module.exports = {
  createUser,
  updateUsername
}
