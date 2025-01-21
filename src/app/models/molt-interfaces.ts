export interface JobObj {
    name: string,
    subName: string,
    descrip: string,
    details: {
        title: string,
        table: string[]
    },
    traits: {
        title: string,
        descrip: string,
    }[],
    stats: {
        toughness?: number,
        focus?: number,
        strength?: number,
        hp: number,
        favors: number,
        silver: number | string,
        pp: string,
    },
    gear: {
        weapons?: number | string,
        armor?: string | number,
    },
    extras?: string[],
};

export interface AbilityObj {
    name: string,
    descrip: string,
    value: number,
    rolledDice: number[],
    mod: number,
};

export interface StatsObj {
    name: string,
    descrip: string,
    value: number,
    rollNum?: number,
    rolledValue?: string,
    mod?: number,
    dieSize?: number,
};

export interface IdentityObj {
    name: string,
    personalityObj: {
        first: string,
        second: string,
    },
    honor: string,
    idio: string,
};

export interface StartingEquipmentObj {
    first: string,
    second: string,
    third: string,
};
