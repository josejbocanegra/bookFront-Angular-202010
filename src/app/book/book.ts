import { Editorial } from '../editorial/editorial';

export class Book {

  private idA: number;
  private nameA: string;
  private isbnA: string;
  private descriptionA: string;
  private imageA: string;
  private publishingdateA: Date;
  private editorialA: Editorial;


  constructor(id?: number, name?: string, isbn?: string,
              description?: string, image?: string, publishingdate?: Date,
              editorial?: Editorial) {
    this.idA = id;
    this.nameA = name;
    this.publishingdateA = publishingdate;
    this.imageA = image;
    this.descriptionA = description;
    this.editorialA = editorial;
  }

  get id(): number { return this.idA; }
  get name(): string { return this.nameA; }
  set name(pName) { this.nameA = pName; }

  get isbn(): string { return this.isbnA; }
  set isbn(pIsbn) { this.isbnA = pIsbn; }

  get description(): string { return this.descriptionA; }
  set description(pDescription) {this.descriptionA = pDescription; }

  get image(): string { return this.imageA; }
  set image(pImage) {this.imageA = pImage; }

  get publishingdate(): Date { return this.publishingdateA; }
  set publishingdate( pPubDate) {this.publishingdateA = pPubDate; }

  get editorial(): Editorial { return this.editorialA; }
  set editorial(pEditorial) {this.editorialA = pEditorial; }




}
