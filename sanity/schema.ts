import { type SchemaTypeDefinition } from "sanity";

import music from "./schemas/music";
import film from "./schemas/film";
import settings from "./schemas/settings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [settings, music, film],
};
