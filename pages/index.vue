<template>
    <!-- MAIN SECTION -->
    <div class="main-container">
        <Header />

        <!--USER TOP HEADING -->
        <div class="d-flex">
            <div class=" text-white px-5 py-1 ">Top Jobs Representative / Statistics</div>
        </div>
        <!--USER TOP HEADING -->

        <!-- USER CARDS START -->
        <div class="user-card px-5 py-2" v-for="user in users">
            <div class="card">
                <div class="card-body justify-contant-between ">
                    <ul>
                        <li><img width="30" :src="user.userImage" alt=""></li>
                        <li><span class="text-dark">{{ user.userName }}</span></li>
                        <li><span class="fw-bold">{{ user.userv }}</span></li>
                        <li><span>{{ user.userCompanies }}</span></li>
                        <li><span>{{ user.userPremium }}</span></li>
                        <li><span>{{ user.userPer }}</span></li>
                        <li><a hraf="#"><i class="fa-solid fa-ellipsis-vertical"></i></a></li>
                    </ul>  
                </div>
            </div>
        </div>
        <!-- USER CARDS START -->


        <!--CATEGORY TOP HEADING -->
        <div class="d-flex">
            <div class=" text-white px-5 py-1 ">Statistics</div>
        </div>
        <!--CATEGORY TOP HEADING -->
        <!-- CATEGORY CARDS START -->
        <div class="container-fluid category ">
            <div class="d-flex">
                <div class="row">
                    <div class="card text-dark caregory-card shadow-lg shadow" v-for="category in cardcategory" >
                        <div class="card-body main ">
                            <!-- card main heading start-->
                            <h5>{{category.title}}</h5>
                            <!-- card main heading end-->
                            <!-- card score & icon start-->
                            <div class="d-flex justify-content-between">
                                <h4 class="fw-bold">{{ category.totleScore }}</h4>
                                <span><i class="fa-solid fa-arrow-up-right-dots"></i></span>
                            </div>
                            <div class="d-flex justify-content-between ">
                                <p>{{ category.totlePercentage }}</p>
                                <i class=" fa-solid fa-circle-up"></i>
                                <a :href="category.link">{{ category.linktitle }}</a>
                            </div>
                        <!-- card score & icon end-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- CATEGORY CARDS END -->

    



    </div>
    <!-- MAIN SECTION -->

</template>

<script>
    export default {
        data(){
            return{
                users:[
                    {   
                        userImage: "https://tse4.mm.bing.net/th?id=OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa&pid=Api&P=0",
                        userName: "John",
                        userv: "2540.58",
                        userCompanies: "150 companies",
                        userPremium: "133 premium",
                        userPer: "+Gold"
                    },
                    {   
                        userImage: "https://tse4.mm.bing.net/th?id=OIP.XfN_dUTzgeHXLeHD9DK0uwHaHa&pid=Api&P=0",
                        userName: "Rocky",
                        userv: "2540.58",
                        userCompanies: "150 companies",
                        userPremium: "78 Premium",
                        userPer: "+Silver"
                    },
                    {   
                        userImage: "https://tse3.mm.bing.net/th?id=OIP.m5IPjbtP__xtoz0TK6DRjQHaHa&pid=Api&P=0",
                        userName: "Abhi Sir",
                        userv: "2540.58",
                        userCompanies: "150 companies",
                        userPremium: "90 Premium",
                        userPer: "+Silver"
                    },
                    {   
                        userImage: "https://tse1.mm.bing.net/th?id=OIP.6P7i1At7TIeqHHQw8cB6jAHaHa&pid=Api&P=0",
                        userName: "James",
                        userv: "2540.58",
                        userCompanies: "150 companies",
                        userPremium: "110 Premium",
                        userPer: "+Gold"

                    },
                ],

                cardcategory:[
                    {
                        title:'Jobs',
                        totleScore:'25.1k',
                        categoryIcon:'',
                        totlePercentage:'+15%',
                        scoreicon:'',
                        link:'/',
                        linktitle:'View More'

                    },
                    {
                        title:'Candidates',
                        totleScore:'12.1k',
                        categoryIcon:'',
                        totlePercentage:'+12%',
                        scoreicon:'',
                        link:'/',
                        linktitle:'View More'

                    },
                    {
                        title:'Companies',
                        totleScore:'25.1k',
                        categoryIcon:'',
                        totlePercentage:'+15%',
                        scoreicon:'',
                        link:'/',
                        linktitle:'View More'

                    },
                    {
                        title:'Consultancy',
                        totleScore:'25.1k',
                        categoryIcon:'',
                        totlePercentage:'+15%',
                        scoreicon:'',
                        link:'/',
                        linktitle:'View More'

                    },
                    
                ]
            }
        }
    }
</script>    


<style lang="scss">

    .main-container {
        width: 100%;
        height: 100vh;
        background-color: rgba($color: #0000000b, $alpha: 0.9);
        
    }

    // USER CARD SECTION
    .user-card ul{
        text-align: center;
        margin-bottom: -7px;
        width: 100%;
        list-style: none;
        justify-content: space-between;
        display: flex;
    }
    .user-card :hover{
        color: white;
        box-shadow: inset;
        background-color: #606a66;
        border-radius: 12px;

    }
    .user-card .card{
        border-radius: 12px;
    }
    .user-card .card .card-body img{
        border-radius: 50%;
    }
    // USER CARD SECTION


    // CATEGORY SECTION

    .category{
        padding: 12px 57px;
        display: flex;
        width: 100%;
    }



    .category .caregory-card .card-body h5{
        font-size: 16px;
        color: white; 
    }

    .category .caregory-card:hover .card-body h5{
        font-size: 16px;
        color: #17e0b1; 
    }

    .category .caregory-card .card-body a{
        margin-bottom: -12px;
        text-decoration: none;
        list-style: none;
    }

    .category .caregory-card .card-body {
        
        margin: -5px;
        text-decoration: none;
        list-style: none;
    }

    .category .caregory-card .card-body span{
        font-size: 22px;
        color: black;
        text-decoration: none;
        list-style: none;
    }

    .category .caregory-card :hover{
        outline-color: red($color: #000000);
    }

    .category .caregory-card {
        border-radius: 12px;
        background: #00E5B0;
        width:17rem;
        margin: 0px 4px;
        justify-content: space-between;
        display: flex;
    }

    .category .caregory-card:hover {
        border-radius: 12px;
        transition: 500ms;
        background-color: white;
    }

</style>