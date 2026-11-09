import { ProfileCard } from './profile-card/profile-card';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Gaspar, Paula Andrea Q.';
  location = 'Porac, Pampanga';
  email = 'paulaandreaquitogaspar@gmail.com';
  phone = '0969 168 2303';

  profile = 'I am a student interested in web development. I enjoy learning new technologies and building useful applications.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
