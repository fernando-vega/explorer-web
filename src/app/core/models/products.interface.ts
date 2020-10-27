export interface ProductsInterface {
  id: string;
  title: string;
  description: string;
  category?: number[];
  subCategory?: string;
  img?: string;
  characteristicOne?: string;
  characteristicTwo?: string;
  characteristicThree?: string;
  characteristicFour?: string;
  type?: string;
  available: boolean;
  dataSheet?: string;
  icons?: any[];
  slug: string;
}
