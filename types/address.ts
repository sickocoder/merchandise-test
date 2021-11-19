export interface Address {
  object: 'Address';
  name: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  email: string | null;
}

export interface APIAddressResponse {
  id: string;
  object: string;
  mode: string;
  created_at: string;
  updated_at: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  residential: any;
  carrier_facility: any;
  name: string;
  company: string;
  phone: string;
  email: string | null;
  federal_tax_id: string;
  state_tax_id: string;
  verifications: any;
}
