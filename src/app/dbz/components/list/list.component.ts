import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public chracterList: Character[] = [{
    name : "Trunks",
      power : 10
  }];

  @Output()
  public onDeleteCharacterById: EventEmitter<string> = new EventEmitter();


  public emitCharacterDeletedById(id?: string): void{
    if ( !id ) {
      return;
    }
    this.onDeleteCharacterById.emit(id);
  }

}
