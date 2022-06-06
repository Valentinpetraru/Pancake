import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cake-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Output() valueCloseSettings = new EventEmitter<boolean>()

  stateOverlayNavFooter: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  closeSettings(event: any): void {
    this.valueCloseSettings.emit(false);
  }

}
