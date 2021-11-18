export interface TaxIdentifier {
  entity: string;
  tax_id: string;
  tax_id_type: string;
  issuing_country: string;
}

export type TaxIdentifiers = ReadonlyArray<TaxIdentifier>;
