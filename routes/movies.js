import { Router } from "express";
import { movies } from "../db/data.js";
import { v4 as uuidv4 } from "uuid";

const router = Router()

//ma'lumot qo'shish

router.get('/', (req, res) => {
    res.json(movies)
})

//faqat bitta ma'lumot olib kelish id bilan

router.get('/:id', (req, res) => {
    const movieId = parseInt(req.params.id)
    const isExsist = movies.some(movie => movieId == movie.id)
    if (isExsist) {
        const movieFiltered = movies.filter(movie => movieId == movie.id)
    } else {
        return res.status(404).json({message : "Ma'lumot topilmadi"})
    }
    res.json(movieFiltered)
})

router.post('/', (req, res) => {
    const newMovies = {
        id : uuidv4(),
        title : req.body.title,
        year : req.body.year
    }
    movies.push(newMovies)

    res.json(movies)
})

//ma'lumotni yangilash

router.put('/:id' , (req, res) => {
    const movieId = req.params.id

    const isExsist = movies.some(movie => movieId == movie.id)

    if(isExsist) {
        movies.forEach((d) => {
            if (d.id == movieId) {
                d.title = req.body.title ? req.body.title : d.title,
                d.year = req.body.year ? req.body.year : d.year
            }
        })
    } else {
        return res.status(404).json({message : "Bunday Id lik kino topilmadi"})
    }

    res.json(movies)

}) 

export default router