import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  
  heroes: string[] = ['Iron Man', 'Spiderman', 'Thor', 'Hulk', 'Cápitan América'];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.pop() || '';
  }

}
