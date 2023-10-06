import express from 'express';
import { Request, Response, NextFunction } from 'express';
import ebirdController from '../controllers/ebirdController';

const router = express.Router();

router.get('/',
  (_req: Request, _res: Response, next: NextFunction) => {
    console.log('router.get recieved request at endpoint /')
    return next();
  },
  ebirdController.getBirds,
  (_req: Request, res: Response) => {
  return res.json(res.locals.birds);
  }
)

export default router;