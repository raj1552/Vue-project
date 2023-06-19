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
    border-radius: 25px;
    align-items: center;
    padding: 8px 12px;
  }
  .accer .accessories:hover{
    box-shadow:  1px 6px 3px 0 rgb(185, 185, 185);
   transition:1s ease all 
  }
  .accer .accessories img{
    height: 290px;
    width: 303px;
  }

</style>
