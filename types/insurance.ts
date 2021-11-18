type TOtherObjectReference = {
  id: string;
};

export interface Insurance {
  to_address: TOtherObjectReference;
  from_address: TOtherObjectReference;
  tracking_code: string;
  carrier: string;
  amount: string;
}
