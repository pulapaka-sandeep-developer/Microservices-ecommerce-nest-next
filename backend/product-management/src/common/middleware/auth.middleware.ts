import {
    Injectable,
    NestMiddleware,
    UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if (req) next();
        else throw new UnauthorizedException('Invalid token');
    }
}


// export class AuthMiddleware implements NestMiddleware {
//     use(req: Request, res: Response, next: NextFunction) {
//         const authHeader = req.headers.authorization;

//         if (!authHeader) {
//             throw new UnauthorizedException('Authorization header missing');
//         }

//         const token = authHeader.split(' ')[1];
//         if (!token) {
//             throw new UnauthorizedException('Token missing');
//         }

//         try {
//             const payload = jwt.verify(
//                 token,
//                 process.env.JWT_SECRET || 'secretKey',
//             );

//             // Attach user info to request
//             req['user'] = payload;
//             next();
//         } catch {
//             throw new UnauthorizedException('Invalid token');
//         }
//     }
// }


