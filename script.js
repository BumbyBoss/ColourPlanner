const swatchData = [
  "BuilderCozyStripedSaffron.jpg",
  "BuilderComfyArcticHaze.jpg",
  "BuilderComfyCarrots.jpg",
  "BuilderComfyGoldenHollow.jpg",
  "BuilderCozyCopperPhoenix.jpg",
  "BuilderCozyDiscoJungle.jpg",
  "BuilderCozyElectricDahlia.jpg",
  "BuilderCozyEnchantedStatic.jpg",
  "BuilderCozyHawthorne.jpg",
  "BuilderCozyHazelwood.jpg",
  "BuilderCozyHoneyBrownAle.jpg",
  "BuilderCozyLavenderAsh.jpg",
  "BuilderCozyMahoganySpice.jpg",
  "BuilderCozyMauve-You.jpg",
  "BuilderCozyMediumDenimMelange.jpg",
  "BuilderCozyMidnightVeil.jpg",
  "BuilderCozyNavy.jpg",
  "BuilderCozyOTBlaze.jpg",
  "BuilderCozyOutrider.jpg",
  "BuilderCozySage.jpg",
  "BuilderCozyStripedBiscuit.jpg",
  "BuilderCozyStripedCharcoal.jpg",
  "BuilderCozyStripedForestPatina.jpg",
  "BuilderCozyStripedHeatherbloom.jpg",
  "BuilderCozyStripedHoneycomb.jpg",
  "BuilderCozyStripedLavenderDrift.jpg",
  "BuilderCozyStripedMediumDenim.jpg",
  "BuilderCozyStripedMidnightRipple.jpg",
  "BuilderCozyStripedPinkLady.jpg",
  "BuilderCozyStripedRorschach.jpg",
  "BuilderCozyStripedSmokyAsh.jpg",
  "BuilderCozyStripedSoftThistle.jpg",
  "BuilderCozyStripedSweetPea.jpg",
  "BuilderCozyStripedVelvetEclipse.jpg",
  "BuilderCozyStripedVintagePlum.jpg",
  "BuilderCozyStripedWoolyLambsEar.jpg",
  "BuilderCozyStripedWoolyWhisper.jpg",
  "BuilderCozySullivan.jpg",
  "BuilderCozyVelvetGrape.jpg",
  "BuilderDreamweightBlazing.jpg",
  "BuilderDreamweightDarkDenim.jpg",
  "BuilderDreamweightMelonJolly.jpg",
  "BuilderDreamweightMidnightNavy.jpg",
  "BuilderDreamweightNavy.jpg",
  "BuilderDreamweightVenomGrove.jpg",
  "BuilderDWCandyApple.jpg",
  "BuilderDWCharcoal.jpg",
  "BuilderDWIris.jpg",
  "BuilderDWSpumoni.jpg",
  "BuilderComfyCocoFrutti.jpg",
  "BuilderComfyColeus.jpg",
  "BuilderComfyCrushedBerriesMelange.jpg",
  "BuilderComfyMarmalade.jpg",
  "BuilderComfyPapillon.jpg",
  "BuilderComfySummer-Spritz.jpg",
  "BuilderComfyUnderTheNeonLights.jpg",
  "BuilderComfyViburnum.jpg",
  "BuilderComfyZinnia.jpg",
  "BuilderCozyAlaskanWinterSky.jpg",
  "BuilderCozyAmbrosia.jpg",
  "BuilderCozyArroyo.jpg",
  "BuilderCozyDarkMoon.jpg",
  "BuilderCozyEclipse.jpg",
  "BuilderCozyJack.jpg",
  "BuilderCozyMelangeFedora.jpg",
  "BuilderCozyMelangeTrilby.jpg",
  "BuilderCozyMetamorphosis.jpg",
  "BuilderCozyMontepulciano.jpg",
  "BuilderCozyNightViolet.jpg",
  "BuilderCozyPinStripes.jpg",
  "BuilderCozyRipTide.jpg",
  "BuilderCozyRiver.jpg",
  "BuilderCozyStripedAmetrine.jpg",
  "BuilderCozyStripedBetelgeuse.jpg",
  "BuilderCozyStripedDatFrog.jpg",
  "BuilderCozyStripedEmerald.jpg",
  "BuilderCozyStripedInspire.jpg",
  "BuilderCozyStripedLizard.jpg",
  "BuilderCozyStripedNavy.jpg",
  "BuilderCozyStripedNeptuneRising.jpg",
  "BuilderCozyStripedNightFall.jpg",
  "BuilderCozyStripedPinkTiger-2.jpg",
  "BuilderCozyStripedRoseyMauve.jpg",
  "BuilderCozyStripedSilver.jpg",
  "BuilderCozyStripedTwilight.jpg",
  "BuilderCozyVintage.jpg",
  "BuilderCozyWaxedCanvas.jpg",
  "BuilderDrapierdeCozyVenusTrap.jpg",
  "BuilderDreamweightAlksie.jpg",
  "BuilderDreamweightAlyssum.jpg",
  "BuilderDreamweightArdent.jpg",
  "BuilderDreamweightAutumnBreeze.jpg",
  "BuilderDreamweightBumbleBerry.jpg",
  "BuilderDreamweightCalmness.jpg",
  "BuilderDreamweightElectricRainbow.jpg",
  "BuilderDreamweightHaldir.jpg",
  "BuilderDreamweightMediumDenim.jpg",
  "BuilderDreamweightMoonbreeze.jpg",
  "BuilderDreamweightMoonlightSerenade.jpg",
  "BuilderDreamweightPantherChameleon.jpg",
  "BuilderDreamweightPumpkinFusion.jpg",
  "BuilderDreamweightShadowBrook-.jpg",
  "BuilderDreamweightShimmerMoon.jpg",
  "BuilderDreamweightStarGazer.jpg",
  "BuilderDreamweightSummerSpritz.jpg",
  "BuilderDreamweightVintageShard.jpg",
  "BuilderDreamweightWitchesRoad.jpg",
  "BuilderDurasoftDenim.jpg",
  "BuilderDWBlackOpal.jpg",
  "BuilderDWJuniper.jpg",
  "BuilderDWLilacWhisper.jpg",
  "BuilderDWNatural.jpg",
  "BuilderDWObsidian.jpg",
  "BuilderDWPassionFlower.jpg",
  "BuilderDWPeriwinkle.jpg",
  "BuilderDWSummerSpritz.jpg",
  "BuilderDWWitchesRoad.jpg"
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
