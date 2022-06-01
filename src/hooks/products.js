import { computed, onMounted } from 'vue'
import {useStore} from 'vuex'
import {loadProducts} from '@/services/products'
    
export const useProducts = (doImmediateDataloading = false) => {
    //as in setup
    const store = useStore()
    const products = computed(() => store.state.products) // products = ref([])
    
    const itemsLength = computed(() => products.value.length)

    const loadData = () => {
        loadProducts().then(json=> {
            store.commit('setProducs', json.data)
        })
    }
     onMounted(() => {
         if(doImmediateDataloading) {
             loadData()
         }
    })

    return {
        products,
        loadData,
        length: itemsLength
    }
}