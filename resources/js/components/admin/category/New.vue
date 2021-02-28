<template>
    <section class="content">
      <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- general form elements -->
            <div class="card card-primary mt-4">
              <div class="card-header">
                <h3 class="card-title">Add New Category</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form" @click.prevent="addCategory()">
                <div class="card-body">
                    <div class="form-group">
                        <label for="category">New Categroy</label>
                        <input type="text" class="form-control" v-model="form.cat_name" name="cat_name" id="catgory" placeholder="Category Name" :class="{ 'is-invalid': form.errors.has('cat_name') }">
                         <has-error :form="form" field="cat_name"></has-error>
                    </div>
                </div>
                <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Save</button>
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
        name: 'New',
        data(){
            return {
                form: new Form({
                    cat_name: '',
                })
            }
        },
        methods: {
            addCategory(){
                this.form.post('/add-category')
                .then((result) => {
                    this.$router.push('/category-list')
                    Toast.fire({
                        icon: 'success',
                        title: 'Category Added'
                    })
                }).catch((err) => {

                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
