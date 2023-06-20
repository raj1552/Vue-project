
<template>
  <Navigation/>
  <Banner/>
  <Featured/>
  <fproduct/>
<accesor/>
  <Accessories/>
  <footer/>

</template>

<script>
import Navigation from './Navigation.vue';
import Banner from'./Banner.vue'
import Featured from './Featured.vue';
import Fproduct from './Fproduct.vue';
import Accessories from './Accessories.vue';
import Accesor from './Accesor.vue';
import footer from './footer.vue';
export default{
  name:'app',
  components:{
    Navigation,
    Banner,
    Featured,
    Fproduct,
    Accessories,
    Accesor,
    footer
}
}
</script>
<style lang="scss">
@import 'src/main.css';

</style>
