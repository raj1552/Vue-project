<template>
    <div class="Banner-image">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On All Products</h1>
        <p>Save more with coupons & 70% off%</p>
        <div class="btn">
            <span> Explore now &#x2794;</span>
        </div>
        </div>
</template>
<script>
export default{
    name:'Banner'
}
</script>
<style>
.Banner-image{
    background-image: url("src/webasserts/1152281-women-model-simple-background-short-hair-Asian-white-dress-dress-fashion-hands-on-hips-wedding-dress-spring-clothing-Masami-Nagasawa-bride-dance-arm-gown-photo-shoot.jpg");
    height: 90vh;
    width: 100%;
    background-size: cover;
    background-position: top 10% right 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
}
.Banner-image h4,h2,h1,p{
    padding: 0 80px;
    
}
.Banner-image,.btn,span{
    padding: 0 80px;
    background-color: wheat;
    padding: 20px;
    border-radius: 20px;
}

</style>