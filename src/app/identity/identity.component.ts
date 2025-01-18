import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IdentityObj, JobObj } from '../models/molt-interfaces';
import { RandomNumberService } from '../services/random-number.service';
import { HONOR, IDIO, JOBS, NAMES, PERSONALITY } from '../../../public/assets/molt.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-identity',
  imports: [CommonModule],
  templateUrl: './identity.component.html',
  styleUrl: './identity.component.scss'
})
export class IdentityComponent implements OnChanges {
  constructor (
    private random: RandomNumberService
  ) {}

  @Input() rerollAllEvent: boolean = false;
  identityObj: IdentityObj = {
    name: '',
    personalityObj: {
      first: '',
      second: ''
    },
    honor: '',
    idio: '',
  };

  uniqueIdo: string = '';

  ngOnChanges(changes: SimpleChanges): void {
      if (changes && changes['rerollAllEvent']) {
        this.random.shuffleArray(NAMES);
        this.random.shuffleArray(PERSONALITY);
        this.random.shuffleArray(HONOR);
        this.random.shuffleArray(IDIO);

        this.rerollAll();
      }
  }

  rerollAll() {
    this.rerollName();
    this.rerollPersonality('first');
    this.rerollPersonality('second');
    this.rerollHonor();
    this.rerollIdio();
  }

  rerollIdio() {
    this.uniqueIdo = '';
    let newIndex = IDIO.indexOf(this.identityObj.idio);

    if (newIndex + 1 === IDIO.length) {
      newIndex = 0;
    } else {
      newIndex ++;
    }

    this.identityObj.idio = IDIO[newIndex];

    if (this.identityObj.idio.includes('[job]')) {
      const chosenFlesh = this.random.shuffleArray(JOBS)[0].name;
      this.uniqueIdo = this.identityObj.idio.replace('[job]', chosenFlesh);
    }
  }

  rerollHonor() {
    let newIndex = HONOR.indexOf(this.identityObj.honor);

    if (newIndex + 1 === HONOR.length) {
      newIndex = 0;
    } else {
      newIndex ++;
    }

    this.identityObj.honor = HONOR[newIndex];
  }

  rerollPersonality(sectionToReroll: string) {
    const indexesToIgnore = [
      PERSONALITY.indexOf(this.identityObj.personalityObj.first),
      PERSONALITY.indexOf(this.identityObj.personalityObj.second),
    ];

    let newIndex = PERSONALITY.indexOf(this.identityObj.personalityObj[sectionToReroll as keyof typeof this.identityObj.personalityObj]);

    if (newIndex + 1 === PERSONALITY.length) {
      newIndex = -1;
    }

    do {
      newIndex ++;
    } while (indexesToIgnore.includes(newIndex));

    this.identityObj.personalityObj[sectionToReroll as keyof typeof this.identityObj.personalityObj] = PERSONALITY[newIndex];
  }

  rerollName() {
    let newIndex = NAMES.indexOf(this.identityObj.name);

    if (newIndex + 1 === NAMES.length) {
      newIndex = 0;
    } else {
      newIndex++;
    }

    this.identityObj.name = NAMES[newIndex];
  }
}
