import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Gallery from '../views/Gallery.vue'
import contact from '../views/Contact.vue'
import shop from '../views/Shop.vue'


const routes=[
    {
        path:'/',
        name:'Home',
        component:Home

},
{
    path:'/product',
    name:'product',
    component:Product
},
{
    path:'/contact',
    name:'contact',
    component:contact
},
{
    path:'/shop',
    name:'shop',
    component:shop
},
{
    path:'/gallery',
    name:'gallery',
    component:Gallery
}
]
const router=createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;