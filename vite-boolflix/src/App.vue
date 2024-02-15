<script >

import AppHeader from './components/AppHeader.vue';

import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store';
export default{
    data() {
        return {store};
    },
    components: {
       AppHeader,  
       AppMain 
      },
      methods:{
        //https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+fut//
         getData(){
        if(store.searchText){
        
          axios.get(`${store.enpointMovies}?api_key=${store.apiKey}&query=${store.searchText}`).then((res) =>{
            console.log(res.data.results)

          }).catch((err)=>{
            console.log(err)
          })
        }
 
        }
       
        
      },
      mounted(){

      }
}
</script>

<template>
  <AppHeader @emitGetData="getData"></AppHeader>
  <AppMain></AppMain>

 
</template>

<style scoped>
</style>
