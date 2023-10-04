import express from 'express';
import { Request, Response, NextFunction } from 'express';
import rangeCodes from '../regionCodes.json' assert {type: 'json'};

const router = express.Router();

// deliver US state range codes to front end for drop down menu population
router.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  return res.status(200).json(rangeCodes);
});

router.get('/:state', (_req: Request, res: Response, _next: NextFunction) => {

})

export default router;