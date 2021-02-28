<template>
    <section class="content">
      <div class="row justify-content-center">
        <div class="col-md-10">
            <!-- general form elements -->
            <div class="card card-primary mt-4">
              <div class="card-header">
                <h3 class="card-title">Add New Post</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form" enctype="multipart/form-data" @submit.prevent="addNewPost()">
                <div class="card-body">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" v-model="form.title" name="title" id="title" placeholder="Post Title" :class="{ 'is-invalid': form.errors.has('title') }">
                        <has-error :form="form" field="title"></has-error>
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea class="form-control" v-model="form.description" name="description" id="description" placeholder="Post Description" :class="{ 'is-invalid': form.errors.has('description') }"></textarea>
                        <has-error :form="form" field="description"></has-error>
                    </div>
                    <div class="form-group">
                        <label>Select Category</label>
                        <select class="custom-select" :class="{ 'is-invalid': form.errors.has('cat_id') }" v-model="form.cat_id">
                          <option disabled value="">Select One</option>
                          <option :value="category.id" v-for="category in getAllCategory" :key="category.id">{{category.cat_name}}</option>
                        </select>
                        <has-error :form="form" field="cat_id"></has-error>
                    </div>
                     <div class="form-group">
                        <input @change="changePhoto($event)" type="file" id="photo" name="photo" :class="{ 'is-invalid': form.errors.has('photo') }">
                        <img :src="form.photo" alt="" width="80px" height="50px">
                        <has-error :form="form" field="photo"></has-error>
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
            return{
                form: new Form({
                    title: '',
                    description: '',
                    cat_id: '',
                    photo: '',
                })
            }
        },
        mounted(){
            this.allCategory();
        },
        methods:{
            allCategory(){
                this.$store.dispatch('allCategory')
            },
            changePhoto(event){
                let file = event.target.files[0];
                if (file.size > 1568576) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                        })
                } else {
                     let reader = new FileReader();
                    reader.onload = event => {
                    this.form.photo = event.target.result
                    }
                    reader.readAsDataURL(file);
                }

            },
            addNewPost(){
                this.form.post('/save-post')
                .then((result) => {
                    this.$router.push('/post-list')
                    Toast.fire({
                        icon: 'success',
                        title: 'Post Added'
                    })
                }).catch((err) => {

                });
            }
        },
        computed:{
            getAllCategory(){
                return this.$store.getters.getCategory;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
