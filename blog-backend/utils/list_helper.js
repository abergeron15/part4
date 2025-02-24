const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return _.sumBy(blogs, 'likes')
}

const favoriteBlog = (blogs) => {
  return blogs.length === 0 ? {} : _.maxBy(blogs, 'likes')
}

const mostBlogs = (blogs) => {
  let author = _.transform(
    _.countBy(blogs, 'author'),
    (a, v, k) => {
      _.get(a, 'blogs', 0) < v ? _.assign(a, {author: k, blogs: v}) : a
    },
    {}
  )
  
  return author
}

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs }