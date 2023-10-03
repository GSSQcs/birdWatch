import { Request, Response, NextFunction } from 'express';

const ebirdController: any = {};

ebirdController.getBirds = function (_req: Request, _res: Response, next: NextFunction) {
  console.log('ebirdController.getBirds invoked');

  const myHeaders = new Headers();
  myHeaders.append("X-eBirdApiToken", "3ad9r5c0g9c1");

  const requestOptions: any = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://api.ebird.org/v2/data/obs/US/recent", requestOptions)
  .then(response => response.json()) // was .text()
  .then(result => {
    console.log(result);
    return next();
  })
  .catch(error => console.log('error', error));
};

export default ebirdController;