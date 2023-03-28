const axios = require('axios')

const baseURL = 'https://echo-serv.tbxnet.com/v1'
const filesURL = `${baseURL}/secret/files`
const fileURL = `${baseURL}/secret/file`
const filesAuthHeader = { headers: { authorization: 'Bearer aSuperSecretKey' } }
const fileAuthHeader = { headers: { authorization: 'Bearer aSuperSecretKey' }, responseType: 'blob' }

const mockData = [{
  file: 'file1.csv',
  lines: [
    {
      text: 'RgTya',
      number: 64075909,
      hex: '70ad29aacf0b690b0467fe2b2767f765'
    }]
}]

// 1 - get files
// $ curl -X GET https://echo-serv.tbxnet.com/v1/secret/files -H
// 'authorization: Bearer aSuperSecretKey'
// {
//    "files":["file1.csv",....]
// }
async function httpGetFilesNamesFromAPI () {
  try {
    const res = await axios.get(filesURL, filesAuthHeader)
    console.log('response', res.data)
    return res.data.files || []
  } catch (err) {
    console.error(err)
    return []
  }
}

// 2 - get data
// $ curl -X GET https://echo-serv.tbxnet.com/v1/secret/file/file1.csv -H
// 'authorization: Bearer aSuperSecretKey'
// file,text,number,hex
// file1.csv,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765
// file1.csv,AtjW,6,d33a8ca5d36d3106219f66f939774cf5
// file1.csv,PNzRfORtKtEDOzmIVrQuSh,74088708,3e29651a63a5202a5661e05a060401fb
// file1.csv,d,6173,f9e1bcdb9e3784acc448af34f4727252
async function httpGetAllFilesDataFromAPI (files = []) {
  const filesData = []
  console.log('httpGetAllFilesDataFromAPI -> files', files)
  for (const file of files) {
    console.log('foreach -> file', file)
    const data = await httpGetFilesDataFromAPI(file)
    const cleanData = cleanFileData(file, data)
    console.log('cleanData', cleanData)
    if (cleanData !== null) {
      filesData.push(cleanData)
    }
  }
  console.log('filesData', filesData)
  return filesData
}

async function httpGetFilesDataFromAPI (file) {
  try {
    const URL = `${fileURL}/${file}`

    const res = await axios.get(URL, fileAuthHeader)
    console.log('url', URL)
    console.log('response', res.data)
    return res.data
  } catch (err) {
    console.error(err.status)
    return null
  }
}

function cleanFileData (file, data) {
  if (data === null || data === undefined || typeof data !== 'string' || data.trim() === '') {
    return null
  }

  const rows = data.split('\n')

  if (rows.length < 2) {
    return null
  }

  const validHeaders = {
    0: 'file',
    1: 'text',
    2: 'number',
    3: 'hex'
  }
  const columnsCount = Object.keys(validHeaders).length

  const headers = rows[0].split(',')
  if (headers.length !== columnsCount) {
    return null
  }

  for (let i = 0; i < headers.length; i++) {
    console.log('validHeaders', validHeaders[i])
    if (headers[i].trim() !== validHeaders[i]) {
      return null
    }
  }

  const lines = []
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(',')
    if (row.length === columnsCount) {
      let emptyColumn = false
      row.forEach(value => {
        if (value === null || value === undefined || value.trim() === '') {
          emptyColumn = true
        }
      })

      if (emptyColumn === true) {
        continue
      }
      const line = {}
      Object.keys(validHeaders).forEach(value => {
        if (value !== '0') {
          line[validHeaders[value]] = row[value]
        }
      }
      )
      lines.push(line)
    }
  }

  if (lines.length === 0) {
    return null
  }

  const cleanData = {
    file,
    lines
  }

  return cleanData
}

module.exports = {
  mockData,
  httpGetFilesNamesFromAPI,
  httpGetAllFilesDataFromAPI
}
