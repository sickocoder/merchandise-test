export interface Parcel {
  object: string;
  length: number;
  width: number;
  height: number;
  weight: number;
}

export interface APIParcelsResponse {
  id: string;
  object: string;
  length: number;
  width: number;
  height: number;
  predefined_package: any;
  weight: number;
  created_at: string;
  updated_at: string;
}
