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
      // ... (previous code)

methods: {
  getMovie(apiParms) {
    // Check if searchText is not empty before making the request
    if (store.searchText) {
      axios.get(store.endpointMovies, { params: apiParms })
        .then((res) => {
          console.log(res.data.results);
          store.movies = res.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  getSeries(apiParms) {
    // Check if searchText is not empty before making the request
    if (store.searchText) {
      axios.get(store.endpointSeries, { params: apiParms })
        .then((res) => {
          console.log(res.data.results);
          store.series = res.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  search() {
    const apiParms = {
      api_key: store.apiKey,
      query: store.searchText,
    };

    this.getMovie(apiParms);
    this.getSeries(apiParms);
  },
},

// ... (remaining code)

      mounted(){

      }
}
</script>

<template>
  <AppHeader @emitGetData="search"></AppHeader>
  <AppMain></AppMain>

 
</template>

<style scoped>
</style>
