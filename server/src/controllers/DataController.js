const mdsService = require('../services/mdsService')
const mdsHelper = require('../helpers/mdsHelper')

class DataController {
  async index(req, res) {
    const {data} = await mdsService.get(
      `/novocoronavirus/resources/scripts/database.js?v=${new Date().getTime()}`
    )
    const dataParsed = mdsHelper.sourceParser(data)

    return res.json(dataParsed)
  } 
}

module.exports = new DataController()
