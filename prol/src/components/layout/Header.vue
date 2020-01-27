<template>
    <nav class=" navbar navbar-expand-lg fixed-top" id="heder">

        <router-link class="navbar-brand" to="/">
            <img src="./../../assets/img/logo.png" width="100" height="100" class="d-inline-block align-top" alt="">
        </router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            &#8212;
            &#8212;
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mr-left">
                <li class="nav-item">
                    <router-link class="nav-link" to="calendar">РАСПИСАНИЕ ИГР </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="tour">ТУРНИРЫ</router-link>
                </li>
                <li class="nav-item dropdown">
                    <router-link class="nav-link" to="glory-hall">
                        ЗАЛ СЛАВЫ
                    </router-link>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">КИЛЛЫ</a>

                        <a class="dropdown-item" href="#">АССИСТЫ</a>

                        <a class="dropdown-item" href="#">СМЕРТИ</a>
                    </div>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="news">НОВОСТИ</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="login">ВХОД</router-link>
                </li>
            </ul>
        </div>

    </nav>

    <!-- header -->

</template>

<script>
    export default {
        name: 'header',
        methods: {
            handleScroll() {
                const doc = document.documentElement;
                const st = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
                let header = document.getElementById("heder");

                if(st >= 50) {
                    if( !header.classList.contains("navSkrol") ) {
                        header.classList.add("navSkrol");
                    }
                }  
                else {
                    if( header.classList.contains("navSkrol") ) {
                        header.classList.remove("navSkrol");
                    }
                }
            }
        },
        mounted() {
            window.addEventListener("scroll", this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener("scroll", this.handleScroll);
        }
    }
</script>