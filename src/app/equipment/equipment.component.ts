import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { JobObj, StartingEquipmentObj } from '../models/molt-interfaces';
import { RandomNumberService } from '../services/random-number.service';
import { CommonModule } from '@angular/common';
import { ARMOR, STARTING_EQUIPMENT, WEAPONS } from '../../../public/assets/molt.constants';

@Component({
  selector: 'app-equipment',
  imports: [CommonModule],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.scss'
})
export class EquipmentComponent implements OnChanges {
  @Input() currentJob: JobObj = {} as JobObj;

  startingEquipmentObj: StartingEquipmentObj = {} as StartingEquipmentObj;
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
    });
  }

  rerollStartingEquipment(key: string) {
    const equipmentSection = STARTING_EQUIPMENT[key === 'first' ? 0 : key === 'second' ? 1 : 2];
    let newIndex = equipmentSection.indexOf(this.startingEquipmentObj[key as keyof typeof this.startingEquipmentObj]);

    if (newIndex + 1 === equipmentSection.length) {
      newIndex = 0;
    } else {
      newIndex ++;
    }

    this.startingEquipmentObj[key as keyof typeof this.startingEquipmentObj] = equipmentSection[newIndex];
  }
}
