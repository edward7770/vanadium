import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '../views/ServiceView.vue'
import BorrowingView from '../views/BorrowingView.vue'
import InvestingView from '../views/InvestingView.vue'
import ContactView from '../views/ContactView.vue'
import NotFound from '../views/NotFoundView.vue'
import PrivacyPoliceView from '../views/PrivacyPolicyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView
    },
    {
      path: '/borrower',
      name: 'borrower',
      component: BorrowingView
    },
    {
      path: '/investor',
      name: 'investor',
      component: InvestingView
    },
    {
      path: '/contact',
      name: 'contact us',
      component: ContactView
    },
    {
      path: '/privacy',
      name: 'Privacy Policy',
      component: PrivacyPoliceView
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404',
    },
  ]
})

router.afterEach(() => {
  window.scrollTo(0, 0); // 切换路由之后滚动条始终在最顶部
});

export default router
