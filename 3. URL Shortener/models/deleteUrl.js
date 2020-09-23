const shortUrl = require('./shortUrl')

const deleteUrl = (req, res) => {
  shortUrl.deleteOne({
    _id: req.params.id
  }, (err, shortUrl) => {
    if (err) throw err;

    console.log("Success")
  });

  res.redirect('/');
}

module.exports = deleteUrl