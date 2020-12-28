'use strict';

import { Animal } from './animal';

export class Reptile extends Animal {

    constructor(name: string, gender?: string) {
        super(name, gender);
    }

    public breed(): string {
        return `laying eggs.`;
    }
}
