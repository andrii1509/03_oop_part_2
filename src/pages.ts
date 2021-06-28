import { Page } from './page';

export class Pages {
    pages: Page[];
    constructor(pages: Page[]) {
        this.pages = pages;
    }

    getPagesCount(): number {
        return this.pages.length;
    }
}