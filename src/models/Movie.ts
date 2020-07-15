import { Genre } from "./Genre";
import { ProductionCompany } from "./ProductionCompany";
import { ProductionCountry } from "./ProductionCountry";
import { Language } from "./Language";

export interface Movie {
    adult: boolean
    backdrop_path: string
    belongs_to_collection?: any
    budget: number
    genres: Array<Genre>
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: Array<ProductionCompany>
    production_countries: Array<ProductionCountry>
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: Array<Language>,
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}