
import { Editorial } from '../editorial/editorial';

export class Book {

  private idA: number;
  private nameA: string;
  private isbnA: string;
  private descriptionA: string;
  private imageA: string;
  private publishingdateA: string;
  private editorialA: Editorial;


  constructor(id?: number, name?: string, isbn?: string,
    description?: string, image?: string, publishingdate?: string,
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
  get isbn(): string { return this.isbnA; }
  get description(): string { return this.descriptionA; }
  get image(): string { return this.imageA; }
  get publishingdate(): string { return this.publishingdateA; }
  get editorial(): Editorial { return this.editorialA; }

}
