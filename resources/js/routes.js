
import AdminHome from './components/admin/AdminHome.vue'
import CategoryList from './components/admin/category/List'
import AddCategory from './components/admin/category/New'
import EditCategory from './components/admin/category/Edit'

// for post
import PostList from './components/admin/post/List'
import AddPost from './components/admin/post/New'
import EditPost from './components/admin/post/Edit'

// Front-End component
import PublicHome from './components/public/PublicHome'
import BlogPost from './components/public/blog/BlogPost'
import SinglePost from './components/public/blog/SingleBlog'



export const routes = [
    {
        path: '/home',
        component: AdminHome,
        name: 'AdminHome'
    },
    {
        path: '/category-list',
        component: CategoryList,
        name: 'CategoryList'
    },
    {
        path: '/add-category',
        component: AddCategory,
        name: 'AddCategory'
    },
    {
        path: '/edit-category/:id',
        component: EditCategory,
        name: 'EditCategory'
    },
    // Post Route
    {
        path: '/post-list',
        component: PostList,
        name: 'PostList'
    },
    {
        path: '/add-post',
        component: AddPost,
        name: 'AddPost'
    },
    {
        path: '/edit-post/:id',
        component: EditPost,
        name: 'EditPost'
    },


    // Front-End Route
    {
        path: '/',
        component: BlogPost,
        name: 'PublicHome'
    },
    {
        path: '/blog',
        component: BlogPost,
        name: 'BlogPost'
    },
    {
        path: '/single-post/:id',
        component: SinglePost,
        name: 'SinglePost'
    },
    {
        path: '/categories/:id',
        component: BlogPost,
        name: 'Categories'
    },

  ]
