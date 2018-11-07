# 一个简单的mock数据服务器

* 采用json-server + mockjs  
* data文件夹下用来存放数据，用js生成随机数据然后通过模块化暴露出去；或用json-server服务直接运行写死的json数据,可实现添加、排序、分页、删除数据等操作。
* db.js将data文件夹下生成的所有数据整合成一个json对象返回，然后用json-server开启服务。
* mock-config.json文件用来配置json-server服务，如host、port等

## 运行mock数据服务
* npm install
* npm run mock