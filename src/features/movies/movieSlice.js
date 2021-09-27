import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import APIKey  from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies', 
    async () => {
        const movieText = "Harry";
        const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        return response.data
    }
)

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows', 
    async () => {
        const seriesText = "Friends";
        const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${seriesText}&type=series`)
        return response.data
    }
)

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    'movies/fetchAsyncMovieOrShowDetail', 
    async (id) => {
        const response = await movieApi
        .get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
        return response.data
    }
)

const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {}
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: state => {
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, action) => {
            console.log("Fetched Successfully!")
            return { ...state, movies: action.payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected")
        },
        [fetchAsyncShows.fulfilled]: (state, action) => {
            console.log("Fetched Successfully!")
            return { ...state, shows: action.payload }
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, action) => {
            console.log("Fetched Successfully!")
            return { ...state, selectMovieOrShow: action.payload }
        }
    }
});
console.log("movieSlice::::",movieSlice)
export const { removeSelectedMovieOrShow } = movieSlice.actions;

export default movieSlice.reducer;

// createAsyncThunk toma un argumento type y una función llamada payloadCreator
// que es básicamente una función asíncrona (o función que devuelve una promesa) que recopila datos.

// Lo que createAsyncThunk hace aquí es crear automáticamente un creador de acciones para cada estado
// de Promise. Por ejemplo, si nombramos a nuestro procesador asíncrono 'movies/fetchAsyncMovies', genera:

// pending: "movies/fetchAsyncMovies/pending"
// rejected: "movies/fetchAsyncMovies/rejected"
// fulfilled: "movies/fetchAsyncMovies/fulfilled"

// En este punto, manejará cada acción en el slice, como extra reducers: 

// extraReducers: {
//     [fetchAsyncMovies.pending]: state => {
//         state.loading = "yes";
//     },
//     [fetchAsyncMovies.rejected]: (state, action) => {
//         state.loading = "";
//         state.error = action.error.message;
//     },
//     [fetchAsyncMovies.fulfilled]: (state, action) => {
//         state.loading = "";
//         state.data = action.payload ;
//     }
// }

// Para obtener el mensaje de error de la Promesa de rechazo, accederá a action.error.message

// Para obtener en su lugar la carga útil de la API, accederá a action.payload


// Si necesita acceder a los parámetros de thunk para usar dispatch o getState, pase el parámetro
// thunkAPI a la función de devolución de llamada 