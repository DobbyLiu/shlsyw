// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import p1 from "./p1/p1.vue";
import p2 from "./p1/p2.vue";
import p3 from "@/p1/p3.vue";
import p4 from "@/p1/p4.vue";
import hp from "@/homepage/hp.vue";
// import hp from "@/homepage/hp_md.vue";
import login from "@/p1/login.vue";


let routes = [
    {
        path: '/',
        name: 'hp',
        component: hp,
        // children:[
        //     {
        //         path:'/p1',
        //         component:p1
        //     }
        // ]
    },
    {
        path: '/p1',
        component: p1,
        name: '',
        hidden: true
    },
    {
        path: '/p2',
        component: p2,
        name: '',
        hidden: true
    },
    {
        path: '/p3',
        component: p3,
        name: '',
        hidden: true
    },
    {
        path: '/p4',
        component: p4,
        name: '',
        hidden: true
    },
    {
        path: '/login',
        component: login,
        name: '',
        hidden: true
    }
];

export default routes;