import { PagesIterable } from './pages-iterable';
import { Pages } from './pages';
import { Page } from './page';

export abstract class Item extends PagesIterable(Object){

    protected pages: Pages

    protected constructor(pages: Pages) {
        super();
        this.pages = pages;
    }

    abstract toString(): string;
}
