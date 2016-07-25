import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import {Employee} from "../../models/Employee";
import {EmployeeService} from "../../services/employee.service";

@Component({
    template: require('./view/view-employee.component.html'),
    styles: [require('./css/view-employee.component.css')],
    providers: [EmployeeService]
})

export class ViewEmployeeComponent implements OnInit, OnDestroy {
    employee: Employee;
    
    private sub: any;
    
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private employeeService: EmployeeService
    ) {}
    
    
    ngOnInit() {
        this.sub = this.route.params
            .subscribe(params => {
                let employeeId : string = params["id"];
                this.employeeService.getEmployeeById(employeeId)
                .then(employeeFilter => this.employee = employeeFilter);
            });
    }
    
    ngOnDestroy() {
     this.sub.unsubscribe();   
    }
    
    gotoDetail() {
        let employeeId = this.employee ? this.employee._id : null;
        this.router.navigate(['/employees'], {queryParams: {id: employeeId}});
    }
}