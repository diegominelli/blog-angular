import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover: string =
    'https://www.global-esports.news/wp-content/uploads/2022/06/Spider-Man-Remastered.png';
  @Input()
  contentTitle: string = 'MINHA NOTÍCIA';
  @Input()
  contentDescription: string = 'Homem Aranha volta a atacar';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => console.log(value.get('id')));
  }
}
