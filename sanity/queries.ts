import { groq } from "next-sanity";

export const audioQuery = groq`
  *[_type == "audio"] {
    ...,
    audioFile{ asset-> {url} },
    albumArt{ asset-> {url} },
  } | order(_updatedAt desc)
`;

export type Audio = {
  _type: string;
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  slug: {
    _type: string;
    current: string;
  };
  subtitle: string;
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
  category: {
    _ref: string;
    _type: "reference";
  };
};

export const videoQuery = groq`
  *[_type == "video"] {
    ...,
    audioFile{ asset-> {url} },
    albumArt{ asset-> {url} },
  } | order(_updatedAt desc)
`;

export type Video = {
  _type: string;
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  slug: {
    _type: string;
    current: string;
  };
  subtitle: string;
  title: string;
  youtubeUrl: string;
  category: {
    _ref: string;
    _type: "reference";
  };
};

export const settingsQuery = groq`*[_type == "settings" && _id == "settings"][0]`;

export type Settings = {
  _type: string;
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  emailAddress: string;
  phoneNumber: string;
};
