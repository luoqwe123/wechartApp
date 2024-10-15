
const baseUrl = "http://localhost:3000/api/";

function request(url, data, method) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      data: data,
      method: method,
      success(res) {
        if (res.data.code === 200) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      },
      fail(err) {
        reject(err);
      }
    });
  });
}

module.exports = {
  request
}