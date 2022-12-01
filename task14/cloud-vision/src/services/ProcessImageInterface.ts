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

// export interface RequestData {
//   requests: [
//     {
//       features: [
//         {
//           type: string,
//         },
//       ],
//       image: {
//         content: string,
//       },
//     },
//   ],
// }

export interface ResponseData {
  textAnnotations:    TextAnnotation[];
  fullTextAnnotation: FullTextAnnotation;
}

export interface FullTextAnnotation {
  pages: Page[];
  text:  string;
}

export interface Page {
  property: WordProperty;
  width:    number;
  height:   number;
  blocks:   Block[];
}

export interface Block {
  boundingBox: Bounding;
  paragraphs:  Paragraph[];
  blockType:   string;
}

export interface Bounding {
  vertices: Vertex[];
}

export interface Vertex {
  x: number;
  y: number;
}

export interface Paragraph {
  boundingBox: Bounding;
  words:       Word[];
}

export interface Word {
  property?:   WordProperty;
  boundingBox: Bounding;
  symbols:     Symbol[];
}

export interface WordProperty {
  detectedLanguages: DetectedLanguage[];
}

export interface DetectedLanguage {
  languageCode: string;
  confidence:   number;
}

export interface Symbol {
  boundingBox: Bounding;
  text:        string;
  property?:   SymbolProperty;
}

export interface SymbolProperty {
  detectedBreak: DetectedBreak;
}

export interface DetectedBreak {
  type: string;
}

export interface TextAnnotation {
  locale?:      string;
  description:  string;
  boundingPoly: Bounding;
}