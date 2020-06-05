import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home')
const Calendar = () => import('../views/calendar/Calendar')
const User = () => import('../views/user/User')
const SmallList = () => import('../views/smalllist/SmallList')
Vue.use(VueRouter)

const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/calendar",
    component:Calendar
  },
  {
    path:"/user",
    component:User
  },
  {
    path:"/smalllist",
    component:SmallList
  }
]

const router=new VueRouter({
  routes,
  mode:'history'
})
export default router