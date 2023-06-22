<template>
  <div class="main">
    <section class="product" v-for="item in links" v-bind:key="item">
      <img v-bind:src="item.url" />
      <h1>{{ item.name }}</h1>
      <p>{{ item.message }}</p>
    </section>
  </div>
</template>
<script>
export default {
  name: "fproduct",
  data() {
    return {
      links: [
        {
          url: "src/assets/webasserts/image1.jpg",
          name: "clothes",
          message: "20.00$",
        },
        {
          url: "src/assets/webasserts/image2.jpg",
          name: "clothes",
          message: "20.00$",
        },
        {
          url: "src/assets/webasserts/image4.jpg",
          name: "clothes",
          message: "20.00$"
        },
        {
          url: "src/assets/webasserts/image3.jpg",
          name: "clothes",
          message: "20.00$"
        },
        {
          url: "src/assets/webasserts/image5.jpg",
          name: "clothes",
          message: "20.00$"
        },
        {
          url: "src/assets/webasserts/image8.jpg",
          name: "clothes",
          message: "20.00$"
        },
        {
          url: "src/assets/webasserts/image6.jpg",
          name: "clothes",
          message: "20.00$"
        },
        {
          url: "src/assets/webasserts/image7.jpg",
          name: "clothes",
          message: "20.00$"
        },
        {
          url: "src/assets/webasserts/image00.jpg",
          name: "clothes",
          message: "20.00$"
        },
        {
          url: "src/assets/webasserts/image01.webp",
          name: "clothes",
          message: "20.00$"
        }
      ],
    };
  },
};
</script>
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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 25px;
  text-align: center;
  padding: 8px 12px;
}
.main .product:hover {
  box-sizing: border-box;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  transition: 1s ease all;
}

.main .product img {
  width: 100%;
}
</style>