<script >
export default{
    name:'SingleCard',
    props:[
        'item'
    ],
    data (){
        return{
            
        }
    },
    methods:{
        changeFlags(language){
            if(language.toUpperCase () === 'EN'){
                return 'GB'
            }else if (language.toUpperCase () === 'JA'){
                return 'JP'
            } else if (language.toUpperCase () === 'HE'){
                return 'IL'
            }else if (language.toUpperCase () === 'ZH'){
                return 'CN'
            }else if (language.toUpperCase () === 'KO'){
                return 'KR'
            }else{
                return language;
            }

        }
    }
}
</script>

<template>
 <div class="col-2">
    <div class="card border-0" >
    <img :src= "`https://image.tmdb.org/t/p/w342/${item.poster_path}`" class="card-img-top" alt="...">
    <div class="card-body">
    <div class="testo">
 <h4 class="card-title">{{item.original_title ? item.original_title : item.original_name}}</h4>
    <figure>
        <img :src="`https://flagsapi.com/${changeFlags(item.original_language.toUpperCase())}/flat/24.png`"
        width="24"
        alt="">
    </figure>
    <ul class="d-flex">
        <li v-for="(element,index) in 5"
        :key="index"
        >
        <i class="fa-star"
        :class="(element <= Math.ceil((item.vote_average/2)) ) ? 'fas' : 'far'"></i>

        </li>
    </ul>
    <p class="card-text">{{item.overview}}</p>
    </div>
   
    
    </div>
    </div>

</div>
 
</template>

<style lang="scss">
.card {
  margin: 10px;
  padding-bottom: 50px;
  position: relative;

  .card-body {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    h4, p, ul {
      overflow: scroll;
      scrollbar-width: none;
    }

    h4 {
      height: 60px;
    }

    p {
      height: 200px;
    }

    ul {
      li {
        list-style-type: none;
        width: 80%;
        margin: 0 auto;
      }
    }
  }

  &:hover .card-body {
    display: block;
    background-color: black;
    
  }
}

</style>