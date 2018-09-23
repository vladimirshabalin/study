'use strict';

class Hamburger {
    constructor(size, stuffing, spice, mayo) {
        this.size = size;
        this.stuffing = stuffing;
        this.spice = spice;
        this.mayo = mayo;
    }

    calculatePrice() {
        let price = 0;

        if (this.size == 'small') {
            price += 50;
        } else {
            price += 100;
        }

        switch(this.stuffing) {
            case 'cheese':
                price += 10;
                break;
            case 'salad':
                price += 20;
                break;
            case 'potatoes':
                price += 15;
                break;
        }

        if (this.spice) {
            price += 15;
        }

        if (this.mayo) {
            price += 20;
        }

        return price;
    }

    calculateCalories() {
        let calories = 0;

        if (this.size == 'small') {
            calories += 20;
        } else {
            calories += 40;
        }

        switch(this.stuffing) {
            case 'cheese':
                calories += 20;
                break;
            case 'salad':
                calories += 5;
                break;
            case 'potatoes':
                calories += 10;
                break;
        }

        if (this.spice) {
            calories += 0;
        }

        if (this.mayo) {
            calories += 5;
        }

        return calories;
    }
}