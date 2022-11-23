<template>
    <div>
        <h1>THIS IS PAGE {{this.$route.params.id}}</h1>
    </div>
</template>

<script>
export default{
    data(){
        return{
            
        }
    },
    validate(Context){
        console.log(Context);
        return /^[0-9]{6,9}$/.test(Context.params.id);
    }
}
</script>
