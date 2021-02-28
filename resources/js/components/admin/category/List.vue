<template>
     <!-- Main content -->
    <section class="content">
      <div class="row justify-content-center">
        <div class="col-10">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Category List</h3>
              <div class="text-right">
                <router-link to="/add-category" class="btn btn-primary">Add Category</router-link>
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>Sl</th>
                  <th>Category Name</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(category, index) in getAllCategory" :key="category.id">
                  <td>{{index+1}}</td>
                  <td>{{category.cat_name}}</td>
                  <td>{{category.created_at | timeFormat}}</td>
                  <td>
                      <router-link :to="`/edit-category/${category.id}`" >Edit</router-link>
                      <a style="cursor:pointer; color:red" @click.prevent="deleteCategory(category.id)">Delete</a>
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
            this.allCategory()
        },
        methods:{
            allCategory(){
                this.$store.dispatch('allCategory')
            },
            deleteCategory(id){
                axios.get('/category/'+id)
                .then((result) => {
                   this.allCategory();
                    Toast.fire({
                        icon: 'success',
                        title: 'Category Deleted'
                    })
                });
            }
        },
        computed: {
            getAllCategory(){
                return this.$store.getters.getCategory;
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>
