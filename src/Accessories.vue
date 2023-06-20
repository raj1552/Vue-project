<template>
 <div class="accer">
    <section class="accessories">
        <img src="src/webasserts/airpods.webp" alt="">
        <h1>Airpods</h1>
        <p>10.00$</p>
    </section>
    <section class="accessories">
        <img src="src/webasserts/airpods.webp" alt="">
        <h1>Airpods</h1>
        <p>10.00$</p>
    </section>
    <section class="accessories">
        <img src="src/webasserts/airpods.webp" alt="">
        <h1>Airpods</h1>
        <p>10.00$</p>
    </section>
    <section class="accessories">
        <img src="src/webasserts/airpods.webp" alt="">
        <h1>Airpods</h1>
        <p>10.00$</p>
    </section>
 </div>
</template>
<script>
export default{
    name:'Accessories'
}</script>
<style>
  .accer{
    display: grid;
    grid-gap: 70px 20px;
    grid-template-columns: repeat(4,1fr);
    width: 100%;
    margin: auto;
    padding: 20px;
    padding-bottom: 40px;
  }
  .accer .accessories{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    border-radius: 25px;
    align-items: center;
    padding: 8px 12px;
  }
  .accer .accessories:hover{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
   transition:1s ease all ;
  }
  .accer .accessories img{
    height: 290px;
    width: 303px;
  }

</style>
