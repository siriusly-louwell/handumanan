export interface Spot {
  label: string;
  name: string;
  place?: string;
  content: string;
  image: string;
  subheader?: string;
}

export interface Spots {
  context: string;
  spot: Array<Spot>;
}

export interface LocationState {
  place: keyof LocationSpots;
}

export interface SpotState {
  name: keyof InfoDetails;
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
  bangkok: Spots;
  china: Spots;
}

interface SpotInfo {
  description: string;
  bullets: Array<string>;
  header: string;
  quote: string;
}

export interface InfoDetails {
  // ? tagaytay
  taal_volcano: SpotInfo,
  sky_ranch: SpotInfo,
  picnic_grove: SpotInfo,
  museo_orlina: SpotInfo,
  mahogany_market: SpotInfo,

  // ? vigan
  calle_crisologo: SpotInfo,
  plaza_salcedo: SpotInfo,
  saint_paul: SpotInfo,
  bell_tower: SpotInfo,
  jar_factory: SpotInfo,
  baluarte_zoo: SpotInfo,
  kalesa: SpotInfo,
  local_cuisine: SpotInfo,

  // ? aklan
  boracay: SpotInfo,
  bakhawan_park: SpotInfo,
  jawili_falls: SpotInfo,
  hurom_hurom: SpotInfo,
  likitinon_rocks: SpotInfo,
  pagatpat_park: SpotInfo,
  hacienda_maria: SpotInfo,
  hinugtan_beach: SpotInfo,
  northwest_panay: SpotInfo,

  // ? ilocos norte
  paoay_church: SpotInfo,
  windmills: SpotInfo,
  kapurpurawan_formation: SpotInfo,
  sand_dunes: SpotInfo,
  bojeador_lighthouse: SpotInfo,
  patpat_viaduct: SpotInfo,

  // ? ilocos sur
  sta_maria_church: SpotInfo,
  pinsall_falls: SpotInfo,
  provincial_capitol: SpotInfo,

  // ? cebu
  magellan_cross: SpotInfo,
  kawasan_falls: SpotInfo,
  oslob_whale: SpotInfo,
  fort_san_pedro: SpotInfo,
  simala_shrine: SpotInfo,
  temple_leah: SpotInfo,
  sirao_garden: SpotInfo,

  // ? la union
  bahay_bato: SpotInfo,
  bulalakaw_falls: SpotInfo,
  lotus_valley: SpotInfo,
  poro_lighthouse: SpotInfo,
  urbiztondo_beach: SpotInfo,
  watch_tower: SpotInfo,
  immuki_island: SpotInfo,
  macho_temple: SpotInfo,
  tangadan_falls: SpotInfo,
  pebble_beach: SpotInfo,

  // ? davao
  eden_park: SpotInfo,
  eagle_center: SpotInfo,
  people_park: SpotInfo,
  jack_ridge: SpotInfo,
  crocodile_park: SpotInfo,

  // ? palawan
  puerto_princesa: SpotInfo,
  island_hopping: SpotInfo,
  coron_shipwreck: SpotInfo,
  honda_bay: SpotInfo,
  nacpan_beach: SpotInfo,

  // ? bukidnon
  alalumm_falls: SpotInfo,
  cedar_falls: SpotInfo,
  communal_ranch: SpotInfo,
  dahilayan_park: SpotInfo,
  kaamulan_park: SpotInfo,
  lake_apo: SpotInfo,
  monastery_transfiguration: SpotInfo,
  mt_anahawon: SpotInfo,
  nasuli_spring: SpotInfo,

  // ? boracay
  ariel_point: SpotInfo,
  bulabog_beach: SpotInfo,
  crystal_cove: SpotInfo,
  dmall_boracay: SpotInfo,
  paraw_sailing: SpotInfo,
  white_beach: SpotInfo,
  willys_rock: SpotInfo,

  // ? camiguin
  white_island: SpotInfo,
  katibawasan_falls: SpotInfo,
  sunken_cemetery: SpotInfo,
  mantigue_island: SpotInfo,
  bura_water_park: SpotInfo,
  tanguines_lagoon: SpotInfo,

  // ? panabo
  seawall: SpotInfo,
  japanese_tunnel: SpotInfo,
  mangrove_forest: SpotInfo,

  // ? tagum
  botanical_park: SpotInfo,
  banana_beach: SpotInfo,
  nabintad_cruise: SpotInfo,
}

export interface Place {
  title: string;
  name: string;
  image: string;
  video: string;
  vidDescription: string;
  description: string;
}

export interface CarouselProps {
  items: string[];
}

export interface SpotImagesCollection {
  [key: string]: string[];
}

export interface LocationImageData {
  main: string;
  images: SpotImagesCollection;
}

export interface ImageCollection {
  [key: string]: LocationImageData;
}

export interface VideoEmbedProps {
  src: string;
  title?: string;
}

export type ValidPathname = Lowercase<keyof LocationSpots>;