<template>
    <div>
        <!-- MAIN HEADER -->
        <div class="container-fluid p-2">
            <div class="header-container d-flex col-12 align-items-center px-5 ">

                <!-- BRAND SECTION START-->
                <div class="brand fw-bold col-8">Overview</div>
                <!-- BRAND SECTION END-->

                <!-- USER PROFILE SECTION START -->
                <div class="col-4 d-flex justify-contant-between">
                    <!-- OPTION SECTION START -->
                    <div class="options">
                        <ul class="d-flex">
                            <li>
                                <a href="#"><i class=" text-dark fa-solid fa-phone px-3"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class=" text-dark fa fa-message px-3"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class=" text-dark fa-solid fa-bell px-3"></i></a>
                            </li>
                        </ul>
                    </div>
                    <!-- OPTION SECTION END -->
                    <div class="dropdown user-profile pt-2 px-2 shadow">
                        <a class="btn outline-btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" >
                            <img width="25" src="https://tse4.mm.bing.net/th?id=OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH&pid=Api&P=0" alt="">
                            <span class="text-primary "> Akash Mokhle</span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <!-- USER PROFILE SECTION END -->

            </div>
        </div>
        <!-- MAIN HEADER -->

    </div>
</template>

<style lang="scss">
    .header-container {
        height: 68px;
        background-color: #00E5B0;
        border-radius: 12px;
    }

    .options ul li {
        padding-top: 12px;
        font-size: 20px;
        text-decoration: none;
        list-style: none;
    }

    .header-container .user-profile img{
        border-radius: 50%;
    }

    .brand{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 25px;
        color: currentColor;
    }

    .user-profile .dropdown-menu {
        color:black;
        background-color: #00E5B0;
    }

</style>