import { bootstrap } from '@angular/platform-browser-dynamic';
import { PLATFORM_DIRECTIVES } from '@angular/core';
import { enableProdMode } from '@angular/core';
import {HTTP_PROVIDERS} from "@angular/http";
import { AppComponent } from './app/app.component';
import {APP_ROUTER_PROVIDERS} from "./app/app.routes";

if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, 
  [APP_ROUTER_PROVIDERS, HTTP_PROVIDERS]
 ).catch(err => console.error(err));