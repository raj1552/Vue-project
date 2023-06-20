<template>
    <div class="footer">
        <div class="fot-image">
            <img src="src/webasserts/221-2218794_hype-clothing-logo.png" alt="">
        </div>
        <div class="ourservice">
            <h1>Our service</h1>
            <p>About us</p>
            <p>Our work</p>
            <p>Pricing</p>
            <p>Help center</p>
            <p>LogIn</p>
        </div>
        <div class="company">
            <h1>Our company</h1>
            <p>Terms and condition</p>
            <p>Contact us</p>
        </div>
        <div class="followus">
            <h1>Follow Us</h1>
            <p>Facebook</p>
            <p>Instragram</p>
            <p>Twitter</p>
        </div>
  </div>
</template>
<script>
export default{
    name:'Footer'
}</script>
<style>
.footer{
    width: 100%;
    background-color: black;
    color: white;
    display: grid;
    grid-gap: 70px 20px;
    grid-template-columns: repeat(4,1fr);
    padding: 100px 300px;
    cursor: pointer;
}
.footer .fot-image img{
    width: 90px;
      border-radius: 50px;
      transition: 0.5s ease all;
}
</style>