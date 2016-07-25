import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Employee} from "../models/employee";
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class EmployeeService {
    public constructor(public http: Http) {}
    
    private employeesUrl = 'http://localhost:3000/admin/employees';  // URL to web API
    
    getEmployees(): Observable<Employee[]> {
        return this.http.get(this.employeesUrl)
                        .map(res => res.json())
                        .catch(this.handleError);
    }
    
    private handleError (error: any) {
        //console.log('An error occurred', error);
        return Observable.throw(error.message || error);
    }
    
    getEmployeeById(employeeId: string) : Promise<Employee> {
        return this.http.get(this.employeesUrl+'/'+employeeId)
                        .toPromise()
                        .then(response => response.json())
                        .catch(this.handleError);
    }
       
    updateEmployee(employee: Employee) : Promise<Employee> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.employeesUrl}/${employee._id}`;
        return this.http
                    .put(url, JSON.stringify(employee), {headers: headers})
                    .toPromise()
                    .then(response => response.json())
                    .catch(this.handleError);
    }
    
    createEmployee(employee: Employee) : Observable<Employee> {
         let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
                    .post(this.employeesUrl, JSON.stringify(employee), {headers: headers})
                    .map(res => res.json())
                    .catch(this.handleError);
    }
}

