console.log('prova')

const { createApp } = Vue;
const apiUrl = 'https://flynn.boolean.careers/exercises/api/random/mail';
const emailList = [];
createApp({
  data() {
    return {
      emailList: [],
    }
  },
  methods: {
    fetchMail() {
      for (let i = 0; i < 10; i++) {
        axios
          .get(apiUrl)
          .then((res) => {
            this.emailList.push(res.data.response)
          })
      }
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