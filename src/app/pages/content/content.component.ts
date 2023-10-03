import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  @Input()
  photoCover: string =
    'https://www.global-esports.news/wp-content/uploads/2022/06/Spider-Man-Remastered.png';
  @Input()
  contentTitle: string = 'MINHA NOTÍCIA';
  @Input()
  contentDescription: string = 'Homem Aranha volta a atacar';
}
