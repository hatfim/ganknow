import { createRouter, createWebHistory } from 'vue-router'

// Page
const UserPage = () => import('@/pages/UserPage/UserPage.vue')
const PostPage = () => import('@/pages/PostPage/PostPage.vue')

// Tabs
const ProfileTab = () => import('@/components/templates/ProfileTab/ProfileTab.vue')
const FeedTab = () => import('@/components/templates/FeedTab/FeedTab.vue')
const UsersTab = () => import('@/components/templates/UsersTab/UsersTab.vue')

// Define routes
const userRoutes = {
  path: '/:username',
  component: UserPage,
  props: true,
  children: [
    { path: '', name: 'profile', component: ProfileTab },
    { path: 'feed', name: 'feed', component: FeedTab },
    { path: 'users', name: 'users', component: UsersTab },
  ],
}

const postRoute = {
  path: '/post/:postId',
  name: 'post',
  component: PostPage,
  props: true,
}

// Create router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', redirect: '/paddie' }, userRoutes, postRoute],
})

export default router
