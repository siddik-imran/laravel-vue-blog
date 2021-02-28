<template>
    <section class="content">
      <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- general form elements -->
            <div class="card card-primary mt-4">
              <div class="card-header">
                <h3 class="card-title">Edit Category</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form" @submit.prevent="updateCategory()">
                <div class="card-body">
                    <div class="form-group">
                        <label for="category">Edit Categroy</label>
                        <input type="text" class="form-control" v-model="form.cat_name" name="cat_name" id="catgory" placeholder="Category Name" :class="{ 'is-invalid': form.errors.has('cat_name') }">
                         <has-error :form="form" field="cat_name"></has-error>
                    </div>
                </div>
                <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Update</button>
                </div>
              </form>
            </div>
            <!-- /.card -->

          </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
</template>

<script>
    export default {
        name: 'Edit',
        data(){
            return {
                form: new Form({
                    cat_name: '',
                })
            }
        },
        mounted(){
            this.editCategory()
        },
        methods: {
            updateCategory(){
                this.form.post(`/update-category/${this.$route.params.id}`)
                .then((result) => {
                    this.$router.push('/category-list')
                    Toast.fire({
                        icon: 'success',
                        title: 'Category Updated'
                    })
                }).catch((err) => {

                });
            },
            editCategory(){
                axios.get(`/edit-category/${this.$route.params.id}`)
                .then((result) => {
                    this.form.fill(result.data.category)
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
