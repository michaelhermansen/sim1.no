import { type SchemaTypeDefinition } from "sanity";

import settings from "./schemas/settings";
import audio from "./schemas/audio";
import video from "./schemas/video";
import music from "./schemas/music";
import film from "./schemas/film";
import category from "./schemas/category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [settings, audio, video, music, film, category],
};
