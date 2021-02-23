const { Blog, User } = require('./model')

!(async function () {
  const updateRes = await User.update({
    nickName: '王硕',
  }, {
    where: {
      userName: 'kaisei'
    },
  })
  console.log('updateRes', updateRes)
})()
