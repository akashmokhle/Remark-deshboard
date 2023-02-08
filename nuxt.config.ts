// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
        app:{
            head:{
                link:[
                    {
                        rel: "stylesheet",
                        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
                    },
                    {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" 
                    }
                ],
                script:[
                    {
                        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
                    }
                ]
            }
        }
})
