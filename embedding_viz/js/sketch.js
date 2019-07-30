// Embeddings de GloVe
x_g = glove["reduced"]["x"]
y_g = glove["reduced"]["y"]
z_g = glove["reduced"]["z"]
var trace_glove = {
  x:x_g,  y: y_g, z: z_g, 
  mode: 'markers',
  hoverinfo: "text",
  hovertext: glove["textos"],
  marker: {
      color: glove["colores"],
    size: 3,
    line: {
      color: 'rgba(217, 217, 217, 0.14)',
      width: 0.5
    },
    opacity: 0.8
  },
  type: 'scatter3d'
};

var data = [trace_glove];
var layout_glove = {
    dragmode: true,
    margin: {
    l: 0,
    r: 0,
    b: 0,
    t: 0
    }};
Plotly.newPlot('myDiv_glove', data, layout_glove);



// Embeddings de BERT

x_b = bert["reduced"]["x"]
y_b = bert["reduced"]["y"]
z_b = bert["reduced"]["z"]
var trace_bert = {
  x:x_b,  y: y_b, z: z_b, 
  mode: 'markers',
  hoverinfo: "text",
  hovertext: glove["textos"],
  marker: {
      color: glove["colores"],
    size: 3,
    line: {
      color: 'rgba(217, 217, 217, 0.14)',
      width: 0.5
    },
    opacity: 0.8
  },
  type: 'scatter3d'
};

var data = [trace_bert];
var layout_bert = {
    dragmode: true,
    margin: {
    l: 0,
    r: 0,
    b: 0,
    t: 0
    }};
Plotly.newPlot('myDiv_bert', data, layout_bert);