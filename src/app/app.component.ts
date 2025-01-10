import { Component } from '@angular/core';
import { AbilitiesComponent } from "./abilities/abilities.component";
import { IdentityComponent } from "./identity/identity.component";
import { JobComponent } from "./job/job.component";
import { EquipmentComponent } from "./equipment/equipment.component";

@Component({
  selector: 'app-root',
  imports: [AbilitiesComponent, IdentityComponent, JobComponent, EquipmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'the-molt-character-generator';
}
