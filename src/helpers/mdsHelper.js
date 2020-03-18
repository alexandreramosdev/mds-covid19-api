const states = require('../config/states')

class MdsHelper {
  sourceParser(data){
    const dataParsed = JSON.parse(data.substring(13))
    const brazil = dataParsed["brazil"][dataParsed["brazil"].length - 1]
    const world = dataParsed["world"][dataParsed["world"].length - 1]
    this.brazilValueParser.call(brazil)

    return {
      brazil,
      world
    }
  }
  
  brazilValueParser(){
    this["values"] = this["values"].map(value => ({
      uid: value["uid"] || "",
      state: states[value["uid"]] || "",
      cases: value["cases"] || 0,
      deaths: value["deaths"] || 0,
      suspects: value["suspects"] || 0,
      refuses: value["refuses"] || 0,
      broadcast: value["broadcast"] || false,
      comments: value["comments"] || '',
    }))
  }
}

module.exports = new MdsHelper()
