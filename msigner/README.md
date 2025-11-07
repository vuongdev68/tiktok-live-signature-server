# TikTok Signature Utility

A lightweight utility to generate signed TikTok API request URLs using a headless navigator. Designed for environments requiring dynamic request signing with proper user-agent emulation.
Tiktok Web Reverse Engineering X-Bogus &amp; X-Gnarly implementation

## ✨ Features

- Async URL signing for TikTok API requests  
- Supports both GET and POST formats  
- Extracts valid `User-Agent` headers  
- Ideal for proxies, automation, and scraping tasks

## Example Signed Response
```json
{
    "body": "",
    "signature": {
        "signedUrl": "https://www.tiktok.com/@user/video/1?foo=123&X-Gnarly=M8wscS4bifvEw26Cv5zy58XuPRtr63ZfaO1etdB8Y9swxZogtQ4iib78/rH6JLpRWr41J2DqYjACxLt3gXZ/6RWuex7T1-8K5NYzrRYALCxU1lNfKoHFLqoUkbGuv9YN6Jwv4T/FYT4QBh1fsl6NMISLvoUlHGmRIIUQzNYh7zrhCG24iALJ5Y2/-HBm06d3Nmd6o/dLg0wEs0LeGxdIje9-YDUOKz8QqQuG-c7fCOU86-pQ-Ra/aAmHyi85C/lDFIVi2N6nA/hnnY8KCVkSJ09-DY9Q1EI/KvYrws4RE7Jf&X-Bogus=DFSzKwVLHZiAN9bhCt3W4XpP1dmT",
        "xBogus": "DFSzKwVLHZiAN9bhCt3W4XpP1dmT",
        "xGnarly": "M8wscS4bifvEw26Cv5zy58XuPRtr63ZfaO1etdB8Y9swxZogtQ4iib78/rH6JLpRWr41J2DqYjACxLt3gXZ/6RWuex7T1-8K5NYzrRYALCxU1lNfKoHFLqoUkbGuv9YN6Jwv4T/FYT4QBh1fsl6NMISLvoUlHGmRIIUQzNYh7zrhCG24iALJ5Y2/-HBm06d3Nmd6o/dLg0wEs0LeGxdIje9-YDUOKz8QqQuG-c7fCOU86-pQ-Ra/aAmHyi85C/lDFIVi2N6nA/hnnY8KCVkSJ09-DY9Q1EI/KvYrws4RE7Jf"
    },
    "status": "ok",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36"
}
```

## 🛠 Usage

```ts
import { signParams } from 'tiktok-signature-utils';

const { signature, userAgent } = await signParams({
  params,
  url: 'https://www.tiktok.com/api/commit/item/digg',
  body: {
    action: 1
  }
});

await fetch(signature.signedUrl, {
  method: 'POST',
  headers: {
    'User-Agent': userAgent,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ action: 1 })
});
```

## 📘 API

### `signParams({ params, url, body })`

#### Parameters:
- `params`: Object of query string parameters
- `url`: Base TikTok API endpoint
- `body`: Optional object for request body

#### Returns:
- `signature.signedUrl`: Fully signed URL
- `userAgent`: Emulated User-Agent header

## 🧪 Implementation Example

```ts
export async function signParams(data) {
  const navigator = await signer.navigator();
  const { userAgent } = navigator;

  const queryString = new URLSearchParams({
    ...data.params
  }).toString();

  const unsignedUrl = `${data.url}/?${queryString}`;

  let body = '';
  if (data.body) {
    body = JSON.stringify(data.body);
  }

  const signedUrl = await signer.Sign(unsignedUrl, body);

  return { signature: { signedUrl }, userAgent };
}
```

## 📄 License

MIT © 2025
