import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/pages/HomePage';
import UserPage from '../components/pages/UserPage';

Vue.use(VueRouter);

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomePage
    },
    {
        name: 'UserPage',
        path:'/userpage',
        component:UserPage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: 'localhost:8080',
    routes
});

export default router;
