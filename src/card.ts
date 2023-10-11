import { readFile } from "fs";
import { dirname, join } from "path";

const readOutput = (path: string) => {
  try {
    return readFile(path, {
      encoding: "utf-8",
    });
  } catch (e) {
    return "";
  }
};

readOutput(join(dirname(__filename), "/output"));
