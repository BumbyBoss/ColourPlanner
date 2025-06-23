const swatchData = [
  "BuilderCozyMontepulciano.jpg",
  "BuilderJerseydeCozyNightVapor.jpg",
  "BuilderCozyVintage.jpg",
  "BuilderCozyUnicornFluff.jpg",
  "BuilderCozyWaxedCanvas.jpg",
  "BuilderCozySullivan.jpg",
  "BuilderCozyStripedSilver.jpg",
  "BuilderCozyStripedRoseyMauve.jpg",
  "BuilderCozyStripedNightFall.jpg",
  "BuilderCozyStripedNeptuneRising.jpg",
  "BuilderCozyStripedNavy.jpg",
  "BuilderCozyStripedLizard.jpg",
  "BuilderCozyStripedInspire.jpg",
  "BuilderCozyStripedIceQueen.jpg",
  "BuilderDrapierdeCozyVenusTrap.jpg",
  "BuilderComfyPapelPicado-.jpg",
  "BuilderCozyStripedNightFall.jpg"
];

const swatchBaseURL = "https://www.bumbywool.com/wp-content/uploads/2025/01/";

const swatchCount = document.getElementById("swatchCount");
const swatchSelectors = document.getElementById("swatchSelectors");
const preview = document.getElementById("preview");
const toggleView = document.getElementById("toggleView");
const resetButton = document.getElementById("reset");

function createDropdown(index) {
  const select = document.createElement("select");
  select.className = "swatch-select";
  select.dataset.index = index;

  const defaultOption = document.createElement("option");
  defaultOption.textContent = `Select #${index + 1}`;
  defaultOption.disabled = true;
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

function updateSelectors(count) {
  swatchSelectors.innerHTML = "";
  for (let i = 0; i < count; i++) {
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

function populateSwatchCount() {
  for (let i = 2; i <= 10; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    swatchCount.appendChild(option);
  }
}

populateSwatchCount();
swatchCount.addEventListener("change", (e) => {
  updateSelectors(e.target.value);
});

toggleView.addEventListener("click", () => {
  preview.classList.toggle("grid");
  preview.classList.toggle("pie");
});

resetButton.addEventListener("click", () => {
  swatchSelectors.innerHTML = "";
  preview.innerHTML = "";
  swatchCount.value = "";
});
