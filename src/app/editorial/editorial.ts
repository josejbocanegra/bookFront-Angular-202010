export class Editorial {

  constructor(private idA: number, private nameA: string) {
  }
  get id(): number { return this.idA; }
  get name(): string { return this.nameA; }
}
