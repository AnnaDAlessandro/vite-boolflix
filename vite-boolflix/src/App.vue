<script >

import AppHeader from './components/AppHeader.vue';

import AppMain from './components/AppMain.vue';

import SingleCard from './components/SingleCard.vue';
export default{
    data() {
        return {};
    },
    components: {
       AppHeader, 
       SingleCard, 
       AppMain 
      },
      methods:{

      },
      mounted(){

      }
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <SingleCard></SingleCard>

 
</template>

<style scoped>
</style>
