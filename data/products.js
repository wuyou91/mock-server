// 引入mockjs文件
const Mock = require('mockjs')
const Random = Mock.Random

// 创建首页banner和products商品数据
module.exports = (function () {
  let images = [1, 2, 3, 4].map(x => Random.image('750x370', Random.color(), `banner${x}`))
  let data = {
    banner: [...images],
    products: []
  }
  for (let i = 0; i < 4; i++) {
    let title = Random.word(2, 6)
    data.products.push({
      'id': i,
      'title': title,
      'titleImage': Random.image('750x270', Random.color(), `${title}的区域banner`),
      'content': []
    })
    for (let j = 0; j < 6; j++) {
      data.products[i].content.push({
        'id': j,
        'title': Random.word(3, 8),
        'price': Random.float(3000, 10000, 2, 2),
        'images': Random.image('400x300', Random.color(), `商品${j+1}`),
        'productId': Random.natural(100000, 999999)
      })
    }
  }
  return data
})()
