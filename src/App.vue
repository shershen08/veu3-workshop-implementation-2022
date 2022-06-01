<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/product">product</router-link>
  </nav>
  
  <router-view/>

  <footer class="page-footer text-center font-small mt-4 wow fadeIn">

    <!--Call to action-->
    <div class="pt-4">
      <a class="btn btn-outline-white" href="cart.html" role="button">
        cart
      </a>
      <a class="btn btn-outline-white" href="home.html" role="button">
        home
      </a>
      <a class="btn btn-outline-white" href="product.html" role="button">
        product
      </a>
    </div>
    <!--/.Call to action-->

    <hr class="my-4">


  </footer>
</template>
<script>
import { defineComponent, onMounted,  } from 'vue'
import {loadProducts} from '@/services/products'
import {useStore} from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

  const loadData = () => {
        loadProducts().then(json=> {
              store.commit('setProducs', json.data)
            })
  }

     onMounted(() => {
      loadData()
    })
  },
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
