export interface Product {
  id: number;
  title: string;
  image: string[];
  rating: number;
  price: number;
  priceOld: number;
  popular?: string;
  sizeAndWeight: string[];
  description: string;
  actions: Actions;
  detail: ProductDetail;
  category: number;
}

type ProductDetail = {
  type: string;
  sku: string;
  mfg: string;
  life: string;
  stock: number;
  tags: string;
};

type Actions = {
  likes: number;
  views: number;
};

export interface Category {
  icon: string;
  title: string;
  id: number;
}

export interface Banner {
  id: number;
  title: string;
  image: string;
}
