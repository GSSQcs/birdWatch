import express from 'express';
import { Request, Response, NextFunction } from 'express';
import rangeCodes from '../regionCodes.json' assert {type: 'json'};
import rangeCodesController from '../controllers/rangeCodesController';
import ebirdController from '../controllers/ebirdController';

const router = express.Router();

// deliver US state range codes to front end for drop down menu population
router.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  return res.status(200).json(rangeCodes);
});

router.get('/:state',
  (_req: Request, _res: Response, next: NextFunction) => {
    console.log('rangeCodeRouter recieved GET request at endpoint /:state')
    return next();
  },
  rangeCodesController.getSubRegions,
  ebirdController.getSubRegionBirds,
  (_req: Request, res: Response, _next: NextFunction) => {
    const { subRegBirds } = res.locals;
    console.log('subRegBirds to be sent to client:', subRegBirds);
    return res.status(200).json(subRegBirds);
  })

export default router;