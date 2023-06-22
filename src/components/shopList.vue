<template>
    <h1>For girls</h1>
<div class="main">
    <section class="product" v-for="items in links" v-bind:key="items">
            <img v-bind:src="items.url" alt="">
        </section>
</div>
</template>
<script>
export default{
    name:'Shop',
    data(){
        return{
            links:[{
                url:'src/assets/webasserts/zara 5.jpg'
            },
            {
                url:'src/assets/webasserts/zara 6.jpg'
            },
            {
                url:'src/assets/webasserts/zara4.jpg'
            },
        {
           url:'src/assets/webasserts/zara12.jpg' 
        }
        ,
        {
           url:'src/assets/webasserts/zara11.jpg' 
        }
        ,
        {
           url:'src/assets/webasserts/zara9.jpg' 
        }
        ,
        {
           url:'src/assets/webasserts/zara7.jpg' 
        }
        ,
        {
           url:'src/assets/webasserts/zara1.jpg' 
        }
        ,
        {
           url:'src/assets/webasserts/zara2.jpg' 
        }
        ,
        {
           url:'src/assets/webasserts/zara3.jpg' 
        }]
        }
    }
}</script>
<style>
.main {
  display: grid;
  grid-gap: 70px 20px;
  grid-template-columns: repeat(5, 1fr);
  margin: auto;
  padding: 30px;
  padding-bottom: 40px;
}
.product {
  position: relative;
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 25px;
  text-align: center;
  padding: 8px 12px;
  transition: top ease 0.5s;
}
.main .product:hover {
  box-sizing: border-box;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  top: -10px;
  transition: 0.5s ease-in all;
}

.main .product i{
    margin: 5px;
}
.main .product img {
  width: 100%;}
  </style>