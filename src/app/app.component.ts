import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prime-demo';
  isDarkMode: boolean = false;

  private document$ = inject(DOCUMENT);

  protected toggleTheme() {
    const link$ = this.document$.getElementById('app-theme') as HTMLLinkElement;

    if(link$.href.includes('light')) {
      link$.href = './theme-dark.css';
      this.isDarkMode = true;
    } else {
      link$.href = './theme-light.css';
      this.isDarkMode = false;
    }
  }
}
