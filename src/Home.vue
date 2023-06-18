<template>
    <div class="Banner-container">
    </div>
</template>

<script>
export default{
    name:'Home'
}
</script>

<style lang="scss" scoped>

.Banner-container{
    background-image: url(https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=1380&t=st=1686974053~exp=1686974653~hmac=feb4bb0a30e07fd01d93520d0a0cfc9ec34a98859d1ec3ea6434642a1d0a07bd);
    height: 90vh;
    width: 100%;
    background-size: cover;
    background-position: top 20% right 0;
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    font-size: 25px;
}
</style>