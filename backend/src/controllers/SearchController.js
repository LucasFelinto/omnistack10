const Dev = require("../models/Dev")
const parseStringAsArray = require("../utils/parseStringAsArray")

module.exports = {
  async index(req, res) {
    const { latitude, logintude, techs } = req.query

    const techsArray = parseStringAsArray(techs)

    const devs = await Dev.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [logintude, latitude]
          },
          $maxDistance: 10000
        }
      }
    })

    return res.json({ devs })
  }
}
