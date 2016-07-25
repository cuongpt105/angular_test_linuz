import { RouterConfig }          from '@angular/router';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent }   from './crisis-list.component';
import { CrisisCenterComponent } from './crisis-center.component';

export const CrisisCenterRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/crisis-center',
    terminal: true
  },
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      { path: ':id',  component: CrisisDetailComponent },
      { path: '',     component: CrisisListComponent }
    ]
  }
];