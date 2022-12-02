export interface ErrorResponse {
  error: Error;
}

export interface Error {
  code:    number;
  message: string;
  status:  string;
  details: Detail[];
}

export interface Detail {
  "@type":  string;
  reason:   string;
  metadata: Metadata;
}

export interface Metadata {
  method:  string;
  service: string;
}