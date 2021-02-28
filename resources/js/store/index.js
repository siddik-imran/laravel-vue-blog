import axios from "axios"

export default {
    state:{
        category: [],
        post: [],
        blogPost: [],
        singlePost: [],
        allCategories: [],
        latestPost: [],
    },
    getters:{
        getCategory(state){
            return state.category
        },
        getAllPost(state){
            return state.post
        },
        getBlogPost(state){
            return state.blogPost
        },
        getSinglePost(state){
            return state.singlePost
        },
        allCategories(state){
            return state.allCategories
        },
        latestPost(state){
            return state.latestPost
        }
    },
    actions:{
        allCategory(context){
            axios.get('/category')
            .then((response) => {
                context.commit('categories', response.data.categories)
            });
        },
        getAllPost(context){
            axios.get('/post')
            .then((result) => {
                context.commit('allPost', result.data.posts)
            });
        },
        getBlogPost(context){
            axios.get('/blog-post')
            .then((result) => {
                context.commit('getBlogPost', result.data.posts)
            });
        },
        getSinglePost(context, payload){
            axios.get('/single-post/'+payload)
            .then((result) => {
                context.commit('singlePost', result.data.post)
            });
        },
        allCategories(context){
            axios.get('/categories')
            .then((result) => {
                context.commit('allCategories', result.data.categories)
            });
        },
        getPostByCatId(context, payload){
            axios.get('/category-post/'+payload)
            .then((result) => {
                context.commit('allPostByCatId', result.data.posts)
            });
        },
        searchPost(context, payload){
            axios.get('/search?s='+payload)
            .then((result) => {
                context.commit('searchResult', result.data.posts)
            });
        },
        latestPost(context){
            axios.get('/latest-post')
            .then((result) => {
                context.commit('latestPost', result.data.posts)
            });
        }
    },
    mutations:{
        categories(state, payload){
            return state.category = payload
        },
        allPost(state, payload){
            return state.post = payload
        },
        getBlogPost(state, payload){
            return state.blogPost = payload
        },
        singlePost(state, payload){
            return state.singlePost = payload
        },
        allCategories(state, payload){
            return state.allCategories = payload
        },
        allPostByCatId(state, payload){
            return state.blogPost = payload
        },
        searchResult(state, payload){
            return state.blogPost = payload
        },
        latestPost(state, payload){
            return state.latestPost = payload
        }

    }
}
