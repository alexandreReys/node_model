import { Request, Response } from 'express';
import { Router } from 'express';
const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    res.send('hello world !!');
});

export default routes;
