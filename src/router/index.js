/*
* @Author: chenchao
* @Date: 2018-08-21 14:45:56
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-08-21 20:27:46
*/

import routes from './routes.js'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
  //模拟滚动行为,页面之间切换回到原位置
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      const position = {}
      if (to.hash) {
          position.selector = to.hash
      }
      //Array.some(function(){}) 测试数组中的某些元素是否通过由提供的函数实现的测试,只要有一个通过就为真，否则为假
      if (to.matched.some( m => m.meta.scrollToTop)) { 
        position.x = 0
        position.y = 0
      }
      return position
    }
  }
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to, from) => {
  const { meta: { title } } = to
  title && common.changeDocTitle(title) //设置标题
})

export default router