// mongodb://localhost:27017/test
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true
})
    .then((res) => {
      console.log("connected...")
    })
    .catch((e) => { console.log(e) })

module.exports = mongoose