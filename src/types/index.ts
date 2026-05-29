export interface WishItem {
  id: string;
  name: string;
  link?: string;
  selected: boolean;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}
