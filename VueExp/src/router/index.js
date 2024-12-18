import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainALLPage from '@/views/MainALLPage.vue'
import detailZero from '@/views/detailZero.vue'
import detailOne from '@/views/detailOne.vue'
import detailTwo from '@/views/detailTwo.vue'
import HomeRview from '../views/HomeRview.vue'
import DingView from '@/views/DingView.vue'
import MingView from '@/views/MingView.vue'
import QianView from '@/views/QianView.vue'
import MaoView from '@/views/MaoView.vue'
import QinView from '@/views/QinView.vue'
import TombView from '@/views/TombView.vue'
import QingView from '@/views/QingView.vue'
import PalaceView from '../views/PalaceView.vue';
import PalaceDetail from '../components/PalaceDetail.vue';
import GardenView from '../components/GardenView.vue'

const routes = [
  {
    path: '/',
    name: 'MainALLPage',
    component: MainALLPage
  },
  {
    path: '/wall',
    name: 'home',
    component: HomeView
  },
  {
    path: '/wall/greatWall',
    name: 'greatWall',
    component: () => import('../views/GreatWall.vue')
  },
  {
    path: '/wall/shanhaiPass',
    name: 'shanhaiPass',
    component: () => import('../views/ShanhaiPass.vue')
  },
  {
    path: '/wall/xianTower',
    name: 'xianTower',
    component: () => import('../views/XianTower.vue')
  },
  {
    path: '/wall/smokeTower',
    name: 'smokeTower',
    component: () => import('../views/SmokeTower.vue')
  },
  {
    path: '/wall/nanjingWall',
    name: 'nanjingWall',
    component: () => import('../views/NanjingWall.vue')
  },
  {
    path: '/religion',
    name: 'Home',
    component: HomeRview
  },
  {
    path: '/religion/detail0',
    name: 'Detail0',
    component: detailZero
  },
  {
    path: '/religion/detail1',
    name: 'Detail1',
    component: detailOne
  },
  {
    path: '/religion/detail2',
    name: 'Detail2',
    component: detailTwo
  },
  {
    path: "/tomb",
    name: "Tomb",
    component: TombView,
  },
  {
    path: "/tomb/秦始皇陵",
    name: "Qin",
    component: QinView,
  },
  {
    path: "/tomb/汉武帝茂陵",
    name: "Mao",
    component: MaoView,
  },
  {
    path: "/tomb/永定陵",
    name: "Ding",
    component: DingView,
  },
  {
    path: "/tomb/唐高宗乾陵",
    name: "Qian",
    component: QianView,
  },
  {
    path: "/tomb/明十三陵",
    name: "Ming",
    component: MingView,
  },
  {
    path: "/tomb/清西陵",
    name: "Qing",
    component: QingView,
  },
  {
    path: '/palace',
    name: 'PalaceView',
    component: PalaceView
  },
  {
    path: '/palace/detail/:id',
    name: 'Detail',
    component: PalaceDetail
  },
  {
      path: '/garden',
      name: 'Garden',
      component: GardenView
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
