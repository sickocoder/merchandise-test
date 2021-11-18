export interface CustomItem {
  description: string;
  hs_tariff_number: string;
  origin_country: string;
  quantity: number;
  value: string;
  weight: number;
  code: any;
  mode: string;
  manufacturer: any;
  currency: any;
}

export interface CustomsInfo {
  contents_explanation: string;
  contents_type: string;
  customs_certify: true;
  customs_signer: string;
  eel_pfc: string;
  non_delivery_option: string;
  restriction_comments: string;
  restriction_type: string;
  mode: string;
  declaration: null;
  customs_items: Array<CustomItem>;
}
