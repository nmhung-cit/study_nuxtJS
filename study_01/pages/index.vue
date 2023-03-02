<template>
  <div class="wrap">
    <div class="banner">
      <div class="banner__item">
        <p class="banner__img"><img src="https://png.pngtree.com/thumb_back/fh260/back_pic/04/63/58/31587235e5aa11e.jpg" alt="banner"></p>
      </div>
    </div>
    <div class="container">
      <div class="title">
        <h2>3 POPULA DECK FOR YOU</h2>
      </div>
      <div class="wrap_content items">
        <div class="items__content">DECK 1</div>
        <div class="items__content">DECK 2</div>
        <div class="items__content">DECK 3</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // layout:'demo'
}
</script>
<style lang="scss" scoped>
.banner{
  &__img img{
    width: 100%;
    max-height: 400px;
    object-fit: cover;
  }
}
.title{
  text-align:center;
  padding:20px;
}
.items{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  &__content{
    border: 1px solid black;
    width: calc((100% / 3) - (60px / 3));
    &:not(:nth-of-type(3n)){
            margin-right: 20px;
        }
  }
  ;
}
</style>