import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { JobObj } from '../models/molt-interfaces';
import { CommonModule } from '@angular/common';
import { RandomNumberService } from '../services/random-number.service';

@Component({
  selector: 'app-job',
  imports: [CommonModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent implements OnChanges {
  constructor (
    private random: RandomNumberService
  ) {}

  @Input() currentJob: JobObj = {} as JobObj;
  @Output() newJobEmitter: EventEmitter<boolean> = new EventEmitter();

  chosenJobObj: any = {
    details: '',
    traits: {
      title: '',
      descrip: ''
    },
  };

  ngOnChanges(changes: SimpleChanges): void {
      if (changes && changes['currentJob']) {
        this.random.shuffleArray(this.currentJob.details.table);
        this.random.shuffleArray(this.currentJob.traits);

        this.rerollDetails();
        this.rerollTraits();
      }
  }

  rerollDetails() {
    let newIndex = this.currentJob.details.table.indexOf(this.chosenJobObj.details);

    if (newIndex + 1 === this.currentJob.details.table.length) {
      newIndex = 0;
    } else {
      newIndex ++;
    }

    this.chosenJobObj.details = this.currentJob.details.table[newIndex];
  }

  rerollTraits() {
    let newIndex = this.currentJob.traits.indexOf(this.chosenJobObj.traits);

    if (newIndex + 1 === this.currentJob.traits.length) {
      newIndex = 0;
    } else {
      newIndex ++;
    }

    this.chosenJobObj.traits = this.currentJob.traits[newIndex];
  }

  emitNewJob() {
    this.newJobEmitter.emit(true);
  }
}
