import { Pages } from './pages';
import { Item } from './Item';

export class Magazine extends Item {
    title: string;

    constructor(title: string, pages: Pages) {
        super(pages);
        this.title = title;
    }
    toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages.getPagesCount()}`;
    }

    getTitle(): string {
        return this.title;
    }
    setTitle(title: string) {
        this.title = title;
    }
}