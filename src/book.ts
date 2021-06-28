import { Item } from './Item';
import { Pages } from './pages';

export class Book extends Item {

    title: string;
    author: string;


    constructor(title: string, author: string, pages: Pages) {
        super(pages);
        this.title = title;
        this.author = author;
    }

    toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.getPagesCount()}`;
    }
}

