import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  // Close the mobile menu if the screen is resized to desktop width.
  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 1200) {
      this.menuOpen = false;
    }
  }
}
