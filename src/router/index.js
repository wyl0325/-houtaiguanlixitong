import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '../components/HelloWorld.vue'
// import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        // name:'/home',
        redirect: '/login',
        name:'首页',
        hidden:true,
        component: () => import('../components/Login.vue')
    },
    {
        path: '/login',
        // name:'/home',
        name: 'LoginName',
        hidden:true,
        component: () => import('../components/Login.vue')
    },
    {
        path: '*',
        // name:'/home',
        name: 'NotFound',
        hidden:true,
        component: () => import('../components/NotFound.vue')
    },
    {
        path: '/home',
        name: '学生管理',
        iconClass: 'fa fa-users',
        redirect: '/home/student',
        component: () => import('../components/Home.vue'),
        children:
            [
                {
                    path: '/home/student',
                    name: '学生列表',
                    iconClass: 'fa fa-list',
                    component: () => import('@/components/students/StudentList.vue')
                },
                {
                    path: '/home/info',
                    name: '信息列表',
                    iconClass: 'fa fa-list-alt',
                    component: () => import('@/components/students/InfoList.vue')
                },
                {
                    path: '/home/infos',
                    name: '信息管理',
                    iconClass: 'fa fa-list-alt',
                    component: () => import('@/components/students/InfoLists.vue')
                },
                {
                    path: '/home/work',
                    name: '作业列表',
                    iconClass: 'fa fa-list-ul',
                    component: () => import('@/components/students/WorkList.vue')
                },
                {
                    path: '/home/works',
                    name: '作业管理',
                    iconClass: 'fa fa-th-list',
                    component: () => import('@/components/students/WorkMent.vue')
                },
            ]
    },
    {
        path: '/home',
        name: '数据分析',
        iconClass: 'fa fa-bar-chart',

        component: () => import('../components/Home.vue'),
        children:
            [
                {
                    path: '/home/dataview',
                    name: '数据概览',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/DataView.vue')
                },
                {
                    path: '/home/mapview',
                    name: '地图概览',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/MapView.vue')
                },
                {
                    path: '/home/travel',
                    name: '旅游地图',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/TravelMap.vue')
                },
                {
                    path: '/home/score',
                    name: '分数地图',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/ScoreMap.vue')
                }
            ]
    }, {
        path: '/user',
        name: '用户中心',
        iconClass: 'fa fa-user',
        component: () => import('../components/Home.vue'),
        children: [
            {
                path: '/user/user',
                name: '权限管理',
                iconClass: 'fa fa-user',
                component: () => import('@/components/users/User.vue')
            }
        ]
    }
];
const router = new VueRouter({

    mode: 'history',
    routes
})
export default router