const routes = [
  { path: "/", component: resolve => require(['./home_page/home_page.vue'], resolve) },
  { path: "/details/:id", component: resolve => require(['./detail/detail.vue'], resolve) },
  {
    //使用别名路由，使得不同url访问同一个模板
    path: "/in_theaters/:page?",
    component: resolve => require(['./movieList/movie.vue'], resolve),
    alias: ['/coming_soon/:page?', '/top250/:page?', '/search']
  },

]

export default routes;