console.log('prova')

const { createApp } = Vue

createApp({
  data() {
    return {
      randomMail: '',
    }
  },
  methods: {
    fetchMail() {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
          console.log(res.data.response)
          const mail = res.data.response
          this.randomMail = mail
        })
    }
  },
  created() {
    this.fetchMail()
  },
}).mount('#app')




// axios
//   .get('https://flynn.boolean.careers/exercises/api/random/mail')
//   .then((res) => {
//     console.log('risposta server')
//     console.log(res);
//     console.log(res.data);
//   })