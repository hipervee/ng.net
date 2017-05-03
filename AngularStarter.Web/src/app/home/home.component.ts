import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
    moduleId: module.id,
    selector: 'as-home',
    templateUrl: 'home.html',
    styleUrls: [
        'home.css'
    ],
    providers: [HomeService]
})
export class HomeComponent {
    constructor(private homeSvc: HomeService) {
        this.homeSvc.getPersons().then(data => {
            console.log(data);
        });
    }
}
