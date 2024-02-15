<script >

import AppHeader from './components/AppHeader.vue';

import AppMain from './components/AppMain.vue';
import axios from 'axios';
import {store} from './store';
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
  getMovies(apiParams) {
    // Check if searchText is not empty before making the request
    if (store.searchText) {
      axios.get(store.endpointMovies, { params: apiParams }) // Fix the parameter name here
        .then((res) => {
          console.log(res.data.results);
          store.movies = res.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  getSeries(apiParams) {
    // Check if searchText is not empty before making the request
    if (store.searchText) {
      axios.get(store.endpointSeries, { params: apiParams }) // Fix the parameter name here
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
    const apiParams = {
    params: {
    api_key: store.apiKey,
    query: store.searchText,
  }
  };

    this.getMovies(apiParams)
    this.getSeries(apiParams)
  }
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

<style lang="scss">
</style>
