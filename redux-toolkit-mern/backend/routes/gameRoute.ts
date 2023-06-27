import { Router } from "express";
import { createGame, getAllGames } from "../controllers/gameController";
const router = Router()

router.get("/api/games", getAllGames)
router.post("./api/games/game", createGame)

export default router