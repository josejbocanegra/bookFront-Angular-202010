
import { Book } from './book';
export class Review {

  constructor(private idA: number, private nameA: string, private sourceA: string, private descriptionA: string) {

  }

  /**
   * The review's id
   */
  get id(): number { return this.idA; }

  /**
   * The review's name
   */
  get name(): string { return this.nameA; }

  /**
   * The review's source
   */
  get source(): string { return this.sourceA; }

  /**
   * A brief summary of the review
   */
  get description() { return this.descriptionA; }

}
