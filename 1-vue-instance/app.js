const app = Vue.createApp({
    data(){
        return{
            title:"Title of VueJS",
            content:"Lorem ipsum dolor sit amet",
            url:"www.duranapdan.com",
            eduflow:{
                title:"Sayfamı açmak için tıklayınız.",
                target:"_blank",
                url:"duranapdan.com",
                alt:"duran-apdan"
            },
            owner:"Pogaca",
        }
    }
}).mount("#app");