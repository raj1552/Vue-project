<template>
    <div v-bind:class="[{Banner_image:images},'fitting']">
        <h4>{{ Trade }}</h4>
        <h2>{{ Deals }}</h2>
        <h1>{{ Product }}</h1>
        <p>{{ Save }}</p>
        <div v-bind:class="[{impclass:isimp}]">
            <span>{{ Explore }} &#x2794;</span>
        </div>
        </div>
</template>
<script>
export default{
    data(){
        return{
            Trade:'Trade-in-offer',
            Deals:'Super value Deals',
            Product:'On All Products',
            Save:'Save more with coupons & 70% off%',
            Explore:' Explore now',
            isimp:true,
            images:true
        }
    }
}
</script>
<style>
.Banner_image{
    background-image: url('src/webasserts/1152281-women-model-simple-background-short-hair-Asian-white-dress-dress-fashion-hands-on-hips-wedding-dress-spring-clothing-Masami-Nagasawa-bride-dance-arm-gown-photo-shoot.jpg');
    height: 90vh;
    background-size: cover;
    background-position: top 20% right 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    font-size: 25px;
}
.fitting{
    padding: 0 80px;
}
.impclass{
    padding: 10px 50px;
    border-radius: 50px;
    background-color: blueviolet;
}

</style>