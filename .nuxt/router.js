import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _18f62619 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _48ba7f49 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _1f94d9b2 = () => interopDefault(import('..\\pages\\kickstarter.vue' /* webpackChunkName: "pages/kickstarter" */))
const _9ca6a1d0 = () => interopDefault(import('..\\pages\\PPC-Ads-Explained.vue' /* webpackChunkName: "pages/PPC-Ads-Explained" */))
const _13f41023 = () => interopDefault(import('..\\pages\\privacypolicy.vue' /* webpackChunkName: "pages/privacypolicy" */))
const _703ca87e = () => interopDefault(import('..\\pages\\Projects.vue' /* webpackChunkName: "pages/Projects" */))
const _0862fcb8 = () => interopDefault(import('..\\pages\\Reviews.vue' /* webpackChunkName: "pages/Reviews" */))
const _b551dcb6 = () => interopDefault(import('..\\pages\\Services.vue' /* webpackChunkName: "pages/Services" */))
const _24b210f8 = () => interopDefault(import('..\\pages\\team.vue' /* webpackChunkName: "pages/team" */))
const _7160bb44 = () => interopDefault(import('..\\pages\\team2.vue' /* webpackChunkName: "pages/team2" */))
const _97fa10b6 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _56066a36 = () => interopDefault(import('..\\pages\\projects\\Bth.vue' /* webpackChunkName: "pages/projects/Bth" */))
const _491ef372 = () => interopDefault(import('..\\pages\\projects\\keystone.vue' /* webpackChunkName: "pages/projects/keystone" */))
const _54bf90c5 = () => interopDefault(import('..\\pages\\projects\\stressfactory.vue' /* webpackChunkName: "pages/projects/stressfactory" */))
const _445e18fb = () => interopDefault(import('..\\pages\\services\\ads.vue' /* webpackChunkName: "pages/services/ads" */))
const _64ee59d9 = () => interopDefault(import('..\\pages\\services\\end-to-end-marketing.vue' /* webpackChunkName: "pages/services/end-to-end-marketing" */))
const _20f64c8b = () => interopDefault(import('..\\pages\\services\\facebook.vue' /* webpackChunkName: "pages/services/facebook" */))
const _309bc5be = () => interopDefault(import('..\\pages\\services\\google.vue' /* webpackChunkName: "pages/services/google" */))
const _03ea83b0 = () => interopDefault(import('..\\pages\\services\\seo.vue' /* webpackChunkName: "pages/services/seo" */))
const _f4c4e9c6 = () => interopDefault(import('..\\pages\\services\\webdesign.vue' /* webpackChunkName: "pages/services/webdesign" */))
const _1dd764dc = () => interopDefault(import('..\\pages\\blog\\all\\_number\\index.vue' /* webpackChunkName: "pages/blog/all/_number/index" */))
const _173f84d1 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _4f80fd0e = () => interopDefault(import('..\\pages\\blog\\_category\\_number\\index.vue' /* webpackChunkName: "pages/blog/_category/_number/index" */))
const _b7a0698a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _18f62619,
    name: "blog"
  }, {
    path: "/contact",
    component: _48ba7f49,
    name: "contact"
  }, {
    path: "/kickstarter",
    component: _1f94d9b2,
    name: "kickstarter"
  }, {
    path: "/PPC-Ads-Explained",
    component: _9ca6a1d0,
    name: "PPC-Ads-Explained"
  }, {
    path: "/privacypolicy",
    component: _13f41023,
    name: "privacypolicy"
  }, {
    path: "/Projects",
    component: _703ca87e,
    name: "Projects"
  }, {
    path: "/Reviews",
    component: _0862fcb8,
    name: "Reviews"
  }, {
    path: "/Services",
    component: _b551dcb6,
    name: "Services"
  }, {
    path: "/team",
    component: _24b210f8,
    name: "team"
  }, {
    path: "/team2",
    component: _7160bb44,
    name: "team2"
  }, {
    path: "/thank-you",
    component: _97fa10b6,
    name: "thank-you"
  }, {
    path: "/projects/Bth",
    component: _56066a36,
    name: "projects-Bth"
  }, {
    path: "/projects/keystone",
    component: _491ef372,
    name: "projects-keystone"
  }, {
    path: "/projects/stressfactory",
    component: _54bf90c5,
    name: "projects-stressfactory"
  }, {
    path: "/services/ads",
    component: _445e18fb,
    name: "services-ads"
  }, {
    path: "/services/end-to-end-marketing",
    component: _64ee59d9,
    name: "services-end-to-end-marketing"
  }, {
    path: "/services/facebook",
    component: _20f64c8b,
    name: "services-facebook"
  }, {
    path: "/services/google",
    component: _309bc5be,
    name: "services-google"
  }, {
    path: "/services/seo",
    component: _03ea83b0,
    name: "services-seo"
  }, {
    path: "/services/webdesign",
    component: _f4c4e9c6,
    name: "services-webdesign"
  }, {
    path: "/blog/all/:number",
    component: _1dd764dc,
    name: "blog-all-number"
  }, {
    path: "/blog/:slug",
    component: _173f84d1,
    name: "blog-slug"
  }, {
    path: "/blog/:category/:number",
    component: _4f80fd0e,
    name: "blog-category-number"
  }, {
    path: "/",
    component: _b7a0698a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
