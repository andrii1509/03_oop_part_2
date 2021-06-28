export interface PagesIterable<T> {
    [Symbol.iterator](): Iterator<T>;
}