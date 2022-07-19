async function createUser (user, ctx) {
  if (user.acceptTermsAndConditions) {
    return await ctx.prisma.user.create({
      data: user
    })
  } else {
    return new Error('User must accept terms!')
  }
}

async function updateUsername (user, ctx) {
  return await ctx.prisma.user.update({
    where: { id: user.id },
    data: user
  })
}

module.exports = {
  createUser,
  updateUsername
}
