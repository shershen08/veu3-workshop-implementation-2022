<template>
    <!--Card-->
            <div class="card">

              <!--Card image-->
              <div class="view overlay">
                <img :src="data.image" class="card-img-top"
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
                  <h5>{{data.title}}</h5>
                </a>
                <h5>
                  <strong>
                    <a href="" class="dark-grey-text">Denim shirt
                      <span class="badge badge-pill danger-color">NEW</span>
                    </a>
                  </strong>
                </h5>

                <h4 class="font-weight-bold blue-text">
                  <strong>{{data.price}}$</strong>
                </h4>

              </div>
              <!--Card content-->

            </div>
            <!--Card-->
</template>

<script>
export default {
    props: ['data']
}
</script>

<style>

</style>