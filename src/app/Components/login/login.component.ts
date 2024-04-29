import { Component } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [InputTextModule, CheckboxModule, ButtonModule, FooterComponent]
})
export class LoginComponent {

}
