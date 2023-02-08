<template>
    <div class="main-sidebar ">
        <!-- MAIN SEIDBAR SECTION -->
       <div class="sidebar-container p-2">
        <!-- LOGO SECTION START-->
        <div class="logo-section">
            <div class="d-flex justify-content-between fw-bold text-center ">
                <div class="Logo my-2">
                    <a href="#">
                        <img width="80" src="https://remarkhr.com/img/logo/remark-logo.png" alt="">
                    </a>                    
                </div>
                <div class="py-3 px-2">
                    <button @click="$emit('listen')" class="btn btn-dark btn-outline-info px-2 py-1" ><i class="fa-solid fa-power-off"></i></button>
                </div>
            </div>

            <div>

            </div>
        </div>
        <!-- LOGO SECTION END-->

        <div class="menus pt-5 fw-bold" >
            <ul>
                <li>
                    <a href="/"><i class="fa-solid fa-house-user px-2"></i> 
                    <span class="px-4"> Dashboard</span></a>
                </li>
                <br />
                <li>
                    <a href="/jobs"><i class="fa-solid fa-star px-2"></i>
                        <span class="px-4"> Jobs</span></a>
                </li>
                <br />
                <li>
                    <a href="/candidates"><i class="fa-solid fa-user px-2"></i>
                        <span class="px-4"> Candidates</span></a>
                </li>
                <br />
                <li>
                    <a href="/companies"><i class="fa-solid fa-building px-2"></i>
                        <span class="px-4"> Companies</span></a>
                </li>
                <br />
                <li>
                    <a href="/consultancy"><i class="fa-solid fa-chair px-2"></i>
                        <span class="px-4"> Consultancy </span></a>
                </li>
                <br />
            </ul>
        </div>
       </div>

        <!-- MAIN SEIDBAR SECTION -->

    </div>
</template>

<script>
export default {

    data:() => {
        return {}
    },
    methods: {

        toggleSidebar() {

        }

    }

}
</script>

<style lang="scss">


    .sidebar-container{    
        border-radius: 0px 20px 20px 0px;
    }

    .main-sidebar{
        background-color: rgba($color: #0000000b, $alpha: 0.9);
    }

    .logo-section{
        border-radius: 12px;
        background-color: rgba($color: #0000000b, $alpha: 0.9);
    }

    .sidebar-container {
        background-color: #00e5b0;
        height: 100vh;
    }

    .sidebar-container .Logo a{
        padding-left: 12px;
        color: rgba($color: #0000000b, $alpha: 0.9);
        list-style: none;
        text-decoration: none;
}
    .sidebar-container .menus ul{
        text-decoration: none;
    }
    .sidebar-container .menus ul li{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        
        padding: 8px;
        font-size: 15px;
        list-style: none;
        text-decoration: none;

    }
    .sidebar-container .menus ul li a{
        
        text-decoration: none;
        color: black;

    }
    .sidebar-container .menus ul li:hover{
        text-shadow: 0px 1px #00e5b0;
        transition: 500ms;
        border-radius: 8px;
        background-color: #B6FFDC;
        box-shadow: 2px 2px red($color: #000000);
        
    }



</style>