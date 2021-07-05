import {Page} from "./page";

export const PagesIterable = (classBase: any) => class extends classBase {
    [Symbol.iterator]() {
            let pointer = 0;
            let pages = this.pages.pages;

            const firstPart = this.toString();
            let secondPart = ''

            return {
                next(): IteratorResult<Page> {
                    if (pointer < pages.length) {
                        if (pages[pointer]) {
                            secondPart = pages[pointer].toString();
                            pages[pointer].toString = () => {
                                return firstPart + ', ' + secondPart;
                            }
                        }
                        return {
                            done: false,
                            value: pages[pointer++]
                        }
                    } else {
                        return {
                            done: true,
                            value: null
                        }
                    }
                }
            }
        }
}