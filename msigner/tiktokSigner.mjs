import Signer from "./signer.js";

const signer = new Signer(null, null);

export default async function () {
  await signer.init(); // Signer laoded
}

export { signer };
