import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  serverEmailUrl: string = 'Your Email Server';

  form: any = {
    "name": "",
    "email": "",
    "subject": "Nuevo Contacto de PackoSketch",
    "message": "",
  }

  formCorrect: boolean;

  formIncorrect: boolean;

  emailIncorrect: boolean;

  email: string;

  name: string;

  message: string;

  constructor(private http: HttpClient) { }

  sendIt() {
    this.restartConditions();

    if (this.name && this.message) {
      if (this.email) {
        if (!this.email.includes('@')) {
          this.emailIncorrect = true;
        }
      } else {
        this.emailIncorrect = true;
      }
    } else {
      this.formIncorrect = true;
      this.emailIncorrect = true;
    }
    if (!this.formIncorrect && !this.emailIncorrect) {
      this.form.name = this.name;
      this.form.email = this.email;
      this.form.message = this.message;
      return this.http.post(this.serverEmailUrl, this.form).subscribe(() => {
        this.email = "";
        this.name = "";
        this.message = "";
        this.formCorrect = true;
        setTimeout(() => {
          this.restartConditions();
        }, 5000);
      });
    }
    setTimeout(() => {
      this.restartConditions();
    }, 5000);
  }

  restartConditions() {
    this.formCorrect = false;
    this.formIncorrect = false;
    this.emailIncorrect = false;
  }
}
