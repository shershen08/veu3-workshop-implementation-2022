<template>
    <main>
    <div class="container">
<button @click="onClick">load products</button>
Total products: {{length}}
      <!--Navbar-->
      <nav class="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">

        <!-- Navbar brand -->
        <span class="navbar-brand">Categories:</span>

        <!-- Collapse button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
          aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Collapsible content -->
        <div class="collapse navbar-collapse" id="basicExampleNav">

          <!-- Links -->
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">All
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Shirts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sport wears</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Outwears</a>
            </li>

          </ul>
          <!-- Links -->

          <form class="form-inline">
            <div class="md-form my-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            </div>
          </form>
        </div>
        <!-- Collapsible content -->

      </nav>
      <!--/.Navbar-->

       <!--Section: Products v.3-->
      <section class="text-center mb-4">
<!-- 
        <div v-if="items.loading">
          loading catalogue...
        </div>
        <div v-if="items.error">
          Error laoding catalogue
        </div> -->

        <!--Grid row-->
        <div class="row wow fadeIn">

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4"
               v-for="(item, index) in products" :key="`${index}--items`">

            <ProductItem :data="item" @enter="gotoProduct(item)"/>

          </div>
          <!--Grid column-->


        </div>
        <!--Grid row-->


        <!--Grid row-->

      </section>
      <!--Section: Products v.3-->

      <!--Pagination-->
      <nav class="d-flex justify-content-center wow fadeIn">
        <ul class="pagination pg-blue">

          <!--Arrow left-->
          <li class="page-item disabled">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>

          <li class="page-item active">
            <a class="page-link" href="#">1
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">5</a>
          </li>

          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
      <!--Pagination-->

    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import {useRouter} from 'vue-router'
import ProductItem from '@/components/ProductItem'
// import {useStore} from 'vuex'
import {useProducts} from '@/hooks/products'

export default {
  name: 'HomeView',
  components: {
    ProductItem
  },
  setup(){
    const router = useRouter()
    const {products, loadData, length} = useProducts()
  

    const gotoProduct = ({id}) => {
      router.push({
        name: 'product',
        params: {
          id
        }
      })
    }

    const onClick = () => {
      loadData()
    }

    return {
      //items,
      gotoProduct,
      products,
      onClick,
      length
    }
    
  },
  // data: () => ({
  //   items: []
  // }),
  // methods: {
              // @click="gotoProduct(item)"
    //
  // },
  // mounted(){
  //   this.loadData()
  // }
}
</script>
