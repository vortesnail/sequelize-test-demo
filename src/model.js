const { DataTypes } = require('sequelize')
const seq = require('./seq')

// 创建 User 模型。数据表的名字是 users
const User = seq.define('user', {
  // id 会自动创建，并设为主键、自增
  userName: {
    type: DataTypes.STRING, // VARCHAR(255)
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nickName: {
    type: DataTypes.STRING,
    comment: '昵称',
  }
  // createdAt 和 updatedAt 会自动创建 
})

// 创建 Blog 模型
const Blog = seq.define('blog', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
})

// 外健关联
Blog.belongsTo(User, {
  // 创建外健 Blog.userId -> User.id
  foreignKey: 'userId'
})

User.hasMany(Blog, {
  foreignKey: 'userId'
})

module.exports = {
  User,
  Blog,
}
