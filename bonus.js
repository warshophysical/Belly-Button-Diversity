function buildGauge(sample) {
	d3.json("samples.json").then((data) => {
		var metadata = data.metadata;
		var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
		var result = resultArray[0];

		var freq = result.wfreq;
	  

		var data = [
			{
			  domain: { x: [0, 1], y: [0, 1] },
			  value: freq,
			  title: { text: "<b>Belly Button Washing Frequency</b> <br> Scrubs per Week" },
			  type: "indicator",
			  mode: "gauge+number+delta",
			  delta: { reference: 0 },
			  gauge: {
				axis: { range: [null, 10] },
				steps: [
				  { range: [0, 250], color: "lightgray" },
				  { range: [250, 400], color: "gray" }
				],
				threshold: {
				  line: { color: "red", width: 4 },
				  thickness: 0.75,
				  value: 490
				}
			  }
			}
		  ];
	
		  var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
	Plotly.newPlot('gauge', data, layout);

	
});
}

  
