<template>
<banner/>
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
 import banner from'../components/Banner.vue'
 import fproduct from '../components/Fproduct.vue'
 import Accesor from '../components/Accesor.vue';
 import accessories from '../components/Accessories.vue';
 import Footer from '../components/footer.vue';
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