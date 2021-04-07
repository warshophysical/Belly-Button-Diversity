
// The function which is the function that writes Demographic Info Panel
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // `#sample-metadata` selected
    var PANEL = d3.select("#sample-metadata");

    // cleared existing data
    PANEL.html("");

    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}
// Init function which is used to create initial page once index.html run
// Init funtion call buildMeta function to create Demographic Info panel
function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sampleName) => {
      selector
        .append("option")
        .text(sampleName)
        .property("value", sampleName);
    });

    var firstSample = sampleNames[0];
    buildMetadata(firstSample);
  });
}

init();


