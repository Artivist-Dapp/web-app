export interface Menu {
  title: string;
  to: string;
}

export interface FeaturedArtist {
  name: string;
  imageUrl: string;
  link?: string;
}

export interface Partner {
  logo: string;
  name: string;
  url?: string;
}

export interface MetadataDto {
  title: string;
  description: string;
  media?: string | null;
  image_uri?: string | null;
}

export interface Metadata {
  title: string;
  description: string;
  media?: string | null;
}

export interface NFT {
  token_id: string;
  metadata: Metadata;
  owner_id: string;
}
