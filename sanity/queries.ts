import { groq } from "next-sanity";

export const musicQuery = groq`
  *[_type == "music"] {
    ...,
    audioFile{ asset-> {url} },
    albumArt{ asset-> {url} },
  } | order(_createdAt asc)
`;

export type Music = {
  _type: string;
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  slug: {
    _type: string;
    current: string;
  };
  description: string;
  audioFile: {
    asset: {
      url: string;
    };
  };
  albumArt: {
    asset: {
      url: string;
    };
  };
  title: string;
};

export const filmQuery = groq`
  *[_type == "film"] {
    ...,
    audioFile{ asset-> {url} },
    albumArt{ asset-> {url} },
  } | order(_createdAt asc)
`;

export type Film = {
  _type: string;
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  slug: {
    _type: string;
    current: string;
  };
  description: string;
  title: string;
  youtubeUrl: string;
};

export const settingsQuery = groq`*[_type == "settings" && _id == "settings"][0]`;

export type Settings = {
  _type: string;
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  seoTitle: string;
  seoDescription: string;
  emailAddress: string;
  phoneNumber: string;
};
