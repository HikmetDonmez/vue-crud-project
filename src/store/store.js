import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loginUsers: [
            {userName:'Mehmet', email:'mehmet1991@gmail.com', password:'123456'},
            {userName:'Ali', email:'ali1989@gmail.com', password:'123456'}
        ]
    }
})