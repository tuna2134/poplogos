import fs, { promises as fsAsync } from "node:fs";

const baseDir = "public/ServiceLogos";

export async function getLogoName(): Promise<string[]> {
  const logoDir = await fsAsync.readdir(baseDir);
  const logos = logoDir.filter((name) => {
    const stat = fs.statSync(`${baseDir}/${name}`);
    // console.log(stat.isDirectory());
    return stat.isDirectory() && !name.startsWith(".git") && name !== "docs";
  });
  return logos;
}

interface LogoData {
  name: string;
  images: string[];
}

export async function getAllLogos(): Promise<LogoData[]> {
  const logoNames = await getLogoName();
  const logos = logoNames.map(async (name) => {
    const images = await fsAsync.readdir(`public/ServiceLogos/${name}`);
    return {
      name,
      images,
    };
  });
  return Promise.all(logos);
}