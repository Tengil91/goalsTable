import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Output() filter = new EventEmitter<any>();
  @ViewChild('searchInput') inputEl: ElementRef;

  public condition = '';
  public isToggled = false;

  constructor() { }

  public toggleSearchInput(): void {
    if (!this.isToggled) {
      this.isToggled = !this.isToggled;
      setTimeout(() => {
        this.inputEl.nativeElement.focus();
      }, 400);
    }
  }

  public clearFilter(): void {
    this.isToggled = false;
    this.filter.emit({condition: this.condition = ''});
  }

  public filterFilled(condition): void {
    this.filter.emit({condition});
  }

}
