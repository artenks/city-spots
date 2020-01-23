import { Router } from 'express';

import SpotController from './app/controllers/SpotController';
import SearchController from './app/controllers/SearchController';

import validateSearchIndex from './app/validators/SearchIndex';
import validateSpotStore from './app/validators/SpotStore';

const routes = new Router();

routes.get('/spots', SpotController.index);
routes.post('/spots', validateSpotStore, SpotController.store);

routes.get('/search', validateSearchIndex, SearchController.index);

export default routes;
