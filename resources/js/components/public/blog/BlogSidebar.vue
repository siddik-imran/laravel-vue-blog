<template>
    <span id="blogSidebar">
       <div class="span4">
                <aside class="right-sidebar">
                <div class="widget">
                    <form class="form-search">
                    <input @keyup="search()" placeholder="Type something" v-model="keyword" type="text" class="input-medium search-query">
                    <button type="submit" @click.prevent="search()" class="btn btn-square btn-theme">Search</button>
                    </form>
                </div>
                <div class="widget">
                    <h5 class="widgetheading">Categories</h5>
                    <ul class="cat">
                    <li v-for="category in allCategories" :key="category.id"><i class="icon-angle-right"></i><router-link :to="`/categories/${category.id}`">{{category.cat_name}}</router-link><span> (20)</span></li>
                    </ul>
                </div>
                <div class="widget">
                    <h5 class="widgetheading">Latest posts</h5>
                    <ul class="recent">
                    <li v-for="(post, index) in blogPost" :key="post.id" v-if="index < 5">
                        <!-- <img :src="`uploadImage/${post.photo}`" class="pull-left" alt="" width="80px"/> -->
                        <h6><router-link :to="`/single-post/${post.id}`">{{post.title}}</router-link></h6>
                        <p>
                        {{post.description | sortLength(100, ".....")}}
                        </p>
                    </li>
                    </ul>
                </div>
                </aside>
        </div>
    </span>
</template>

<script>
import _ from 'lodash'

    export default {
        name: 'BlogSidebar',
        data(){
            return{
                keyword: '',
            }
        },
        methods:{
            search:_.debounce(function(){
                this.$store.dispatch('searchPost', this.keyword);
            }, 1000)
        },
        mounted(){
            this.$store.dispatch('allCategories');
            this.$store.dispatch('latestPost');
        },
        computed:{
            allCategories(){
                return this.$store.getters.allCategories ;
            },
            blogPost(){
               return this.$store.getters.latestPost;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
