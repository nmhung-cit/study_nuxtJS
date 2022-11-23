<template>
    <div>
        <h1>Please, select the page you need</h1>
        <input v-model="id" type="text" Placeholder="number">
        <input @click="setID" type="button" value="Sent"> 
    </div>
</template>
<script>
export default {
    data(){
        return {
            id:""
        }
    },
    methods:{
        setID(){
            this.$router.push(`demo/${this.id}`)
        }
    }
}
</script>
