export interface ICategoryModel {
  id: number;
  name: string;
  subcategories?: ICategoryModel[];
  statusClass: boolean;
}
