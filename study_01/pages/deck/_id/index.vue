<template>
    <div class="container">
        <div class="wrap_content">
            <h1>DECK: LEARN ENGLISH BY HUNG {{ this.$route.params.id }}</h1>
            <div class="tools">
                <button class="btn btn-type01">Start now</button>
                <button class="btn btn-type02">Create a card</button>
            </div>
        </div>
        <div class="wrap_content">
            <div class="wrap_card">
                <div class="card">
                    <p><img src="https://i.pinimg.com/236x/45/5d/64/455d643a6d2bfb508be8a3acb66fa3df.jpg" alt=""></p>
                </div>
                <div class="card">
                    <p><img src="https://i.pinimg.com/236x/45/5d/64/455d643a6d2bfb508be8a3acb66fa3df.jpg" alt=""></p>
                </div>
                <div class="card">
                    <p><img src="https://i.pinimg.com/236x/45/5d/64/455d643a6d2bfb508be8a3acb66fa3df.jpg" alt=""></p>
                </div>
                <div class="card">
                    <p><img src="https://i.pinimg.com/236x/45/5d/64/455d643a6d2bfb508be8a3acb66fa3df.jpg" alt=""></p>
                </div>
                <div class="card">
                    <p><img src="https://i.pinimg.com/236x/45/5d/64/455d643a6d2bfb508be8a3acb66fa3df.jpg" alt=""></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    validate(Context) {
        // console.log(Context)
        return /^[0-9]$/.test(Context.params.id);
    }
}
</script>
<style lang="scss" scoped>
h1 {
    text-align: center
}
.tools {
    text-align: center
}
.wrap_content {
    margin-bottom: 20px;
}
.wrap_card{
    display: flex;
    flex-wrap: wrap;
    .card{
        padding: 10px 30px;
        border: 1px solid red;
        width: calc((100% / 4) - (60px / 4));
        margin-bottom: 10px;
        &:not(:nth-of-type(4n)){
            margin-right: 20px;
        }
        p{
            text-align: center
        }
    }
}
</style>