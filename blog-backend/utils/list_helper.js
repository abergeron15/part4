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

const mostLikes = (blogs) => {
  return _.reduce(
    blogs,
    (acc, blog) => {
      acc.totals[blog.author] = (acc.totals[blog.author] || 0) + blog.likes;
      if (acc.totals[blog.author] > _.get(acc.max, 'likes', 0)) {
        _.assign(acc.max, { author: blog.author, likes: acc.totals[blog.author] });
      }
      return acc;
    },
    { totals: {}, max: {} }
  ).max;
}

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes }