import fs, { promises as fsAsync } from "node:fs";
import YAML from "yaml";

const baseDir = "public/ServiceLogos";

export async function getLogoName(): Promise<string[]> {
  const logoDir = await fsAsync.readdir(baseDir);
  const logos = logoDir.filter((name) => {
    const stat = fs.statSync(`${baseDir}/${name}`);
    return stat.isDirectory() && !name.startsWith(".git") && name !== "docs" && name !== "ReplaceGuide";
  });
  return logos;
}

interface LogoData {
  name: string;
  images: string[];
  path: string;
}

export async function getAllLogos(): Promise<LogoData[]> {
  const logoNames = await getLogoName();
  const data = YAML.parse(await fsAsync.readFile("servicelogos.yaml", "utf-8")).logos;
  const logos = logoNames.map(async (name) => {
    console.log(name, data[name]);
    const images = await fsAsync.readdir(`public/ServiceLogos/${name}`);
    return {
      name: data[name].name,
      path: name,
      images,
    };
  });
  return Promise.all(logos);
}