const axios = require('axios')

module.exports = axios.create({
  baseURL: "http://plataforma.saude.gov.br"
})
