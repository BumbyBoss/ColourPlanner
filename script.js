const swatchData = [
  "BuilderComfyPapelPicado-.jpg",
  "BuilderCozyMontepulciano.jpg",
  "BuilderJerseydeCozyNightVapor.jpg",
  "BuilderDrapierdeCozyVenusTrap.jpg",
  "BuilderCozyWaxedCanvas.jpg",
  "BuilderCozyVintage.jpg",
  "BuilderCozyUnicornFluff.jpg",
  "BuilderCozySullivan.jpg",
  "BuilderCozyStripedSilver.jpg",
  "BuilderCozyStripedRoseyMauve.jpg",
  "BuilderCozyStripedNightFall.jpg",
  "BuilderCozyStripedNeptuneRising.jpg",
  "BuilderCozyStripedNavy.jpg",
  "BuilderCozyStripedLizard.jpg",
  "BuilderCozyStripedInspire.jpg",
  "BuilderCozyStripedIceQueen.jpg"
];

const swatchBaseURL = "https://www.bumbywool.com/wp-content/uploads/2025/01/";

const swatchSelectors = document.getElementById("swatchSelectors");
const preview = document.getElementById("preview");
const resetButton = document.getElementById("reset");

function createDropdown(index) {
  const select = document.createElement("select");
  select.className = "swatch-select";
  select.dataset.index = index;

  const defaultOption = document.createElement("option");
  defaultOption.textContent = `Select #${index + 1}`;
  defaultOption.disabled = false;
  defaultOption.selected = true;
  select.appendChild(defaultOption);

  swatchData
    .sort((a, b) => a.localeCompare(b))
    .forEach((filename) => {
      const option = document.createElement("option");
      option.value = filename;
      option.textContent = filename.replace("Builder", "").replace(".jpg", "");
      select.appendChild(option);
    });

  select.addEventListener("change", updatePreview);
  return select;
}

function updateSelectors() {
  swatchSelectors.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    swatchSelectors.appendChild(createDropdown(i));
  }
}

function updatePreview() {
  preview.innerHTML = "";
  const selects = document.querySelectorAll(".swatch-select");
  selects.forEach((select) => {
    if (select.value) {
      const swatch = document.createElement("div");
      swatch.className = "swatch";
      swatch.style.backgroundImage = `url('${swatchBaseURL}${select.value}')`;
      preview.appendChild(swatch);
    }
  });
}

resetButton.addEventListener("click", () => {
  updateSelectors();
  preview.innerHTML = "";
});

updateSelectors();
