import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

import {Employee} from "../../models/employee";
import {EmployeeService} from "../../services/employee.service";

@Component({
    selector: 'update-employee',
    template: require("./view/update-employee.component.html"),
    styles: [require("./css/update-employee.component.css")],
    providers: [EmployeeService]
})

export class UpdateEmployeeComponent implements OnInit, OnDestroy {
    employee: Employee;
    private sub: any;
    
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private employeeService: EmployeeService
    ){}
    
    ngOnInit() {
        this.sub = this.route.params
            .subscribe(params => {
                let employeeId = params["id"];
                this.employeeService.getEmployeeById(employeeId)
                    .then(employee => this.employee = employee);
            });
    }
    
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    
    gotoDetail() {
        let employeeId = this.employee ? this.employee._id : null;
        this.router.navigate(['/employees'], {queryParams: {id: employeeId}});
    }
    
    update() {
        this.employeeService.updateEmployee(this.employee);
        this.gotoDetail();
    }
}