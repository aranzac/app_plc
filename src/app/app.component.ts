import { Component } from '@angular/core';
@Component({
  selector: 'app-root', // Selector utilizado en index.html
  templateUrl: './app.component.html', //  Código html a visualizar
  styleUrls: ['./app.component.scss'] // Los estilos CSS a utilizar
})
export class AppComponent {
  // Exportar la clase del componente
  title = 'app';
}
