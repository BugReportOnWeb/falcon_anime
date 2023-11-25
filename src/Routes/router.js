import Router from "express";
import {
    getHome,
    getCategory,
    getGenre,
    getAboutInfo,
    getSearch
} from '../Controllers/Export.js';
import {
    validateCategory,
    validateGenre
} from '../Middleware/Export.js';

const router = Router()

// /anime/search?keyword=${query}&page=${page}
router.get("/anime/search", getSearch);

// /anime/:id
router.get("/anime/:id", getAboutInfo);

// /:category?page=${page}
router.get("/:category", validateCategory, getCategory);

// /genre/:genre?page=${page}
router.get("/genre/:genre", validateGenre, getGenre)

// /
router.get("/", (_, res) => res.redirect("/"));

// /home
router.get("/home", getHome);


export default router;