export interface Spot {
  label: string;
  name: string;
  content: string;
  images: string;
  subheader?: string;
}

export interface Spots {
  context: string;
  spot: Array<Spot>;
}

export interface LocationState {
  place: keyof LocationSpots;
}

export interface LocationSpots {
  tagaytay: Spots;
  vigan: Spots;
  palawan: Spots;
  cebu: Spots;
  davao: Spots;
  ilocos_norte: Spots;
  ilocos_sur: Spots;
  la_union: Spots;
  panabo: Spots;
  tagum: Spots;
  aklan: Spots;
  camiguin: Spots;
  boracay: Spots;
  bukidnon: Spots;
}

export interface Place {
  title: string;
  name: string;
  description: string;
}