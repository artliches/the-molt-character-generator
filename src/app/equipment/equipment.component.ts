import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { JobObj, RelicObj, StartingEquipmentObj } from '../models/molt-interfaces';
import { RandomNumberService } from '../services/random-number.service';
import { CommonModule } from '@angular/common';
import { ARMOR, RELICS, STARTING_EQUIPMENT, WEAPONS } from '../../../public/assets/molt.constants';

@Component({
  selector: 'app-equipment',
  imports: [CommonModule],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.scss'
})
export class EquipmentComponent implements OnChanges {
  @Input() currentJob: JobObj = {} as JobObj;

  startingEquipmentObj: StartingEquipmentObj = {} as StartingEquipmentObj;
  relicArray: RelicObj[] = [];
  trimmedArmorArray: string[] = [];
  trimmedWeaponArray: string[] = [];
  weapon: string = '';
  armor: string = '';
  numUrns: number = 0;

  constructor (
    private random: RandomNumberService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
      if (changes && changes['currentJob']) {
        this.rerollAll();
      }
  }

  rerollAll() {
    this.weapon = '';
    this.armor = '';
    this.relicArray = [];

    this.random.shuffleArray(RELICS);

    this.getAllStartingEquipment();

    if (this.currentJob.gear.weapons) {
      if (typeof this.currentJob.gear.weapons === 'number') {
        this.trimmedWeaponArray = this.random.shuffleArray(JSON.parse(JSON.stringify(WEAPONS)).slice(0, this.currentJob.gear.weapons));
        this.rerollWeapon();
      } else if (this.currentJob.gear.weapons === '2d6') {
        //BRING OUT THE LEACHES
        this.numUrns = this.random.rollMultipleDie(2, 6);
        this.weapon = `
          <strong><u>Molten Ichorous Leech</u></strong>  
          <div><strong>HP</strong> 2</div>
          <div><strong>Morale</strong> - </div>
          <strong>No armor</strong>
          <div><strong>Feed</strong> d2 + special</div>
          <div><strong>Special: Focused Feed. Focus DR12 test</strong> or lose -1 Focus permanently, and the leech doubles in size, HP, and damage.</div>
        `
      }
    }

    if (this.currentJob.gear.armor) {
      if (typeof this.currentJob.gear.armor === 'number') {
        this.trimmedArmorArray = this.random.shuffleArray(JSON.parse(JSON.stringify(ARMOR)).slice(0, this.currentJob.gear.armor));
        this.rerollArmor();
      } else {
        this.armor = this.currentJob.gear.armor;
      }
    }
  }

  rerollUrnNum() {
    this.numUrns = this.random.rollMultipleDie(2, 6);
  }

  rerollWeapon() {
    let newIndex = this.trimmedWeaponArray.indexOf(this.weapon);

    if (newIndex + 1 === this.trimmedWeaponArray.length) {
      newIndex = 0;
    } else {
      newIndex++;
    }

    this.weapon = this.trimmedWeaponArray[newIndex];

    //currently no job actually gets access to these higher weapons, so no need for this
    // if (this.weapon.includes('[')) {
    //   const stringToReplace = this.weapon.slice(
    //     this.weapon.indexOf('['), this.weapon.indexOf(']')
    //   );
      
    // }
  }

  rerollArmor() {
    let newIndex = this.trimmedArmorArray.indexOf(this.armor);

    if (newIndex + 1 === this.trimmedArmorArray.length) {
      newIndex = 0;
    } else {
      newIndex++;
    }

    this.armor = this.trimmedArmorArray[newIndex];
  }

  private getAllStartingEquipment() {
    STARTING_EQUIPMENT.forEach((equipmentSection, index) => {
      this.random.shuffleArray(equipmentSection);
      const currentEquipmentKey = index === 0 ? 'first' : index === 1 ? 'second' : 'third';

      let newIndex = equipmentSection.indexOf(this.startingEquipmentObj[currentEquipmentKey as keyof typeof this.startingEquipmentObj]);

      if (newIndex + 1 === equipmentSection.length) {
        newIndex = 0;
      } else {
        newIndex++;
      }

      this.startingEquipmentObj[currentEquipmentKey as keyof typeof this.startingEquipmentObj] = equipmentSection[newIndex];

      if (this.startingEquipmentObj[currentEquipmentKey as keyof typeof this.startingEquipmentObj].includes('Relic')) {
        this.rerollRelic(index);
      }
    });
  }

  rerollStartingEquipment(key: string) {
    //remove relic if we're rerolling a relic equipment
    if (this.startingEquipmentObj[key as keyof typeof this.startingEquipmentObj].includes('Relic')) {
      //find the relic related to this 
      const relicKey = key === 'second' ? 1 : 2;
      const relicToRemoveIndex = this.relicArray.findIndex(relic => relic.index === relicKey);
      this.relicArray.splice(relicToRemoveIndex, 1);
    }

    const equipmentSection = STARTING_EQUIPMENT[key === 'first' ? 0 : key === 'second' ? 1 : 2];
    let newIndex = equipmentSection.indexOf(this.startingEquipmentObj[key as keyof typeof this.startingEquipmentObj]);

    if (newIndex + 1 === equipmentSection.length) {
      newIndex = 0;
    } else {
      newIndex ++;
    }

    this.startingEquipmentObj[key as keyof typeof this.startingEquipmentObj] = equipmentSection[newIndex];

    if (this.startingEquipmentObj[key as keyof typeof this.startingEquipmentObj].includes('Relic')) {
      this.rerollRelic(key === 'second' ? 1 : 2);
    }
  }

  rerollAllRelics() {
    this.relicArray.forEach(relic => {
      this.rerollRelic(relic.index, true);
    })
  }

  rerollRelic(index: number, replaceRelic?: boolean) {
    if (this.relicArray.length === 0) {
      //add new relic to empty array
      const relicObj: RelicObj = {
        title: RELICS[0].title,
        descrip: RELICS[0].descrip,
        index: index
      };
      this.relicArray.push(relicObj);
    } else if (replaceRelic) {
      // replacing existing relic
      let indexesToSkip: number[] = [];
      const relicToReplaceIndexInArray = this.relicArray.findIndex(relic => relic.index === index);

      this.relicArray.forEach(relic => {
        indexesToSkip.push(RELICS.findIndex(relicInArray => relicInArray.title === relic.title));
      });

      let newIndex = RELICS.findIndex(relic => relic.title === this.relicArray[relicToReplaceIndexInArray].title);

      do {
        newIndex ++;
      } while (indexesToSkip.includes(newIndex));

      if (newIndex + 1 === RELICS.length) {
        newIndex = 0;
      }

      const relicSaveObj: RelicObj = {
        title: RELICS[newIndex].title,
        descrip: RELICS[newIndex].descrip,
        index: this.relicArray[relicToReplaceIndexInArray].index
      };

      this.relicArray[relicToReplaceIndexInArray] = relicSaveObj;
    } else if (this.relicArray.length > 0) {
      //add new relic to non-empty array
      let indexesToSkip: number[] = [];
      this.relicArray.forEach(relic => {
        indexesToSkip.push(RELICS.findIndex(relicInArray => relicInArray.title === relic.title));
      });

      let newIndex = -1;

      do {
        newIndex ++;
      } while (indexesToSkip.includes(newIndex));

      if (newIndex + 1 >= RELICS.length) {
        newIndex = 0;
      }

      this.relicArray.push({
        title: RELICS[newIndex].title,
        descrip: RELICS[newIndex].descrip,
        index: index
      });
    }
  }
}
