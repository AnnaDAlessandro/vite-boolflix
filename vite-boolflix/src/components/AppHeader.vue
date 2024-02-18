<script >
import {store} from '../store'
export default{
    name:'AppHeader',
    data (){
        return{
           store
        }
    }
}
</script>

<template>
    <header class="p-3 container d-flex justify-content-around align-item-center">
        <h1>
            Boolflix
        </h1>
 
      <div class="d-flex align-items-center gap-4 g-0">
     <label for="search" class="form-label">Cerca:</label>
         <input type="text"
         class="form-control "
         name=""
         id="search"
         placeholder="Cosa vuoi vedere?"
         v-model="store.searchText">
         <button class="btn btn-secondary">
          <i class="fas fa-magnifying-glass" @click="$emit('emitGetData')"></i>
         </button>
     </div>

    </header>
 
</template>

<style lang="scss" scoped>
h1{
    color: red;
}
</style>