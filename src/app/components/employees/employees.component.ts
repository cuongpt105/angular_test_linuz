import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";

import {Employee} from "../../models/employee";
import {EmployeeService} from "../../services/employee.service";

@Component({
    template: require("./view/employees.component.html"),
    styles: [require("./css/employees.component.css")],
    providers: [EmployeeService]
})

export class EmployeesComponent implements OnInit, OnDestroy {
   employees: Employee[];
   private employeeId: String;
   private sub: any;
    
    public constructor(
        private employeeService: EmployeeService,
        private router: Router) {}
    
    ngOnInit() {
        this.sub = this.router
            .routerState
            .queryParams
            .subscribe( params => {
                this.employeeId = params["id"];
                this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
            });
    }
    
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    
    isSelectedEmployee(employeeId: string) {
        return this.employeeId === employeeId;
    }
    
    createEmployee() {
        this.router.navigate(['/employees/create']);
    }
    
    viewEmployee(employeeId: string) {
        this.router.navigate(['/employees/view', employeeId]);
    }
    
    updateEmployee(employeeId: string) {
        this.router.navigate(['/employees/update', employeeId]);
    }
}