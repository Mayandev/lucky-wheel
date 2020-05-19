import mockjs from 'mockjs';

export default getUser = {'GET /api/getuser': (req, res) => res.send(mockjs.mock({   // /api/getuser 是我需要访问的接口名称
  "code": 0,
  "content|1": [{    // content|1 content 是我最终想要拿到的数据  1是指生成一个content  
     "id|+1": 1,
     "name": "@cname", 
     "job|1": ["前端工程师", "前端助理", "前端专家", "运维专家", "后端工程师"], 
     "jobNum|1": [1, 12, 34, 56, 23, 45, 56, 34, 56, 77, 4, 321, 443, 654, 231], 
     "date": "@date",
     "jobHour": "@integer", 
　　}],
　success: true,
 message: '123', 
})) }