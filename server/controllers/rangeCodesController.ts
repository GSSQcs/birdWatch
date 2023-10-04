import { Request, Response, NextFunction } from 'express';

// Import dotenv variables
import dotenv from 'dotenv';
dotenv.config();
const EBIRD_API_KEY = process.env.EBIRD_API_KEY;

const rangeCodesController: any = {};

rangeCodesController.getSubRegions = function (req: Request, res: Response, next: NextFunction) {
  console.log('rangeCodesController.getSubRegions invoked');

  const { state } = req.params;
  console.log(state);

  let myHeaders = new Headers();
  myHeaders.append("X-eBirdApiToken", `${EBIRD_API_KEY}`);

  const requestOptions: any = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(`https://api.ebird.org/v2/ref/region/list/subnational2/${state}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      res.locals.subNational2Codes = result;
      return next();
    })
    .catch(error => console.log('error:', error));
};

export default rangeCodesController;