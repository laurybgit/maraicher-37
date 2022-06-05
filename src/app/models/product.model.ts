export class Product {
  public id: number;
  public name: string;
  public category: string;
  public picture: string;

  //prettier-ignore
  constructor(id: number, name: string, category: string, picture: string) {
    this.id = id,
    this.name = name,
    this.category = category,
    this.picture = picture
  }
}
