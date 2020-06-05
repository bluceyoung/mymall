import axios from 'axios'

export function request(config){
  //创建axios实例
  const instance=axios.create({
    baseURL:'http://localhost:8081',
    timeout:5000
  })

  //2.拦截器
  //2.1请求拦截器的作用
  instance.intercepts.request.ues(config=>{
    return config
  },err=>{
    console.log(err)
  })

  //响应拦截
  instance.intercepts.response.use(res=>{
    return res.data
  },err=>{
    console.log(err)
  })
  
  return instance(config)

}
