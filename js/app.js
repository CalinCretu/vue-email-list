console.log('prova')

axios
  .get('https://flynn.boolean.careers/exercises/api/random/mail')
  .then((res) => {
    console.log('risposta server')
    console.log(res);
    console.log(res.data);
  })