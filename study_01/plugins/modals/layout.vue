<template>
  <div modal="true">
    <div class="wrap">
      <div :data-modal="name" v-if="visible" class="modal">
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
import Modal from "./handle"
export default {
  props:{
    name:{
      type: String,
      required: true
    }
  },
  data(){
    return {
      payload: null,
      visible: false
    }
  },
  methods:{
    open(params){
      this.visible = true;
    },
    close(params){
      this.visible = false;
    }
  },
  beforeMount() {
    Modal.EventBus.$on('open',(params)=>{
      if(this.name === params.name){
        this.open(params)
      }
    })

    Modal.EventBus.$on('close',(params)=>{
      if(this.name === params.name){
        this.close(params)
      }
    })
  },
};
</script>

<style lang="scss" scoped>
.modal{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(122, 156, 159, 0.267);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
</style>
