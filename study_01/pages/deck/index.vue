<template>
    <div class="container">
        <div class="title-list">
            <h1>List of your decks</h1>
            <button @click.prevent="opentModal">Create a desk</button>
        </div>
        <!-- <input v-model="id" type="text" Placeholder="number">
        <input @click="setID" type="button" value="Sent">  -->
        <ul class="card">
            <li class="card__item">
                <nuxt-link to="/deck/1">
                    <p class="card__item--img"><img src="https://thumbs.dreamstime.com/b/baltic-see-very-nice-pic-klaip%C4%97da-176842928.jpg" alt=""></p>
                    <h3 class="card__item--title">Title</h3>
                    <p class="card__item--des">description</p>
                </nuxt-link>
            </li>
            <li class="card__item">
                <nuxt-link to="/deck/2">
                    <p class="card__item--img"><img src="https://thumbs.dreamstime.com/b/baltic-see-very-nice-pic-klaip%C4%97da-176842928.jpg" alt=""></p>
                    <h3 class="card__item--title">Title</h3>
                    <p class="card__item--des">description</p>
                </nuxt-link>
            </li>
            <li class="card__item">
                <nuxt-link to="/deck/3">
                    <p class="card__item--img"><img src="https://thumbs.dreamstime.com/b/baltic-see-very-nice-pic-klaip%C4%97da-176842928.jpg" alt=""></p>
                    <h3 class="card__item--title">Title</h3>
                    <p class="card__item--des">description</p>
                </nuxt-link>
            </li>
            <li class="card__item">
                <nuxt-link to="/deck/4">
                    <p class="card__item--img"><img src="https://thumbs.dreamstime.com/b/baltic-see-very-nice-pic-klaip%C4%97da-176842928.jpg" alt=""></p>
                    <h3 class="card__item--title">Title</h3>
                    <p class="card__item--des">description</p>
                </nuxt-link>
            </li>
        </ul>
        <v-modal name="test">
            <div class="wrap__modal-test">
                <h1>hello , test modal</h1>
                <button class="bnt__close" @click.prevent="closeModal">close</button>
            </div>
        </v-modal>
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
        opentModal(){
            this.$modal.open({name: "test"})
        },
        closeModal(){
            this.$modal.close({name: "test"})
        }
    }
}
</script>

<style lang="scss" scoped>
.card{
    display:flex;
    flex-wrap: wrap;
    &__item{
        width: calc((100% / 3) - (20px / 3));
        &:not(:nth-of-type(3n)){
            margin-right: 10px;
        }
        &--img{
            // height: 50%;
            object-fit: cover;
        }
    }

}
.title-list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    & button{
        padding: 10px;
        background-color:rgb(216, 170, 2);
        cursor: pointer;
        border-radius: 6px;
        font-size: 16px;
        color: #ffffff;
        font-weight: bold;
    }
}
.wrap__modal-test{
    padding: 20px;
    background: #fff;
    border-radius: 10px;
}
.bnt__close{
    padding: 5px;
    background-color: rgb(124, 15, 15);
    color: #fff;
    box-shadow: 0 0 10px red;
    cursor: pointer;
}
</style>