const normalize = (req, res, next) => {
  const { source = '' } = req.query
  if (source) {
    req.query.source = [...source.split(',')]
  }
  next()
}

module.exports = {
  normalize
}
