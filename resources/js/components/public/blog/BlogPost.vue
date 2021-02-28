<template>
    <span id="blogPost">
       <section id="inner-headline">
        <div class="container">
            <div class="row">
            <div class="span4">
                <div class="inner-heading">
                <h2>Blog Post</h2>
                </div>
            </div>
            <div class="span8">
                <ul class="breadcrumb">
                <li><a href="#"><i class="icon-home"></i></a><i class="icon-angle-right"></i></li>
                <li><a href="#">Blog</a><i class="icon-angle-right"></i></li>
                <li class="active">Post</li>
                </ul>
            </div>

            </div>
        </div>
        </section>
        <section id="content">
        <div class="container">
            <div class="row">
            <div class="span8">
                <article v-for="post in blogPost" :key="post.id">
                <div class="row">
                    <div class="span8">
                    <div class="post-image">
                        <div class="post-heading">
                        <h3><a href="#">{{post.title}}</a></h3>
                        </div>
                        <img :src="`uploadImage/${post.photo}`" alt=""/>
                    </div>
                    <p>
                        {{post.description | sortLength(500, ".....")}}
                    </p>
                    <div class="bottom-article">
                        <ul class="meta-post">
                        <li><i class="icon-calendar"></i><a href="#">{{post.created_at | timeFormat}}</a></li>
                        <li v-if="post.user"><i class="icon-user"></i><a href="#"> {{post.user.name}}</a></li>
                        <li v-if="post.category"><i class="icon-folder-open"></i><a href="#"> {{post.category.cat_name}}</a></li>
                        <!-- <li><i class="icon-comments"></i><a href="#">4 Comments</a></li> -->
                        </ul>
                        <router-link :to="`/single-post/${post.id}`" class="pull-right">Continue reading <i class="icon-angle-right"></i></router-link>
                    </div>
                    </div>
                </div>
                </article>
                <div id="pagination">
                <span class="all">Page 1 of 3</span>
                <span class="current">1</span>
                <a href="#" class="inactive">2</a>
                <a href="#" class="inactive">3</a>
                </div>
            </div>
            <!-- import sidebar  -->
            <sidebar/>
            <!-- end sidebar  -->
            </div>
        </div>
        </section>
    </span>
</template>

<script>
import sidebar from "./BlogSidebar.vue"
    export default {
        name: 'BlogPost',
        data(){
            return{

            }
        },
        components:{
            sidebar
        },
        mounted(){
            this.allPost()
        },
        methods: {
            allPost(){
                this.$store.dispatch('getBlogPost');
            },
            getAllPostByCategory(){
                if(this.$route.params.id != null){
                this.$store.dispatch('getPostByCatId', this.$route.params.id);
                } else{
                    this.allPost()
                }
            }
        },
        computed: {
          blogPost(){
               return this.$store.getters.getBlogPost;
          }
        },
        watch:{
            $route(to, from){
                this.getAllPostByCategory()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
