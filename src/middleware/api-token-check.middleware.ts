import { NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

export class ApiTokenCheckMiddleware implements NestMiddleware {
    
    use(req: Request, res: Response, next: NextFunction) {
        console.log(req.headers)
        next()
    }
    }

     