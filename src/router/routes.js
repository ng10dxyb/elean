/*
* @Author: chenchao
* @Date: 2018-08-21 14:45:46
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-24 14:48:28
*/
/*import loan from '../loan/router.js'
import repay from '../repay/router.js'
import mine from '../mine/router.js'*/

export default [
  {
    path: '/',
    name: 'elean-home',
    component: () => import('@/home/home.vue'),
    meta: {
      title: '首页',
      index:0
    }
  },
  {
    path: '/about',
    name: 'elean-about',
    component: () => import('@/about/about.vue'),
    meta: {
      title: '关于我们',
      index:1
    }
  },
  {
    path: '/product',
    name: 'elean-product',
    component: () => import('@/product/product.vue'),
    meta: {
      title: '产品中心',
      index:2
    }
  },
  {
    path: '/specification',
    name: 'elean-specification',
    component: () => import('@/specification/specification.vue'),
    meta: {
      title: '产品规格',
      index:3
    }
  },
  {
    path: '/service',
    name: 'elean-service',
    component: () => import('@/service/service.vue'),
    meta: {
      title: '服务宗旨',
      index:4
    }
  },
  {
    path: '/work',
    name: 'elean-work',
    component: () => import('@/work/work.vue'),
    meta: {
      title: '工作机会',
      index:5
    }
  },
  {
    path: '/contact',
    name: 'elean-contact',
    component: () => import('@/contact/contact.vue'),
    meta: {
      title: '联系我们',
      index:6
    }
  },

]
