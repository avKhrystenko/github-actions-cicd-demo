function getStatusMessage() {
  return "JavaScript працює успішно!";
}

if (typeof document !== "undefined") {
  const button = document.getElementById("check-button");
  const result = document.getElementById("result");
  if (button && result) {
    button.addEventListener("click", () => {
      result.textContent = getStatusMessage();
    });
  }
}

if (typeof module !== "undefined") {
  module.exports = { getStatusMessage };
}
