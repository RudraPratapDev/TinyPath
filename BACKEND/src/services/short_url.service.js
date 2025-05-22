import { generateNanoId } from "../utils/helper.js";

import { getCustomUrl, saveShortUrl } from "../dao/short_url.js";
import { ConflictError } from "../utils/errorHandler.js";

export const createShortUrlServiceWithoutUser = async (url) => {
  const shortUrlGen = generateNanoId(7);
  if (!shortUrlGen) throw new Error("ShortUrl not generated");
  await saveShortUrl(shortUrlGen, url);
  return shortUrlGen;
};
export const createShortUrlServiceWithUser = async (
  url,
  userId,
  slug = null
) => {
  const shortUrlGen = slug || generateNanoId(7);
  const exists=await getCustomUrl(slug);
  if(exists)throw new ConflictError("ShortUrl already exists")
  await saveShortUrl(shortUrlGen, url, userId);
  return shortUrlGen;
};
