import { Router } from 'express';

import SpotController from './app/controllers/SpotController';

const routes = new Router();

routes.get('/spots', SpotController.index);
routes.post('/spots', SpotController.store);

export default routes;
