<template>
<div>
  {{cart}}
</div>
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
import { computed, defineComponent  } from 'vue'
import {useStore} from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

    const cart = computed(() => store.state.cart)

    return {
      cart
    }
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
