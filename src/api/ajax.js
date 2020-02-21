/*
* ajax请求模块
* 返回值：promise对象
* */
import axios from 'axios'

export default function ajax (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      // query参数
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += 'key' + '=' + data[key] + '&'
      })
      if (dataStr != '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // get
      promise = axios.get(url)
    } else {
      // post
      promise = axios.post(url, data)
    }

    promise.then(res => {
      resolve(res.data)
    }).catch(err => {
      console.log(err)
    })

  })
}
