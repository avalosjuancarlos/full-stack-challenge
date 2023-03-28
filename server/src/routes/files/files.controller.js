const mockData = [{
    "file": "file1.csv",
    "lines": [
       {
          "text" :"RgTya",
          "number": 64075909,
          "hex": "70ad29aacf0b690b0467fe2b2767f765"
        }]
 }];

function httpGetAllFilesData(req, res){
    return res.status(200).json(mockData);
}


// 1 - get files
// $ curl -X GET https://echo-serv.tbxnet.com/v1/secret/files -H
// 'authorization: Bearer aSuperSecretKey'
// {
//    "files":["file1.csv",....]
// }

// 2 - get data
// $ curl -X GET https://echo-serv.tbxnet.com/v1/secret/file/file1.csv -H
//'authorization: Bearer aSuperSecretKey'
// file,text,number,hex
// file1.csv,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765
// file1.csv,AtjW,6,d33a8ca5d36d3106219f66f939774cf5
// file1.csv,PNzRfORtKtEDOzmIVrQuSh,74088708,3e29651a63a5202a5661e05a060401fb
// file1.csv,d,6173,f9e1bcdb9e3784acc448af34f4727252


module.exports = {
    httpGetAllFilesData,
}