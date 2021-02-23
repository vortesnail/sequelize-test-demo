const { Blog, User } = require('./model')

!(async function () {
  // 删除一条博客
  const delBlogRes = await Blog.destroy({
    where: {
      id: 2
    }
  })
  console.log('delBlogRes', delBlogRes)
})()
