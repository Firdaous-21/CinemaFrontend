import { Component } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { FooterComponent } from "../footer/footer.component";
@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [TabMenuModule, FooterComponent]
})
export class NavbarComponent {

}

