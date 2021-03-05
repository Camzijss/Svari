anychart.onDocumentReady(function() {
    var customTheme = {
        "defaultFontSettings": {
          "fontSize": 9,
          "fontWeight": 100,
          "fontColor": "gr"
        },
        "chart": {
          "title": false,
          "legend": false
        }
    };

    var data = {
      header: ["Hello", "Death toll"],
      rows: [
        ["", 120]
    ]};
    
    anychart.theme(customTheme);

    var chart = anychart.bar();
    
    chart.background({fill: "#3F3E3E"});

    chart.data(data);

  chart.container("time");
  chart.draw();
});

anychart.onDocumentReady(function() {
  var customTheme = {
      "defaultFontSettings": {
        "fontSize": 9,
        "fontWeight": 100,
        "fontColor": "gr"
      },
      "chart": {
        "title": false,
        "legend": false
      }
  };

  var data = {
    header: ["Hello", "Death toll"],
    rows: [
      ["", 23]
  ]};
  
  anychart.theme(customTheme);

  var chart = anychart.bar();

  chart.background({fill: "#3F3E3E"});

  chart.data(data);

chart.container("amount");
chart.draw();
});

anychart.onDocumentReady(function() {
  var customTheme = {
      "defaultFontSettings": {
        "fontSize": 9,
        "fontWeight": 100,
        "fontColor": "gr"
      },
      "chart": {
        "title": false,
        "legend": false
      }
  };

  var data = {
    header: ["Hello", "Death toll"],
    rows: [
      ["", 22]
  ]};
  
  anychart.theme(customTheme);

  var chart = anychart.bar();

  chart.background({fill: "#3F3E3E"});

  chart.data(data);

chart.container("temp");
chart.draw();
});