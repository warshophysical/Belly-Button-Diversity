var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sampleName) => {
      selector
        .append("option")
        .text(sampleName)
        .property("value", sampleName);
    });
  });

