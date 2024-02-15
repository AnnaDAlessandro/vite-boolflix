import {reactive} from "vue";
export const store= reactive({
    searchText:'',
    movies:[],
    series:[],
    apiKey:'e1636b0170219715ac2faa25dc290353',
    enpointMovies:'https://api.themoviedb.org/3/search/movie',
    enpointSeries:'https://api.themoviedb.org/3/search/tv'

})