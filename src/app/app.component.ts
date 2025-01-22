import { Component, OnInit } from '@angular/core';
import { AbilitiesComponent } from "./abilities/abilities.component";
import { IdentityComponent } from "./identity/identity.component";
import { JobComponent } from "./job/job.component";
import { EquipmentComponent } from "./equipment/equipment.component";
import { RandomNumberService } from './services/random-number.service';
import { JOBS } from '../../public/assets/molt.constants';
import { JobObj } from './models/molt-interfaces';
import { ToolbarComponent } from "./toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  imports: [AbilitiesComponent, IdentityComponent, JobComponent, EquipmentComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor (
    private randomNumber: RandomNumberService
  ) {}

  currentJob: JobObj = {} as JobObj;
  rerollAllEvent: boolean = false;
  hasMaxPowerPoints: boolean = false;

  ngOnInit(): void {
    this.randomNumber.shuffleArray(JOBS);
    this.getNewJob();
  }

  rerollAll() {
    this.getNewJob();
    this.rerollAllEvent = !this.rerollAllEvent;
  }

  getNewJob() {
    let newIndex = JOBS.findIndex(job => {
      return job.name === this.currentJob.name
    });

    if (newIndex + 1 === JOBS.length) {
      newIndex = 0;
    } else {
      newIndex ++;
    }

    this.currentJob = JOBS[newIndex];
  }

  togglePowerPoints(event: boolean) {
    // need timeout to prevent angular error
    // incase Nosnibor with Sight Seeker spawns in
    // on load or after
    setTimeout(() => {
      this.hasMaxPowerPoints = event;
    }, 1);
  } 
}
