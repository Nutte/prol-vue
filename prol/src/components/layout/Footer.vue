<template>
    <footer class="page-footer font-small blue pt-4">

        <a v-on:click.prevent="() => scrollToTop(300)" id="go-top"><i class="fa fa-angle-up"></i></a>

        <!-- Footer Links -->
        <div class="container-fluid footer-conteiner text-center text-md-left">

            <!-- Grid row -->
            <div class="row">


                <!-- Grid column -->
                <div class="col-md-3 mt-md-0 mt-3">

                    <!-- Content -->
                    <a class="navbar-brand" href="#">
                        <img src="./../../assets/img/logo.png" width="150" height="150" class="d-inline-block align-top" alt="">
                    </a>

                </div>
                <!-- Grid column -->

                <hr class="clearfix w-100 d-md-none pb-3">

                <!-- Grid column -->
                <div class="col-md-3 mb-md-0 mb-3">

                    <!-- Links -->
                    <h5 class="text-uppercase">
                        МЫ В СОЦСЕТЯХ</h5>

                    <ul class="list-unstyled">
                        <li>
                            <a href="#!">facebook</a>
                        </li>
                        <li>
                            <a href="#!">instagram</a>
                        </li>
                        <li>
                            <a href="#!">youtube</a>
                        </li>
                        <li>
                            <a href="#!">vkontakte</a>
                        </li>
                    </ul>

                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-3 mb-md-0 mb-3">

                    <!-- Links -->
                    <h5 class="text-uppercase">НАШИ ПАРТНЕРЫ</h5>

                    <img src="./../../assets/img/footer-partner.png" width="200" height="60" class="d-inline-block align-top" alt="">

                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-3 mb-md-0 mb-3">

                    <!-- Links -->
                    <h5 class="text-uppercase">КРЕАТИВНЫЙ ПАРТНЕР</h5>

                    <!-- Content -->
                    <a class="navbar-brand" href="#">
                        <img src="./../../assets/img/logo-part.png" width="150" height="30" class="d-inline-block align-top" alt="">
                    </a>
                </div>
                <!-- Grid column -->

            </div>
            <!-- Grid row -->

        </div>
        <!-- Footer Links -->

        <!-- Copyright -->
        <div class="footer-copyright  py-3"> <a href="#"> Developed by Lights.agency </a> | all rights reserved ©

        </div>
        <!-- Copyright -->

    </footer>
</template>

<script>
    export default {
        name: 'footer',
        methods: {
            topButton() {
                const doc = document.documentElement;
                const st = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
                var btn = document.getElementById("go-top");

                if(st > 300) {
                    if( !btn.classList.contains("show") ) {
                        btn.classList.add("show");
                    }
                }  
                else {
                    if( btn.classList.contains("show") ) {
                        btn.classList.remove("show");
                    }
                }
            },
            scrollToTop(scrollDuration) {
                let scrollHeight = window.scrollY,
                    scrollStep = Math.PI / ( scrollDuration / 15 ),
                    cosParameter = scrollHeight / 2;

                let scrollCount = 0,
                    scrollMargin,
                    scrollInterval = setInterval( () => {
                        if ( window.scrollY !== 0 ) {
                            scrollCount = scrollCount + 1;
                            scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
                            window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
                        }
                        else clearInterval(scrollInterval);
                    }, 15 );
            }
        },
        mounted() {
            window.addEventListener("scroll", this.topButton);
        },
        beforeDestroy() {
            window.removeEventListener("scroll", this.topButton);
        }
    }
</script>