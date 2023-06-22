<template>
  <div class="accer">
    <section class="accessories" v-for="items in links" v-bind:key="items">
      <img v-bind:src="items.url" />
      <h1>Airpods</h1>
      <p>10.00$</p>
    </section>
  </div>
</template>
<script>
export default {
  name: "accessories",
  data() {
    return {
      links: [
        {
          url: "src/assets/webasserts/airpods.webp",
        },
        {
          url: "src/assets/webasserts/airbuds.webp",
        },
        {
          url:'src/assets/webasserts/smartwatch.webp'
        }
        ,
        {
          url:'src/assets/webasserts/sportswatch.webp'
        }
        ,
        {
          url:'src/assets/webasserts/watch.webp'
        },
      ],
    };
  },
};
</script>
<style>
.accer {
  display: grid;
  grid-gap: 70px 20px;
  grid-template-columns: repeat(5, 1fr);
  margin: auto;
  padding: 30px;
  padding-bottom: 40px;
}
.accer .accessories {
  position: relative;
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 25px;
  align-items: center;
  padding: 10px 15px;
  transition: top ease 0.5s;
}
.accer .accessories:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    top: -10px;
}
.accer .accessories img {
  width: 100%;
}
</style>
