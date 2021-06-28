import { Item } from './Item';
import { Pages } from './pages';

export class Comics extends Item{

    title: string;
    author: string;
    artist: string

    constructor(title: string, author: string, artist: string, pages: Pages) {
        super(pages);
        this.title = title;
        this.artist = artist;
        this.author = author;
    }


    toString(): string {
        return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.getPagesCount()}`;
    }

    getTitle(): string {
        return this.title;
    }
    setTitle(title: string) {
        this.title = title;
    }
}