<template>
    <div class="main-container">
        <Header />
        
        <div class=" container d-flex text-dark ">  
            <div class="col-12 companies">
                <div class="row">
                    <div class="col-9 companies-list ">

                        <!-- TOP TITLE START -->
                        <div class=" d-flex justify-content-between px-5 pt-2 title-section rounded" >
                            <div>
                                <h3 class="text-dark">Consultancy</h3>
                            </div>
                            <div>
                                <div class="dropdown shadow">
                                    <button class="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Add To Consultancy
                                    </button>
                                    <ul class="dropdown-menu" style="background-color: #00e5b0;">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>      
                            </div>
                        </div>
                        <br />
                        <!-- TOP TITLE START -->

                        <div class="card px-5" style="background-color: #13192D;" v-for="list in consultanlist">
                            <ul class="d-flex justify-content-between">
                                <li ><a href=""></a><img width="30" :src="list.consultanimage " alt=""> {{ list.consultanname }}</li>
                                <li><a href=""></a>{{ list.consultaneducation }}</li>
                                <li><a href=""></a>{{ list.consultanwork }}</li>
                                <li><a href=""></a><span class="badge bg-secondary"> {{ list.consultancategory }}</span></li>
                                <li><a href=""></a>{{ list.consultansalary }}</li>
                            </ul>
                        </div>
                    </div>
                    <!-- USER PROFILE SECTION START -->
                    <div class="col-3 d-flex text-center rounded user-profile " >
                        <div class="card" v-for="job in jobs" style="text-align: center;">
                            <!-- PROFILE IMAGE -->
                            <div class="bg-dark p-5 " style="margin-bottom: 22px; border-radius: 5%; margin-top: 8px; background-image: url('https://images.unsplash.com/photo-1633886036701-c25cbd528ee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'); background-size: cover;">
                                <img class="" style="margin-bottom: -100px;" width="70" :src="job.jobImage"  alt="...">
                            </div>
                            <!-- PROFILE IMAGE -->

                            <div class="card-body">
                                <h5 class="card-title ">{{job.jobTitle }}</h5>
                                <h6 class="card-subtitle">{{ job.jobSubtitle }} </h6>
                                <p class="card-para">{{ job.jobPara }}</p>
                                <a href="#" ><button class="">{{ job.jobBtn }}</button></a>
                            </div>
                       </div>
                    </div>
                    <!-- USER PROFILE SECTION END -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
        export default {
        data(){
            return {
                consultanlist:[
                    {
                        consultanimage: 'https://images.unsplash.com/photo-1666408738188-212c470d08b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHVzZXIlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                        consultanname: 'Mr. Rocky',
                        consultaneducation: 'M.B.A',
                        consultanwork: 'Web Developer',
                        consultancategory:'Medium',
                        consultansalary:'15220'
                    },
                    {
                        consultanimage: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                        consultanname: 'Mr. Rocky',
                        consultaneducation: 'M.B.A',
                        consultanwork: 'Web Developer',
                        consultancategory:'Medium',
                        consultansalary:'15220'
                    },
                    {
                        consultanimage: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                        consultanname: 'Mr. Rocky',
                        consultaneducation: 'M.B.A',
                        consultanwork: 'Web Developer',
                        consultancategory:'Medium',
                        consultansalary:'15220'
                    },
                    {
                        consultanimage: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                        consultanname: 'Mr. Rocky',
                        consultaneducation: 'M.B.A',
                        consultanwork: 'Web Developer',
                        consultancategory:'Medium',
                        consultansalary:'15220'
                    },
                    {
                        consultanimage: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
                        consultanname: 'Mr. Rocky',
                        consultaneducation: 'M.B.A',
                        consultanwork: 'Web Developer',
                        consultancategory:'Medium',
                        consultansalary:'15220'
                    },
                    {
                        consultanimage: 'https://images.unsplash.com/photo-1661953118591-2f5be524698e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
                        consultanname: 'Mr. Rocky',
                        consultaneducation: 'M.B.A',
                        consultanwork: 'Web Developer',
                        consultancategory:'Medium',
                        consultansalary:'15220'
                    },
                    {
                        consultanimage: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
                        consultanname: 'Mr. Rocky',
                        consultaneducation: 'M.B.A',
                        consultanwork: 'Web Developer',
                        consultancategory:'Medium',
                        consultansalary:'15220'
                    },

                ],

                jobs:[
                    {
                        jobImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
                        jobTitle: 'Mr. Rocky',
                        jobSubtitle: 'Web Developer',
                        jobPara: 'Some quick example text to build on the card title and make up the bulk of the cards content',
                        jobBtn: 'More info'
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

    .title-section{
        background-color: #17e0b1;
    }

    .companies{
        margin-top: 20px;
    }

    .companies .companies-list{
        
        justify-content: space-between;
        text-align: center;
        color: rgb(167, 165, 165);

    }

    .companies .companies-list ul{
        padding: 10px 0px;
        justify-content: space-between;
        text-align: center;
        text-decoration: none;
        list-style: none;
    }

    .companies .companies-list ul:hover{
        box-shadow: 10px 4px blue;
        border-radius: 15px;
        transition: 100ms;
        padding: 10px 10px;
        background-color: #17e0b1;
        color: black;
    }

    .companies .companies-list img{
        border-radius: 500px;
    }

    .companies .compnaies-list button{
        font-size: 12px;
        padding: 6px;
        border-radius: 5px;
    }

    .companies .companies-list button:hover{
        border-radius: 8px;

    }

    .user-profile {
        height: 350px;
    }

    .user-profile .card{
        background-color: #17e0b1;
    }

    .user-profile img{
        border-radius: 50%;
    }

    .user-profile .card-body h5{
        color: rgba($color: #0000000b, $alpha: 0.9);
        font-size: 18px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


    }

    .user-profile .card-body h6{
        
        padding: 6px 0px;
        color: rgba($color: #6560600b, $alpha: 0.9);
        
    }

    .user-profile .card-body p{
        font-size: 12px;
        padding: 0px 0px;
        // color: rgba($color: #6560600b, $alpha: 0.9);
        color: blue($color: #000000);
     
    }
    .user-profile .card-body button{

        background-color: rgba($color: #0000000b, $alpha: 0.9);
        color: #17e0b1;
        padding: 4px;
        font-size: 12px;
        border-radius: 8px;
    }

    .user-profile .card-body button:hover{

        background-color: rgb(210, 221, 231);
        transition: 1000ms;
        color: black;
        box-shadow: 2px 2px red($color: #000000);
    } 

</style>