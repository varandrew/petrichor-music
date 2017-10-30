import Vue from 'vue'
import Router from 'vue-router'
import Disc from 'components/disc/disc'
import Rank from 'components/rank/rank'
import Singer from 'components/singer/singer'
import Search from 'components/search/search'
import TopList from 'components/top-list/top-list'
import UserCenter from 'components/user-center/user-center'
import Recommend from 'components/recommend/recommend'
import SingerDetail from 'components/singer-detail/singer-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Recommend
    },
    {
      path: '/rank',
      component: Rank,
      children: [{
        path: ':id',
        component: TopList
      }]
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [{
        path: ':id',
        component: Disc
      }]
    },
    {
      path: '/search',
      component: Search,
      children: [{
        path: ':id',
        component: SingerDetail
      }]
    },
    {
      path: '/singer',
      component: Singer,
      children: [{
        path: ':id',
        component: SingerDetail
      }]
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
