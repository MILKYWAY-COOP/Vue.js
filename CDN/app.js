const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      gender: 'Male',
      image:
        'https://imgs.search.brave.com/SU0X3VGsDEmbH4IFBJdcGfP3Nvaj67tIFTpN3MLyGYc/rs:fit:504:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/VTB1YWYwWldnZlN0/aEFKWFV5bWhnSGFH/OSZwaWQ9QXBp'
    };
  }
});

app.mount('#app');
