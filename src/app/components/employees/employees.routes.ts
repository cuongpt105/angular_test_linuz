import {RouterConfig} from '@angular/router';

import {EmployeeCenterComponent} from './employee-center.component';
import {EmployeesComponent} from './employees.component';
import {ViewEmployeeComponent} from './view-employee.component';
import {CreateEmployeeComponent} from './create-employee.component';
import {UpdateEmployeeComponent} from './update-employee.component';

export const EmployeesRoutes: RouterConfig = [
    {
        path: '',
        redirectTo: '/employees',
        terminal: true
    },
    {
        path: 'employees', component: EmployeeCenterComponent,
        children: [
            { path: '', component: EmployeesComponent},
            { path: 'view/:id', component: ViewEmployeeComponent},
            { path: 'update/:id', component: UpdateEmployeeComponent},
            { path: 'create', component: CreateEmployeeComponent}
        ]
    }
]