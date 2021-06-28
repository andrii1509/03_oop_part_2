export class Page {
    pageNumber: number = 0;
    pageType: string = '';
    pageMaterial: string = '';
    constructor(number: number, type: string, material: string) {
        this.pageNumber = number;
        this.pageType = type;
        this.pageMaterial = material;
    }

    toString(): string {
        return `here is page ${this.pageType} #${this.pageNumber} and it\'s material is ${this.pageMaterial}`
    }
}