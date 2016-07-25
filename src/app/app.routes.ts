import { provideRouter, RouterConfig } from '@angular/router';

import {EmployeesRoutes} from "./components/employees/employees.routes";
import {ProductsRoutes} from "./components/products/products.routes";

export const routes: RouterConfig = [
  ...ProductsRoutes,
  ...EmployeesRoutes
 
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];