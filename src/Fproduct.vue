<template>
<div class="main">
        <section class="product">
        <img  v-bind:src="url">
        <h1>{{ name }}</h1>
        <p>{{ message }}</p>
    </section>
    <section class="product">
        <img  v-bind:src="url">
        <h1>{{ name }}</h1>
        <p>{{ message }}</p>
    </section>
    <section class="product">
        <img  v-bind:src="url">
        <h1>{{ name }}</h1>
        <p>{{ message }}</p>
    </section>
    <section class="product">
        <img  v-bind:src="url">
        <h1>cloth</h1>
        <p>10.00$</p>
    </section>
    <section class="product">
        <img  v-bind:src="url">
        <h1>cloth</h1>
        <p>10.00$</p>
    </section>
    <section class="product">
        <img  v-bind:src="url">
        <h1>cloth</h1>
        <p>10.00$</p>
    </section>
    <section class="product">
        <img  v-bind:src="url">
        <h1>cloth</h1>
        <p>10.00$</p>
    </section>
    <section class="product">
        <img v-bind:src="url">
        <h1>cloth</h1>
        <p>10.00$</p>
    </section>
</div>
</template>
<script>
export default{
   data(){
    return{
        url:'src/webasserts/image01.webp',
        name:'cloth',
        message:'10.00$'
    }
   }
}
</script>
<style>
.main{
    display: grid;
    grid-gap: 70px 20px;
    grid-template-columns: repeat(4,1fr);
    width: 100%;
    margin: auto;
    padding: 30px;
    padding-bottom: 40px;
}
.main .product{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    border-radius: 25px;
    align-items: center;
    padding: 8px 12px;
}
.main .product:hover{
    box-sizing: border-box;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
   transition:1s ease all ;
}

.main .product img{
  width: 100%;
}
</style>