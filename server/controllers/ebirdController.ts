import { Request, Response, NextFunction } from 'express';

// Import dotenv variables
import dotenv from 'dotenv';
dotenv.config();
const EBIRD_API_KEY = process.env.EBIRD_API_KEY;

const ebirdController: any = {};


ebirdController.getBirds = function (_req: Request, res: Response, next: NextFunction) {
  console.log('ebirdController.getBirds invoked');

  const myHeaders = new Headers();
  myHeaders.append("X-eBirdApiToken", `${EBIRD_API_KEY}`);

  const requestOptions: any = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://api.ebird.org/v2/data/obs/US/recent", requestOptions)
    .then(response => response.json()) // was .text()
    .then(result => {
      res.locals.birds = result;
      return next();
    })
    .catch(error => console.log('error', error));
};


// ebirdController.getSubRegionBirds = function (_req: Request, res: Response, next: NextFunction) {
//   console.log('ebirdController.getSubRegionBirds invoked');

//   const { subNational2Codes } = res.locals;
//   // console.log(subNational2Codes);

//   const myHeaders = new Headers();
//   myHeaders.append("X-eBirdApiToken", `${EBIRD_API_KEY}`);

//   const requestOptions: any = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
//   };

//   res.locals.subRegBirds = {};

//   for (let i = 0; i < 3; i++) {

//     const subNat2Code: any = subNational2Codes[i].code;
//     const subNatName: any = subNational2Codes[i].name;
//     console.log("subNat2Code:", subNat2Code);

//     // let birds: object[] = [];

//     fetch(`https://api.ebird.org/v2/data/obs/${subNat2Code}/recent`, requestOptions)
//       .then(response => response.json())
//       .then((result: Array<object>): void => {
//         // console.log(result);
//         const birds: object[] = [];
//         for (let i: number = 0; i < 5; i++) {
//           birds.push(result[i]);
//         }
//         // console.log("birds in then chain", birds);
//         res.locals.subRegBirds[subNatName] = birds;
//         // console.log('*************** res.locals.subRegBirds', res.locals.subRegBirds);
//         return next();
//       })
//       .catch(error => console.log('error', error));
//     // console.log(birds);
//   }
//   // res.locals.birds = subRegBirds;
//   console.log("subRegBirds:", res.locals.subRegBirds);
//   // return next();
// };


ebirdController.getSubRegionBirds = async (_req: Request, res: Response, next: NextFunction) => {
  console.log('ebirdController.getSubRegionBirds invoked');

  const { subNational2Codes } = res.locals;
  // console.log(subNational2Codes);

  const myHeaders = new Headers();
  myHeaders.append("X-eBirdApiToken", `${EBIRD_API_KEY}`);

  const requestOptions: any = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  res.locals.subRegBirds = {};

  try {
    for (let i = 0; i < 3; i++) {

      const subNat2Code: any = subNational2Codes[i].code;
      const subNatName: any = subNational2Codes[i].name;
      console.log("subNat2Code:", subNat2Code);

      let birds: object[] = [];

      const result: any = await fetch(`https://api.ebird.org/v2/data/obs/${subNat2Code}/recent`, requestOptions);
      console.log('LINE 105:', result);
      const response: any = await result.json();

      for (let i = 0; i < 5; i++) {
        birds.push(response[i]);
      }
      console.log("birds in catch block", birds);
      res.locals.subRegBirds[subNatName] = birds;
    }
  } catch (error) {
    return next(error);
  }
  // res.locals.birds = subRegBirds;
  console.log("subRegBirds:", res.locals.subRegBirds);
  return next();
};


export default ebirdController;