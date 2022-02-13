const routes=[
    {path:'/home',component:home},
    {path:'/consumer',component:consumer},
]


const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')
