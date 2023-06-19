
<template>
  <Navigation/>
  <Banner/>
  <Featured/>
  <fproduct/>
<accesor/>
  <Accessories/>
  <Footer/>

</template>

<script>
import Navigation from './Navigation.vue';
import Banner from'./Banner.vue'
import Featured from './Featured.vue';
import Fproduct from './Fproduct.vue';
import Accessories from './Accessories.vue';
import Accesor from './Accesor.vue';
import Footer from './Footer.vue';
export default{
  name:'app',
  components:{
    Navigation,
    Banner,
    Featured,
    Fproduct,
    Accessories,
    Accesor,
    Footer
}
}
</script>
<style scoped>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

</style>
