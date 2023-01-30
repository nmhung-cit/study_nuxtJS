import Layout from './layout';
 
const Modal = {
    install(vue){
        this.EventBus = new(vue)
        vue.component('v-modal',Layout)
        vue.prototype.$modal = {
            open(params){
                Modal.EventBus.$emit('open', params)
            },
            close(params){
                Modal.EventBus.$emit('close', params)
            }
        }
    }
}

export default Modal
