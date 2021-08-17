/**
 * Initializes a new router instance and sets your defined routes.
 *
 * @exports router
 */

import Navigo from '../../../../lib/navigo/index.js';

import { config } from '../../config.js';

import { page } from '../components/layout/page.js';
import { fourOhFour } from '../components/pages/four-oh-four.js';

import { routes } from '../routes.js';

const router = new Navigo(config.basePath);

const parse = (params = {}) => {
  if (params === null || typeof params !== 'object') {
    return {};
  }
  return Object.fromEntries(
    Object.entries(params)
      .filter(param => param[1] !== 'undefined')
      .map(param => [
        param[0],
        param[1] !== '' && !Number.isNaN(Number(param[1]))
          ? Number(param[1])
          : param[1] === 'true'
          ? true
          : param[1] === 'false'
          ? false
          : param[1] === 'null'
          ? null
          : param[1],
      ]),
  );
};

const routeHandler = pageBody => ({ params, data }) => {
  const namedRoutes = routes.filter(route => `name` in route);
  const cleanData = { ...data };
  cleanData.id = !data || !('id' in data) ? -1 : data.id;
  const root = document.getElementById('root');
  root.innerHTML = '';
  root.appendChild(page(pageBody(parse(data), parse(params)), namedRoutes));
};

routes
  .map(route => {
    route.callback = routeHandler(route.page);
    return route;
  })
  .forEach(route => router.on(route.path, route.callback));

// 404, the user tried accessing a route that does not exist
router.notFound(({ url }) => {
  const namedRoutes = routes.filter(route => `name` in route);
  const root = document.getElementById('root');
  root.innerHTML = '';
  root.appendChild(page(fourOhFour(url), namedRoutes));
});

router.resolve();
