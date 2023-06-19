<template>
<div class="main">
        <section class="product">
        <img src="src/webasserts/image01.webp" alt="">
        <h1>cloth</h1>
        <p>10.00$</p>
    </section>
    <section class="product">
        <img src="src/webasserts/image01.webp" alt="">
        <h1>cloth</h1>
        <p>10.00$</p>
    </section>
    <section class="product">
        <img src="src/webasserts/image01.webp" alt="">
        <h1>cloth</h1>
        <p>10.00$</p>
    </section>
    <section class="product">
        <img src="src/webasserts/image01.webp" alt="">
        <h1>cloth</h1>
        <p>10.00$</p>
    </section>
    <section class="product">
        <img src="src/webasserts/image01.webp" alt="">
        <h1>cloth</h1>
        <p>10.00$</p>
    </section>
    <section class="product">
        <img src="src/webasserts/image01.webp" alt="">
        <h1>cloth</h1>
        <p>10.00$</p>
    </section>
    <section class="product">
        <img src="src/webasserts/image01.webp" alt="">
        <h1>cloth</h1>
        <p>10.00$</p>
    </section>
    <section class="product">
        <img src="src/webasserts/image01.webp" alt="">
        <h1>cloth</h1>
        <p>10.00$</p>
    </section>
</div>
</template>
<script>
export default{
    name:'fproduct'
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
    border-radius: 25px;
    align-items: center;
    padding: 8px 12px;
}
.main .product:hover{
    box-sizing: border-box;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
   transition:1s ease all ;
}

.main .product img{
  width: 100%;
}
</style>