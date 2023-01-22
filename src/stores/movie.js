import { defineStore } from "pinia";
// Import axios to make HTTP requests
import { api } from "../http";
export const useMovieStore = defineStore("movie", {
    state: () => {
        return {
            movies: [],
            listBooking: [],
            loading: false
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
            this.loading = true
            try {
                const data = await api.get('', {
                    params: {
                        s: 'movie',
                        plot: 'full'
                    }
                });
                this.movies = data.data.Search;
                this.loading = false
            } catch (error) {
                alert(error);
                console.log(error);
                this.loading = false
            }
        },
        async getMovie(imdbID) {
            this.loading = true
            try {
                const getDetailMovie = await api.get('', {
                    params: {
                        i: imdbID
                    }
                })
                this.loading = false
                return getDetailMovie.data
            } catch (error) {
                alert(error)
                this.loading = false
                console.log(error);
            }
        }
    },
});

