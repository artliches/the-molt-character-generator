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
        weapons?: number,
        armor?: string | number,
    },
    extras?: string[],
};
