const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const output = path.join(root, "dist");
const requiredFiles = ["index.html", "style.css", "app.js"];

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const file of requiredFiles) {
  const source = path.join(root, file);
  if (!fs.existsSync(source)) {
    throw new Error(`Не знайдено обов'язковий файл: ${file}`);
  }
  fs.copyFileSync(source, path.join(output, file));
}

console.log("Збірку завершено. Файли скопійовано до dist/.");
