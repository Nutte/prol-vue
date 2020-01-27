<template>
    <!-- header -->
    
    <nav class=" navbar navbar-expand-lg fixed-top" id="heder">
        <!-- header collapse-->
            <a class="navbar-brand" href="index.html">
                <img src="./img/logo.png" width="100" height="100" class="d-inline-block align-top" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                &#8212;
                &#8212;
              </button>
            
        <!-- header collapse-->
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mr-left">
                <li class="nav-item">
                <a class="nav-link" href="../calendar.html">РАСПИСАНИЕ ИГР </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="../tour.html">ТУРНИРЫ</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link" href="../glory-hall.html" >
                    ЗАЛ СЛАВЫ
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">КИЛЛЫ</a>
                    
                    <a class="dropdown-item" href="#">АССИСТЫ</a>
                   
                    <a class="dropdown-item" href="#">СМЕРТИ</a>
                </div>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="../news.html">НОВОСТИ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../login.html">ВХОД</a>
                </li>
            </ul>
            </div>
       
    </nav>

<!-- header -->

</template>

<script>
export default {
    
}
</script>