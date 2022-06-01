<template>
    <!--Card-->
            <div class="card">

              <!--Card image-->
              <div class="view overlay" @click="$emit('enter')">
                <img :src="image" class="card-img-top"
                  alt="">
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              <!--Card image-->

              <!--Card content-->
              <div class="card-body text-center">
                <!--Category & Title-->
                <a href="" class="grey-text">
                  <h5>{{title}}</h5>
                </a>
                <h5>
                  <strong>
                    <a href="" class="dark-grey-text">Denim shirt
                      <span class="badge badge-pill danger-color">NEW</span>
                    </a>
                  </strong>
                </h5>

                <h4 class="font-weight-bold blue-text">
                  <strong>{{price}}$</strong>
                </h4>

                <input v-model="amount" type="number"/>
                <button @click="addToCart">Add to cart</button>

              </div>
              <!--Card content-->

            </div>
            <!--Card-->
</template>

<script>
import {reactive, toRefs, ref} from 'vue'
import {useStore} from 'vuex'
export default {
    emits: ['enter'],

    props: {
        data: {
            type: Object,
            required: true,
            // default: () => ({
            //     image: '',
            //     price: null,
            //     secondImage: {
            //         front: 'foo'
            //     }
            // })
        }
    },
    setup(props){
        const product = reactive(props.data)
        // product.title = 'ertyuio' + product.title
        const store = useStore()

        const amount = ref(1)
        const addToCart = () => {
            store.commit('addCartItem', {product})
            // product.qty =+ 1 
        }

        return {
            ...toRefs(product),
            amount,
            addToCart
        }
    }
}
</script>

<style>

</style>