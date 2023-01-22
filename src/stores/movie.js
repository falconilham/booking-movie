import { defineStore } from "pinia";
// Import axios to make HTTP requests
import { api } from "../http";
export const useMovieStore = defineStore("movie", {
    state: () => {
        return {
            movies: [],
            listBooking: []
        }
    },
    getters: {
        getUsers(state) {
            return state.movies;
        },
    },
    actions: {
        setBooking(listSeats) {
            console.log({ listSeats })
            const currentListBooking = [...this.listBooking, listSeats]
            this.listBooking = currentListBooking
        },
        async getMovies() {
            try {
                const data = await api.get('', {
                    params: {
                        s: 'movie',
                        plot: 'full'
                    }
                });
                this.movies = data.data.Search;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async getMovie(imdbID) {
            try {
                const getDetailMovie = await api.get('', {
                    params: {
                        i: imdbID
                    }
                })
                return getDetailMovie.data
            } catch (error) {
                alert(error)
                console.log(error);
            }
        }
    },
});

