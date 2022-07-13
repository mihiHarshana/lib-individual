export interface IAuthor {
  name: string;
}

export interface IBook {
  name: string;
  price: string;
  author: string;

}

export interface AuthorDropDown {
  value: string;
  label: string;
}

export interface UpdateAuthor {
  author: IAuthor;
  index: number;
}