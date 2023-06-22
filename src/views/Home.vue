<template>
<homebanner/>
<div class="Featured-product">
        <h1>Featured product</h1>
        <h3>Summer Collection new modern design</h3>
        </div>
<fproduct/>
<accesor/>
<accessories/>
<Footer/>
</template>
<script setup>
 import homebanner from'../components/homeBanner.vue'
 import fproduct from '../components/productDetails.vue'
 import Accesor from '../components/accessoriesHeader.vue';
 import accessories from '../components/accessoriesDetails.vue';
 import Footer from '../components/Global/Footer.vue';
</script>
<style>
.Featured-product{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 20px;
}
</style>