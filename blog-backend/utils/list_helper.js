const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  console.log(blogs)
  return blogs.reduce(
    (sum, b) => sum + b.likes,
    0
  )
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0){
    return {}
  }
  const maxLikes = Math.max(...blogs.map(b => b.likes))
  return blogs.find(b => b.likes === maxLikes)
}

module.exports = { dummy, totalLikes, favoriteBlog }