import { copyFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import { resolve } from "node:path";

const distDir = resolve("dist");
const indexPath = resolve(distDir, "index.html");
const notFoundPath = resolve(distDir, "404.html");

await access(indexPath, constants.R_OK);
await copyFile(indexPath, notFoundPath);

