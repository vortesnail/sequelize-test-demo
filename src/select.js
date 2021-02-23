const { Blog, User } = require('./model')

!(async function () {
  // 查询一条记录
  const vortesnail = await User.findOne({
    where: {
      userName: 'vortesnail'
    },
  })
  console.log('vortesnail', vortesnail.dataValues)

  // 查询特定的列
  const vortesnailName = await User.findOne({
    attributes: ['userName', 'nickName'],
    where: {
      userName: 'vortesnail'
    },
  })
  console.log('vortesnailName', vortesnailName.dataValues)

  // 查询一个列表
  const vortesnailBlogList = await Blog.findAll({
    where: {
      userId: 1
    },
    order: [
      ['id', 'desc']
    ],
  })
  console.log('vortesnailBlogList', vortesnailBlogList.map(blog => blog.dataValues))

  // 分页
  const blogPageList = await Blog.findAll({
    limit: 2,
    offset: 2,
    order: [
      ['id', 'desc']
    ],
  })
  console.log('blogPageList', blogPageList.map(blog => blog.dataValues))

  // 查询总数
  const blogListAndCount = await Blog.findAndCountAll({
    limit: 2,
    offset: 0,
    order: [
      ['id', 'desc']
    ],
  })
  console.log('blogListAndCount', blogListAndCount.count, blogListAndCount.rows.map(blog => blog.dataValues))

  // 连表查询1
  const blogListWithUser = await Blog.findAndCountAll({
    order: [
      ['id', 'desc']
    ],
    include: [
      {
        model: User,
        attributes: ['userName', 'nickName'],
        where: {
          userName: 'vortesnail'
        }
      }
    ]
  })
  console.log('blogListWithUser', blogListWithUser.count, blogListWithUser.rows.map(blog => {
     const blogValue = blog.dataValues
     blogValue.user = blogValue.user.dataValues
     return blogValue
  }))

  // 连表查询2
  const userListWithBlog = await User.findAndCountAll({
    attributes: ['userName', 'nickName'],
    where: {
      userName: 'vortesnail',
    },
    include: [
      {
        model: Blog,
      }
    ]
  })
  console.log('userListWithBlog', userListWithBlog.count, userListWithBlog.rows.map(user => {
     const userValue = user.dataValues
     userValue.blogs = userValue.blogs.map(blog => blog.dataValues)
     return userValue
  }))

})()
