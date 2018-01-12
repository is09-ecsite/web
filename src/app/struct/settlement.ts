import { Transition } from './transition';

export class Settlement {
    id          : number;
    transitions : Transition[];
    created_date: number;
    updated_date: number;
}
