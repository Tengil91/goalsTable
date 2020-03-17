import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent  {

  @Input() header;
  @Input() subHeader;
  @Input() color;
  @Input() fontColor;

  constructor() {}

}
