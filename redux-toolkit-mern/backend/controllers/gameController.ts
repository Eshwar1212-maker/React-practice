import Game from "../models/Game"
import express, {Request, Response} from 'express';



export const getAllGames = async (req: Request, res: Response) => {
        const games = await Game.find()
        try{
            return res.status(200).json(games)
        }catch(error){
            console.log(error);
            
        }
}

export const createGame = async (req: Request, res: Response) => {
        const gameToCreate = await Game.create(req.body)
        try{
            return res.status(201).json(gameToCreate)
        }catch(error){
            console.log(error);
            return res.status(500).json({msg: 'Could not create this game'})
            
        }
}