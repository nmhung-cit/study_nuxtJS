<template>
  <div modal="true">
    <div class="wrap">
      <div :data-modal="name" v-if="visibal" class="modal">
        <div class="modal__mask">
            <div class="modal__content">
                <slot :payload="payload"></slot>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    name:{
      type: String,
      required: true
    }
  },
  data(){
    return {
      payload: null
    }
  },
  methods:{
    
  }
};
</script>

<style lang="scss" scoped></style>
