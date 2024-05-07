export class Product {
  uuid?: string;
  name: string;
  usage?: string;
  description?: string;
  images?: string[];
  parentIds?: string[];
  childrenIds?: string[];
  siblingIds?: string[];
  parentCompany?: string;
  rootCompanyId?: string;
  type?: string;
  stockUuids?: string[];
}
