<template>
    <div class="container">
        <h1>List of your decks</h1>
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
        // setID(){
        //     this.$router.push(`deck/${this.id}`)
        // }
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
</style>