
<template>
<div class="app">
  <Navigation/>
  </div>
  <div class="banner">
    <Home/>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
import Home from './Home.vue'
import Carrers from './Carrers.vue'
import  Gallery from './Gallery.vue'
import Contactus  from './Conactus.vue'
import Annual from './Annualreports.vue'
import Whoweare from'./Whoweare.vue'

export default{
  name:'app',
  components:{
    Navigation,
    Home,
    Carrers,
    Whoweare,
    Contactus,
    Gallery,
    Annual
  }
}
</script>
<style scoped>

</style>
