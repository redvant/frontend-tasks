export interface RequestData {
  requests: Request[];
}

export interface Request {
  features: Feature[];
  image:    Image;
}

export interface Feature {
  type: string;
}

export interface Image {
  content: string;
}