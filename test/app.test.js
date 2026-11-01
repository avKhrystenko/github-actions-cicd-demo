const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { getStatusMessage } = require("../app.js");

const root = path.resolve(__dirname, "..");

test("HTML-сторінка містить український заголовок", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  assert.match(html, /Мій перший CI\/CD проєкт/);
});

test("HTML підключає CSS і JavaScript", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  assert.match(html, /href="style\.css"/);
  assert.match(html, /src="app\.js"/);
});

test("функція JavaScript повертає очікуване повідомлення", () => {
  assert.equal(getStatusMessage(), "JavaScript працює успішно!");
});
