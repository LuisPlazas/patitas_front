import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  img! : string
  @Input()
  titulo! : string;
  @Input()
  descripcion! : string;
  @Input()
  edadGenero! : string;
}
