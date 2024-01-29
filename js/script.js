const { createApp } = Vue;

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

const app = createApp({
    data: () => ({
        email: null,
        emails: [],
    }),
    created(){
        for(let i = 0; i < 10; i++){
            axios.get(endpoint).then((res) => {
                this.email = res.data.response
                this.emails.push(this.email)
            })
        }
    }
});

app.mount('#root')




