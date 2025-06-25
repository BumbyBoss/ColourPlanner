<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bumby Colour Planner</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div class="app">
    <h1>Bumby Colour Planner</h1>
    <div class="controls">
      <button id="reset">Reset</button>
    </div>
    <div id="swatchSelectors" class="selectors"></div>
    <div id="preview" class="preview grid"></div>
  </div>

  <script>
    const swatchData = [
      "BuilderCozyStripedSaffron.jpg", "BuilderComfyArcticHaze.jpg", "BuilderComfyCarrots.jpg", "BuilderComfyGoldenHollow.jpg", "BuilderCozyCopperPhoenix.jpg",
      "BuilderCozyDiscoJungle.jpg", "BuilderCozyElectricDahlia.jpg", "BuilderCozyEnchantedStatic.jpg", "BuilderCozyHawthorne.jpg", "BuilderCozyHazelwood.jpg",
      "BuilderCozyHoneyBrownAle.jpg", "BuilderCozyLavenderAsh.jpg", "BuilderCozyMahoganySpice.jpg", "BuilderCozyMauve-You.jpg", "BuilderCozyMediumDenimMelange.jpg",
      "BuilderCozyMidnightVeil.jpg", "BuilderCozyNavy.jpg", "BuilderCozyOTBlaze.jpg", "BuilderCozyOutrider.jpg", "BuilderCozySage.jpg",
      "BuilderCozyStripedBiscuit.jpg", "BuilderCozyStripedCharcoal.jpg", "BuilderCozyStripedForestPatina.jpg", "BuilderCozyStripedHeatherbloom.jpg",
      "BuilderCozyStripedHoneycomb.jpg", "BuilderCozyStripedLavenderDrift.jpg", "BuilderCozyStripedMediumDenim.jpg", "BuilderCozyStripedMidnightRipple.jpg",
      "BuilderCozyStripedPinkLady.jpg", "BuilderCozyStripedRorschach.jpg", "BuilderCozyStripedSmokyAsh.jpg", "BuilderCozyStripedSoftThistle.jpg",
      "BuilderCozyStripedSweetPea.jpg", "BuilderCozyStripedVelvetEclipse.jpg", "BuilderCozyStripedVintagePlum.jpg", "BuilderCozyStripedWoolyLambsEar.jpg",
      "BuilderCozyStripedWoolyWhisper.jpg", "BuilderCozySullivan.jpg", "BuilderCozyVelvetGrape.jpg", "BuilderDreamweightBlazing.jpg", "BuilderDreamweightDarkDenim.jpg",
      "BuilderDreamweightMelonJolly.jpg", "BuilderDreamweightMidnightNavy.jpg", "BuilderDreamweightNavy.jpg", "BuilderDreamweightVenomGrove.jpg",
      "BuilderDWCandyApple.jpg", "BuilderDWCharcoal.jpg", "BuilderDWIris.jpg", "BuilderDWSpumoni.jpg"
    ];

    const swatchBaseURL = "https://www.bumbywool.com/wp-content/uploads/2025/06/";

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
  </script>
</body>
</html>
