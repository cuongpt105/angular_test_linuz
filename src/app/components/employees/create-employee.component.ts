import {Component, OnInit, OnDestroy} from "@angular/core";

import {Router} from "@angular/router";

import {Employee} from "../../models/employee";
import {EmployeeService} from "../../services/employee.service";

@Component({
    selector: 'create-employee',
    template: require("./view/create-employee.component.html"),
    styles: [require("./css/create-employee.component.css")],
    providers: [EmployeeService]
})


export class CreateEmployeeComponent implements OnInit, OnDestroy {
    private employee: Employee;
    private sub: any;
    
    constructor(
        private router: Router,
        private employeeService: EmployeeService
    ){}
    
    ngOnInit() {
        this.employee = new Employee("", "", "", new Date(), "", 0);
    }
    
    ngOnDestroy() {
        
    }
    
    gotoDetail() {
        this.router.navigate(['/employees']);
    }
    
    create() {
       // let employeeCreated : Employee;
        this.employeeService.createEmployee(this.employee)
                            .subscribe(employee => {
                                this.employee = employee;
                            });
                            
        this.router.navigate(['/employees'], {queryParams: {id: this.employee._id}});
    }
}