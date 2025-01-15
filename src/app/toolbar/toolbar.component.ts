import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Output() rerollAllEmitter: EventEmitter<boolean> = new EventEmitter();

  emitRerollAll() {
    this.rerollAllEmitter.emit(true);
  }
}
