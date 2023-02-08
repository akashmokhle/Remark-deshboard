<template>
    <div class="w-100">
        <div class="d-flex">
            <Sidebar @listen="toggleSidebar()" :style="`width:${sidebarWidth}%; transition: 500ms`" />
            <slot :style="`width:${mainWidth}%`" />
        </div>
        <Footer />
    </div>

</template>

<script>
    export default {

        data: () => {
            return {
                sidebarWidth: 25,
                mainWidth: 75
            }
        },

        methods: {

            toggleSidebar() {
                if(this.sidebarWidth == 25) {
                    this.sidebarWidth = 8;
                }else{
                    this.sidebarWidth = 25;
                }
            }
        }

    }
</script>