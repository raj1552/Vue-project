<template>
    <div class="Acc-header">
        <h1>{{ Accessories }}</h1>
    </div>
</template>
<script>
export default{
    name:'Accesor',
data(){
    return{
        Accessories:"Accessories for men and women"
    }
}

}
</script>
<style>
.Acc-header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

}

</style>