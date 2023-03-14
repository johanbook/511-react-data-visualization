import { config } from "../../config";

function authenticateUrl(url: string): string {
  return url + `&api_key=${config.OPEN_DATA.TOKEN}`;
}

export async function request(url: string): Promise<unknown> {
  const authenticatedUrl = authenticateUrl(url);
  const resp = await fetch(authenticatedUrl);

  if (!resp.ok) {
    throw new Error(resp.statusText);
  }

  return await resp.json();
}
