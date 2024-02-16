
<script >
import { store } from '../store';
import SingleCard from './SingleCard.vue';
export default{
    name: 'AppMain',
    data() {
        return {store};
    },
    components: { SingleCard }
}
</script>

<template>
    
    <div class="p-5">
        <h2>Films</h2>
        <div class="row">
          <SingleCard
          v-for="(movie,index) in store.movies"
          :key="index"
          :item="movie"> </SingleCard>   
        </div>
        <h2>Series</h2> 
      <div class="row"> 
       <SingleCard
       v-for="(serie,index) in store.series"
       :key="index"
       :item="serie"></SingleCard>
    </div>
       

    </div>

</template>

<style scoped>
</style>