import { Router } from 'express';

import SpotController from './app/controllers/SpotController';
import SearchController from './app/controllers/SearchController';

const routes = new Router();

routes.get('/spots', SpotController.index);
routes.post('/spots', SpotController.store);

routes.get('/search', SearchController.index);

export default routes;
