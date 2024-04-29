import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-inscrire',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './inscrire.component.html',
  styleUrl: './inscrire.component.css'
})
export class InscrireComponent {
  username!: string;
  email!: string;
  password!: string;

  constructor(private http: HttpClient) {}
  onSubmit() {
    const userData = { username: this.username, email: this.email, password: this.password };
    this.http.post('http://localhost:8080/', userData)
      .subscribe(
        (response) => {
          console.log('Registration successful', response);
        },
        (error) => {
          console.error('Registration failed', error);
          
        }
      );
  }
}
