import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private readonly logger = new Logger('HTTP');

    use(req: Request, res: Response, next: NextFunction) {
        const { method, originalUrl } = req;
        const start = Date.now();

        res.on('finish', () => {
            const { statusCode } = res;
            const duration = Date.now() - start;
            const message = `${method} ${originalUrl} ${statusCode} - ${duration}ms`;
            this.logger.log(message);
        });

        res.on('close', () => {
            const message = `${method} ${originalUrl} - Conexión terminada prematuramente`;
            this.logger.warn(message);
        });

        next();
    }
}
