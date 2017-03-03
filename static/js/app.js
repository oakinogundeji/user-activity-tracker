'use strict';
//=============================================================================
/**
 * dependencies
 */
//=============================================================================
const
    Vue = require('vue'),
    VueRouter = require('vue-router');
//=============================================================================
/**
 * config
 */
//=============================================================================
Vue.use(VueRouter);
//=============================================================================
/**
 * router
 */
//=============================================================================
const
    routes = [
        {
            path: '/',
            name: 'home',
            component: require('./components/app_home')
        },
        {
            path: '/about',
            name: 'about',
            component: require('./components/app_about')
        },
        {
            path: '/services',
            name: 'services',
            component: require('./components/app_services')
        },
        {
            path: '/services/cloud',
            name: 'cloud',
            component: require('./components/app_services_cloud')
        },
        {
            path: '/services/infosec',
            name: 'infosec',
            component: require('./components/app_services_infosec')
        },
        {
            path: '/services/portfolio',
            name: 'portfolio',
            component: require('./components/app_services_portfolio')
        }
    ],
    router = new VueRouter({routes});
//=============================================================================
/**
 * components
 */
//=============================================================================
const
    AppNav = require('./components/app_nav'),
    AppFooter = require('./components/app_footer');
//=============================================================================
/**
 * base VM
 */
//=============================================================================
const VM = new Vue({
    router,
    components: {
        'app-nav': AppNav,
        'app-footer': AppFooter
    }
});
//=============================================================================
/**
 * mount VM to View
 */
//=============================================================================
VM.$mount('#app');
//=============================================================================
