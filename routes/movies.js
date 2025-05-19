import { Router } from "express";
import { movies } from "../db/data.js";

const router = Router()

//ma'lumo olib kelish

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

export default router