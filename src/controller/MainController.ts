import { Request, Response, NextFunction } from 'express';

export default class MainController{

    public static main = (req: Request, res: Response, next: NextFunction) : any => {
        res.json({message: 'Welcome to the Blockchain Request Adapter App!'});
    };

    public static health = (req: Request, res: Response) => {
        const data = {
          uptime: process.uptime(),
          message: "Ok",
          date: new Date(),
        };
        res.status(200).send(data);
      };


}