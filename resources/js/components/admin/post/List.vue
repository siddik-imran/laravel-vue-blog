<template>
     <!-- Main content -->
    <section class="content">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">PostList</h3>
              <div class="text-right">
                <router-link to="/add-post" class="btn btn-primary">New Post</router-link>
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>Sl</th>
                  <th>User</th>
                  <th>Category</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Photo</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(post, index) in allPost" :key="post.id">
                  <td>{{index+1}}</td>
                  <td v-if="post.user">{{post.user.name}}</td>
                  <td v-if="post.category">{{post.category.cat_name}}</td>
                  <td>{{post.title | sortLength(25, "---")}}</td>
                  <td>{{post.description | sortLength(50, ".....")}}</td>
                  <td><img :src="postImage(post.photo)" alt="" width="80px" height="50px"></td>
                  <td>
                      <router-link :to="`/edit-post/${post.id}`" >Edit</router-link>
                      <a style="cursor:pointer; color:red" @click.prevent="deletePost(post.id)">Delete</a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->
</template>

<script>
    export default {
        name: 'List',
        mounted(){
            this.getAllPost()
        },
        methods:{
            getAllPost(){
                this.$store.dispatch('getAllPost')
            },
            deletePost(id){
                axios.get('/delete-post/'+id)
                .then((result) => {
                    this.getAllPost();
                    Toast.fire({
                        icon: 'success',
                        title: 'Post Deleted'
                    })
                });
            },
            postImage(img){
                return 'uploadImage/' + img;
            }
        },
        computed: {
            allPost(){
                return this.$store.getters.getAllPost;
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>
