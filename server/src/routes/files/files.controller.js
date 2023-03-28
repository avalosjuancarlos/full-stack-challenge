const { httpGetFilesNamesFromAPI, httpGetAllFilesDataFromAPI } = require('./files.repository')

async function httpGetAllFilesData (req, res) {
  const files = await httpGetFilesNamesFromAPI()
  const data = await httpGetAllFilesDataFromAPI(files)
  return res.status(200).json(data)
}

module.exports = {
  httpGetAllFilesData
}
