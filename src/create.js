const { Blog, User } = require('./model')

!(async function () {
  // insert info users (...) values (...)

  // 创建用户
  const vortesnail = await User.create({
    userName: 'vortesnail',
    password: '123',
    nickName: '陈鑫',
  })
  const vortesnailId = vortesnail.dataValues.id

  const kaisei = await User.create({
    userName: 'kaisei',
    password: '123',
    nickName: '董轩宇',
  })
  const kaiseiId = kaisei.dataValues.id

  // 创建博客
  const blog1 = await Blog.create({
    title: '标题1',
    content: '内容1',
    userId: vortesnailId,
  })
})()