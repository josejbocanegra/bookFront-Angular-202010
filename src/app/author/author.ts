export class Author {

  private idA: number;
  private nameA: string;
  private birthDateA: string;
  private imageA: string;
  private descriptionA: string;

  constructor(id?: number, name?: string, birthDate?: string, image?: string,
    description?: string) {
    this.idA = id;
    this.nameA = name;
    this.birthDateA = birthDate;
    this.imageA = image;
    this.descriptionA = description;
  }

  get id(): number { return this.idA; }


  /**
   * The author's name
   */
  get name(): string { return this.nameA; }

  /**
   * Fecha de nacimiento del autor. Estamos utilizando de tipo  string.
   */
  get birthDate(): string {return this.birthDateA; }

  /**
   * The location of the author's profile picture
   */
  get image(): string { return this.imageA; }

  /**
   * A brief description of the author's life
   */
  get description(): string { return this.descriptionA; }
}
