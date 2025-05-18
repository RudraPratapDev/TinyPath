import { findUrlFromShortUrl } from "../dao/short_url.js";
import { createShortUrlServiceWithoutUser } from "../services/short_url.service.js";
import { NotFoundError } from "../utils/errorHandler.js";
import { generateNanoId } from "../utils/helper.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res) => {
  const  {url}  = req.body;
  console.log(url);
  const shortUrl = await createShortUrlServiceWithoutUser(url);
  res.status(200).json({shortUrl:process.env.APP_URL + shortUrl});
});

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
  const { shortUrl } = req.params;
  const url = await findUrlFromShortUrl(shortUrl);
  if (!url) throw new NotFoundError("ShortUrl not found");

  res.redirect(url.full_url);
});
