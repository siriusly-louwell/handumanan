export interface Spot {
  label: string;
  name: string;
  content: string;
  subheader?: string;
}

export interface ArrSpot {
  [key: string]: Spot[];
}

export interface Place {
  title: string;
  name: string;
  description: string;
  subtext?: string;
}