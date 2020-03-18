const mdsService = require('../services/mdsService')
const mdsHelper = require('../helpers/mdsHelper')

class DataController {
  async index(req, res) {
    console.log('controllers')
    const {data} = await mdsService.get(
      `/novocoronavirus/resources/scripts/database.js?v=${new Date().getTime()}`
    )
    const dataParsed = mdsHelper.sourceParser(data)
    console.log(data)
    console.log(dataParsed)
    return res.json(dataParsed)
  } 
}

module.exports = new DataController()
