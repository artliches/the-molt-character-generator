import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbilityObj, JobObj, StatsObj } from '../models/molt-interfaces';
import { RandomNumberService } from '../services/random-number.service';

@Component({
  selector: 'app-abilities',
  imports: [CommonModule],
  templateUrl: './abilities.component.html',
  styleUrl: './abilities.component.scss'
})
export class AbilitiesComponent implements OnChanges {
  constructor (
    private random: RandomNumberService
  ) {}
  @Input() currentJob: JobObj = {} as JobObj;
  @Input() hasMaxPowerPoints: boolean = false;
  showRolls: boolean = false;
  abilitiesObj: AbilityObj[] = [
    {
      name: 'agility',
      descrip: 'Defend, balance, float, swim, flee',
      value: 0,
      rolledDice: [],
      mod: 0
    },
    {
      name: 'presence',
      descrip: 'Perceive, aim, charm',
      value: 0,
      rolledDice: [],
      mod: 0
    },
    {
      name: 'strength',
      descrip: 'Crush, lift, strike, grapple',
      value: 0,
      rolledDice: [],
      mod: 0
    },
    {
      name: 'toughness',
      descrip: 'Resist poison/cold/heat, survive falling',
      value: 0,
      rolledDice: [],
      mod: 0
    },
    {
      name: 'focus',
      descrip: 'Harness magick, observe, learn, research',
      value: 0,
      rolledDice: [],
      mod: 0
    },
  ];
  statsObj: StatsObj[] = [
    {
      name: 'favors',
      descrip: 'Twist cruel fate',
      value: 0,
      dieSize: 0
    },
    {
      name: 'hp',
      descrip: `
        <div>0: <span class="underline">Broken</span></div>
        <div>Negative: <strong>SUPER DEAD</strong></div>
      `,
      value: 0,
      rollNum: 0,
      rolledValue: '',
      mod: 0,
    },
    {
      name: 'power points',
      descrip: 'Invoke strange magicks',
      value: 0,
      rollNum: 0,
      mod: 0,
      rolledValue: '',
    },
    {
      name: 'silver',
      descrip: 'Worthless if you die',
      value: 0,
      rolledValue: '',
    },
  ];

  ngOnChanges(changes: SimpleChanges): void {
      if (changes && changes['currentJob']) {
        this.rerollAll();
      }
      if (changes && changes['hasMaxPowerPoints']) {
        console.log(changes);
        const rawPPString = this.currentJob.stats.pp;
        const dieSize = rawPPString.slice(rawPPString.indexOf('d') + 1);
        let stat = this.statsObj[this.statsObj.findIndex(stat => stat.name === 'power points')];

        if (changes['hasMaxPowerPoints'].currentValue) {
          stat.rollNum = Number(dieSize);
        } else if (!changes['hasMaxPowerPoints'].currentValue) {
          stat.rollNum = this.random.getRandomNumber(1, Number(dieSize));
        }

        stat.mod = this.abilitiesObj[this.abilitiesObj.findIndex(ability => ability.name === 'presence')].value;
        stat.value = stat.rollNum! + stat.mod < 0 ? 0 : stat.rollNum! + stat.mod;
        stat.rolledValue = rawPPString.includes('Presence') ?
        `${stat.rollNum} ${stat.mod! >= 0 ? '+' : ''} ${stat.mod}` :
        `${stat.rollNum}`;
      }
  }

  rerollAll() {
    this.getInitialAbilities();
    this.getInitialStats();
  }

  rerollStat(statName: string) {
    let stat = this.statsObj[this.statsObj.findIndex(stat => stat.name === statName)];
    
    this.getStats(stat);
  }

  private getInitialStats() {
    this.statsObj.forEach(stat => {
      this.getStats(stat);
    });
  }

  private getStats(stat: StatsObj) {
    if (stat.name == 'hp') {
      stat.value = 0;
      stat.rolledValue = '';

      const dieSize = this.currentJob.stats.hp;
      stat.rollNum = this.random.getRandomNumber(1, dieSize);

      stat.mod = this.abilitiesObj[this.abilitiesObj.findIndex(ability => ability.name === 'toughness')].value;
      stat.rolledValue = `${stat.rollNum} ${stat.mod >= 0 ? '+' : ''} ${stat.mod}`;
      stat.value = stat.rollNum + stat.mod <= 0 ? 1 : stat.rollNum + stat.mod;
    }

    if (stat.name === 'favors') {
      stat.dieSize = 0;
      stat.value = 0;

      stat.dieSize = this.currentJob.stats.favors;
      stat.value = this.random.getRandomNumber(1, stat.dieSize);
    }

    if (stat.name === 'power points') {
      const rawPPString = this.currentJob.stats.pp;
      const dieSize = rawPPString.slice(rawPPString.indexOf('d') + 1);
      stat.rollNum = this.random.getRandomNumber(1, Number(dieSize));

      if (rawPPString.includes('Presence')) {
        stat.mod = this.abilitiesObj[this.abilitiesObj.findIndex(ability => ability.name === 'presence')].value;
      }

      stat.value = stat.rollNum + stat.mod!;
      stat.value = stat.value < 0 ? 0 : stat.value;

      stat.rolledValue = rawPPString.includes('Presence') ?
        `${stat.rollNum} ${stat.mod! >= 0 ? '+' : ''} ${stat.mod}` :
        `${stat.rollNum}`;
    }

    if (stat.name === 'silver') {
      const rawString = this.currentJob.stats.silver.toString();

      if (rawString === '0') {
        stat.rolledValue = `0`;
        stat.value = 0;
      } else {
        const numDie = rawString.slice(0, rawString.indexOf('d'));
        const dieSize = rawString.slice(rawString.indexOf('d') + 1, rawString.indexOf('x'));
        const modifier = rawString.slice(rawString.indexOf('x') + 1);
        const dieRoll = this.random.getRandomNumber(Number(numDie), Number(dieSize));
        stat.rolledValue = `${dieRoll} x ${modifier}`;
        stat.value = dieRoll * Number(modifier);
      }
    }
  }

  rerollAbilities(abilityName: string) {
    const ability = this.abilitiesObj[this.abilitiesObj.findIndex(ability => ability.name === abilityName)];

    this.getAbility(ability);

    if (ability.name === 'presence') {
      let ppObj = this.statsObj[this.statsObj.findIndex(stat => stat.name === 'power points')];

      if (this.currentJob.stats.pp.includes('Presence')) {
        ppObj.mod = ability.value;
        ppObj.value = ppObj.rollNum! + ppObj.mod;
        ppObj.value = ppObj.value < 0 ? 0 : ppObj.value;
        ppObj.rolledValue = `${ppObj.rollNum} ${ppObj.mod >= 0 ? '+' : ''} ${ppObj.mod}`;
      }
    } else if (ability.name === 'toughness') {
      let hpObj = this.statsObj[this.statsObj.findIndex(stat => stat.name === 'hp')];

      hpObj.mod = ability.value;
      hpObj.value = hpObj.rollNum! + hpObj.mod > 0 ? hpObj.rollNum! + hpObj.mod : 1;
      hpObj.rolledValue = `${hpObj.rollNum} ${hpObj.mod >= 0 ? '+' : ''} ${hpObj.mod}`;
    }
  }

  private getInitialAbilities() {
    this.abilitiesObj.forEach(ability => {
      this.getAbility(ability);
    });
  }

  private getAbility(ability: AbilityObj) {
    ability.value = 0;
    ability.rolledDice = [];
    ability.mod = 0;

    for (let i = 0; i < 3; i++) {
      ability.rolledDice.push(this.random.getRandomNumber(1, 6));
    }
    let rawNumber: number = ability.rolledDice.reduce((partialSum, a) => partialSum + a, 0);
    if (Object.hasOwn(this.currentJob.stats, ability.name)) {
      ability.mod = Number(this.currentJob.stats[ability.name as keyof typeof this.currentJob.stats]);
      rawNumber = rawNumber + ability.mod;
    }
    this.convertRawNumberToAbilityMod(rawNumber, ability);
  }

  private convertRawNumberToAbilityMod(rawNumber: number, ability: AbilityObj) {
    switch (true) {
      case rawNumber <= 4: {
        ability.value = -3;
        break;
      }
      case rawNumber > 4 && rawNumber <= 6: {
        ability.value = -2;
        break;
      }
      case rawNumber > 6 && rawNumber <= 8: {
        ability.value = -1;
        break;
      }
      case rawNumber > 8 && rawNumber <= 12: {
        ability.value = 0;
        break;
      }
      case rawNumber > 12 && rawNumber <= 14: {
        ability.value = 1;
        break;
      }
      case rawNumber > 14 && rawNumber <= 16: {
        ability.value = 2;
        break;
      }
      case rawNumber > 16 && rawNumber <= 20: {
        ability.value = 3;
        break;
      }
    }
  }
}
