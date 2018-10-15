const Mock = require('mockjs')
const Random = Mock.Random

let news = []

let images=[1,2,3].map(
    x=>Random.image(
      '120x60',
      Random.color(),
      Random.word(2,6)
    )
  );
for(let i=0;i<100;i++){
  let content=Random.csentence(50,80);
  news.push({
      id:i,
      title:Random.ctitle(8,20),
      desc:content,
      tag:[content.substr(0,4),content.substr(8,2),content.substr(18,3)],
      views:Random.integer(100,5000),
      images:images.slice(0,Random.integer(1,3))
  })
}

module.exports=()=>{
  return {news}
}