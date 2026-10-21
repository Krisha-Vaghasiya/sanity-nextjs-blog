import { client } from "./client";

import { createImageUrlBuilder } from "@sanity/image-url";

const builder = createImageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}