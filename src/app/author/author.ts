export class Author {

  constructor(private idA: number, private nameA: string, private birthDateA: any, private imageA: string,
              private descriptionA: string) {

  }
  get id(): number { return this.idA; }

  /**
   * The author's name
   */
  get name(): string { return this.nameA; }

  /**
   * Fecha de nacimiento del autor. Estamos utilizando de tipo  string.
   */
  get birthDate(): any { return this.birthDateA; }

  /**
   * The location of the author's profile picture
   */
  get image(): string { return this.imageA; }

  /**
   * A brief description of the author's life
   */
  get description(): string { return this.descriptionA; }
}
