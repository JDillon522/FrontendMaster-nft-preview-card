import sass from "sass";
import { promisify } from "util";
import { writeFile } from "fs";
const sassRenderPromise = promisify(sass.render);
const writeFilePromise = promisify(writeFile);

async function main() {
  const styleResult = await sassRenderPromise({
    file: `${process.cwd()}/styles/styles.scss`,
    outFile: `${process.cwd()}/styles.css`,
    sourceMap: true,
    sourceMapContents: true,
    outputStyle: "compressed",
  });

  await writeFilePromise("styles.css", styleResult.css, "utf8");

  await writeFilePromise("styles.css.map", styleResult.map, "utf8");
}
main();