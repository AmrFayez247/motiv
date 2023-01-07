// to remove placeholder once search bar is active
const elem = document.querySelector('.search');
document.addEventListener("click", ()=>{
    if (elem === document.activeElement) {
        elem.setAttribute("placeholder", "");
    }else{
        elem.setAttribute("placeholder", "Search or type");
    }
})


// donut charts
// first chart
am4core.useTheme(am4themes_animated);
var chart = am4core.create("chartdiv1", am4charts.RadarChart);
chart.data = [{
  "category": "",
  "value": 45,
  "full":100
},];
chart.startAngle = 0;
chart.endAngle = 270;
chart.innerRadius = am4core.percent(80);
chart.numberFormatter.numberFormat = "";
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.strokeOpacity = 0;
var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.strokeOpacity = 0;
valueAxis.min = 0;
valueAxis.max = 100;

var series1 = chart.series.push(new am4charts.RadarColumnSeries());
series1.dataFields.valueX = "full";
series1.dataFields.categoryY = "category";
series1.columns.template.fill = am4core.color("#F6F7Fb");
series1.columns.template.fillOpacity = 0.20;
series1.columns.template.strokeWidth = 0;
series1.columns.template.radarColumn.cornerRadius = 100;

var series2 = chart.series.push(new am4charts.RadarColumnSeries());
series2.dataFields.valueX = "value";
series2.dataFields.categoryY = "category";
series2.columns.template.fill = am4core.color("white");
series2.clustered = false;
series2.columns.template.strokeWidth = 0;
series2.columns.template.radarColumn.cornerRadius = 100;

// second chart
var chart2 = am4core.create("chartdiv2", am4charts.RadarChart);
chart2.data = [{
  "category": "",
  "value": 57,
  "full":100
},];
chart2.startAngle = 0;
chart2.endAngle = 270;
chart2.innerRadius = am4core.percent(80);
chart2.numberFormatter.numberFormat = "";
var categoryAxis2 = chart2.yAxes.push(new am4charts.CategoryAxis());
categoryAxis2.dataFields.category = "category";
categoryAxis2.renderer.grid.template.strokeOpacity = 0;
var valueAxis2 = chart2.xAxes.push(new am4charts.ValueAxis());
valueAxis2.renderer.grid.template.strokeOpacity = 0;
valueAxis2.min = 0;
valueAxis2.max = 100;

var series12 = chart2.series.push(new am4charts.RadarColumnSeries());
series12.dataFields.valueX = "full";
series12.dataFields.categoryY = "category";
series12.columns.template.fill = am4core.color("#F4F5F9");
series12.columns.template.strokeWidth = 0;
series12.columns.template.radarColumn.cornerRadius = 100;

var series22 = chart2.series.push(new am4charts.RadarColumnSeries());
series22.dataFields.valueX = "value";
series22.dataFields.categoryY = "category";
series22.columns.template.fill = am4core.color("#FF7E86");
series22.clustered = false;
series22.columns.template.strokeWidth = 0;
series22.columns.template.radarColumn.cornerRadius = 100;

// third chart
var chart3 = am4core.create("chartdiv3", am4charts.RadarChart);
chart3.data = [{
  "category": "",
  "value": 9,
  "full":100
},];
chart3.startAngle = 0;
chart3.endAngle = 270;
chart3.innerRadius = am4core.percent(80);
chart3.numberFormatter.numberFormat = "";
var categoryAxis3 = chart3.yAxes.push(new am4charts.CategoryAxis());
categoryAxis3.dataFields.category = "category";
categoryAxis3.renderer.grid.template.strokeOpacity = 0;
var valueAxis3 = chart3.xAxes.push(new am4charts.ValueAxis());
valueAxis3.renderer.grid.template.strokeOpacity = 0;
valueAxis3.min = 0;
valueAxis3.max = 100;

var series13 = chart3.series.push(new am4charts.RadarColumnSeries());
series13.dataFields.valueX = "full";
series13.dataFields.categoryY = "category";
series13.columns.template.fill = am4core.color("#F6F7Fb");
series13.columns.template.strokeWidth = 0;
series13.columns.template.radarColumn.cornerRadius = 100;

var series23 = chart3.series.push(new am4charts.RadarColumnSeries());
series23.dataFields.valueX = "value";
series23.dataFields.categoryY = "category";
series23.columns.template.fill = am4core.color("#A162F7");
series23.clustered = false;
series23.columns.template.strokeWidth = 0;
series23.columns.template.radarColumn.cornerRadius = 100;

// fourth chart
var chart4 = am4core.create("chartdiv4", am4charts.RadarChart);
chart4.data = [{
  "category": "",
  "value": 25,
  "full":100
},];
chart4.startAngle = 0;
chart4.endAngle = 270;
chart4.innerRadius = am4core.percent(80);
chart4.numberFormatter.numberFormat = "";
var categoryAxis4 = chart4.yAxes.push(new am4charts.CategoryAxis());
categoryAxis4.dataFields.category = "category";
categoryAxis4.renderer.grid.template.strokeOpacity = 0;
var valueAxis4 = chart4.xAxes.push(new am4charts.ValueAxis());
valueAxis4.renderer.grid.template.strokeOpacity = 0;
valueAxis4.min = 0;
valueAxis4.max = 100;

var series14 = chart4.series.push(new am4charts.RadarColumnSeries());
series14.dataFields.valueX = "full";
series14.dataFields.categoryY = "category";
series14.columns.template.fill = am4core.color("#F6F7Fb");
series14.columns.template.strokeWidth = 0;
series14.columns.template.radarColumn.cornerRadius = 100;

var series24 = chart4.series.push(new am4charts.RadarColumnSeries());
series24.dataFields.valueX = "value";
series24.dataFields.categoryY = "category";
series24.columns.template.fill = am4core.color("#F6CC0D");
series24.clustered = false;
series24.columns.template.strokeWidth = 0;
series24.columns.template.radarColumn.cornerRadius = 100;

// remove amCharts watermark
let watermark = document.querySelectorAll("path");
for (let i = watermark.length-1; i >= 0; i--) {
    watermark[i].remove();
}

// -------------------------------------
// bar charts
// daily
var root = am5.Root.new("day");

root.setThemes([
  am5themes_Animated.new(root)
]);

var chart = root.container.children.push(am5xy.XYChart.new(root, {}));

var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
cursor.lineY.set("visible", false);
cursor.lineX.set("visible", false);

var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
xRenderer.labels.template.setAll({
  centerX: am5.p30
});

var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  maxDeviation: 0.3,
  categoryField: "hour",
  renderer: xRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  maxDeviation: 0.3,
  renderer: am5xy.AxisRendererY.new(root, {})
}));

var series = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "Series 1",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value",
  categoryXField: "hour",
  tooltip: am5.Tooltip.new(root, {
    labelText:"{valueY}"
  })
}));


// Set data
var data = [{
  hour: "1pm",
  value: 130
}, {
  hour: "2pm",
  value: 110
}, {
  hour: "3pm",
  value: 157
}, {
  hour: "4pm",
  value: 100
}, {
  hour: "5pm",
  value: 130
}, {
  hour: "6pm",
  value: 75
}, {
  hour: "7pm",
  value: 105
}];

xAxis.data.setAll(data);
series.data.setAll(data);

series.appear(1000);
chart.appear(1000, 100);

// weekly
var root2 = am5.Root.new("week");

root2.setThemes([
  am5themes_Animated.new(root2)
]);

var chart2 = root2.container.children.push(am5xy.XYChart.new(root2, {}));

var cursor2 = chart2.set("cursor", am5xy.XYCursor.new(root2, {}));
cursor2.lineY.set("visible", false);
cursor2.lineX.set("visible", false);

var xRenderer2 = am5xy.AxisRendererX.new(root2, { minGridDistance: 20 });
xRenderer2.labels.template.setAll({
  centerX: am5.p20
});

var xAxis2 = chart2.xAxes.push(am5xy.CategoryAxis.new(root2, {
  maxDeviation: 0.2,
  categoryField: "week",
  renderer: xRenderer2,
  tooltip: am5.Tooltip.new(root2, {})
}));

var yAxis2 = chart2.yAxes.push(am5xy.ValueAxis.new(root2, {
  maxDeviation: 0.2,
  renderer: am5xy.AxisRendererY.new(root2, {})
}));

var series2 = chart2.series.push(am5xy.ColumnSeries.new(root2, {
  name: "Series 1",
  xAxis: xAxis2,
  yAxis: yAxis2,
  valueYField: "value",
  categoryXField: "week",
  tooltip: am5.Tooltip.new(root2, {
    labelText:"{valueY}"
  })
}));


// Set data
var data2 = [{
  week: "W1",
  value: 7300
}, {
  week: "W2",
  value: 5600
}, {
  week: "W3",
  value: 5200
}, {
  week: "W4",
  value: 8500
}];

xAxis2.data.setAll(data2);
series2.data.setAll(data2);

series2.appear(1000);
chart2.appear(1000, 100);

// monthly
var root3 = am5.Root.new("month");

root3.setThemes([
  am5themes_Animated.new(root3)
]);

var chart3 = root3.container.children.push(am5xy.XYChart.new(root3, {}));

var cursor3 = chart3.set("cursor", am5xy.XYCursor.new(root3, {}));
cursor3.lineY.set("visible", false);
cursor3.lineX.set("visible", false);

var xRenderer3 = am5xy.AxisRendererX.new(root3, { minGridDistance: 30 });
xRenderer3.labels.template.setAll({
  centerX: am5.p30
});

var xAxis3 = chart3.xAxes.push(am5xy.CategoryAxis.new(root3, {
  maxDeviation: 0.3,
  categoryField: "month",
  renderer: xRenderer3,
  tooltip: am5.Tooltip.new(root3, {})
}));

var yAxis3 = chart3.yAxes.push(am5xy.ValueAxis.new(root3, {
  maxDeviation: 0.3,
  renderer: am5xy.AxisRendererY.new(root3, {})
}));

var series3 = chart3.series.push(am5xy.ColumnSeries.new(root3, {
  name: "Series 1",
  xAxis: xAxis3,
  yAxis: yAxis3,
  valueYField: "value",
  categoryXField: "month",
  tooltip: am5.Tooltip.new(root3, {
    labelText:"{valueY}"
  })
}));


// Set data
var data3 = [{
  month: "Jul",
  value: 17000
}, {
  month: "Aug",
  value: 16000
}, {
  month: "Sep",
  value: 15470
}, {
  month: "Oct",
  value: 15500
}, {
  month: "Nov",
  value: 13480
}, {
  month: "Dec",
  value: 11750
}];

xAxis3.data.setAll(data3);
series3.data.setAll(data3);

// change chart based on selection
let day = document.getElementById("day-btn");
let week = document.getElementById("week-btn");
let month = document.getElementById("month-btn");
let bars = document.getElementsByClassName("bar");
let val = document.getElementById("value");
val.textContent = "256 Miles";
let period = [day,week,month];
for (let i = 0; i < period.length; i++) {
    period[i].addEventListener("click",()=>{
        for (let j = 0; j < period.length; j++) {
            period[j].classList.remove("active");
            bars[j].classList.remove("show");
        }
        period[i].classList.add("active");
        bars[i].classList.add("show");

        if(i==0){
            val.textContent = "256 Miles";
        }else if(i==1){
            val.textContent = "1,600 Miles";
        }else{
            val.textContent = "7,600 Miles";
        }
    })
}



// ----------------------------------------
// smooth line

function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}

// line1
am4core.useTheme(am4themes_animated);

var line1 = am4core.create("line1", am4charts.XYChart);

line1.data = [{
  "hour": "7",
  "miles": getRandomValue(1000, 3000)
}, {
  "hour": "9",
  "miles": getRandomValue(1000, 3000)
}, {
  "hour": "11",
  "miles": getRandomValue(1000, 3000)
}, {
  "hour": "13",
  "miles": getRandomValue(1000, 3000)
}, {
  "hour": "15",
  "miles": getRandomValue(1000, 3000)
}, {
  "hour": "17",
  "miles": getRandomValue(1000, 3000)
}, {
  "hour": "19",
  "miles": getRandomValue(1000, 3000)
}, {
  "hour": "21",
  "miles": getRandomValue(1000, 3000)
}];

var categoryAxis1 = line1.xAxes.push(new am4charts.CategoryAxis());
categoryAxis1.dataFields.category = "hour";
categoryAxis1.renderer.minGridDistance = 30;

var valueAxis1 = line1.yAxes.push(new am4charts.ValueAxis());

var series1 = line1.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "miles";
series1.dataFields.categoryX = "hour";
series1.strokeWidth = 2;
series1.tensionX = 0.8;

series1.tooltip.disabled = false;
series1.tooltip.pointerOrientation = "vertical";

line1.cursor = new am4charts.XYCursor();

line1.legend = new am4charts.Legend();


// line2

var line2 = am4core.create("line2", am4charts.XYChart);

line2.data = [{
  "day": "1",
  "miles": getRandomValue(7000, 21000)
}, {
  "day": "2",
  "miles": getRandomValue(7000, 21000)
}, {
  "day": "3",
  "miles": getRandomValue(7000, 21000)
}, {
  "day": "4",
  "miles": getRandomValue(7000, 21000)
}, {
  "day": "5",
  "miles": getRandomValue(7000, 21000)
}, {
  "day": "6",
  "miles": getRandomValue(7000, 21000)
}, {
  "day": "7",
  "miles": getRandomValue(7000, 21000)
}];

var categoryAxis2 = line2.xAxes.push(new am4charts.CategoryAxis());
categoryAxis2.dataFields.category = "day";
categoryAxis2.renderer.minGridDistance = 30;

var valueAxis2 = line2.yAxes.push(new am4charts.ValueAxis());

var series2 = line2.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "miles";
series2.dataFields.categoryX = "day";
series2.strokeWidth = 2;
series2.tensionX = 0.8;

series2.tooltip.disabled = false;
series2.tooltip.pointerOrientation = "vertical";

line2.cursor = new am4charts.XYCursor();

line2.legend = new am4charts.Legend();


// line3
var line3 = am4core.create("line3", am4charts.XYChart);

line3.data = [{
  "day": "5",
  "miles": getRandomValue(30000, 90000)
}, {
  "day": "10",
  "miles": getRandomValue(30000, 90000)
}, {
  "day": "15",
  "miles": getRandomValue(30000, 90000)
}, {
  "day": "20",
  "miles": getRandomValue(30000, 90000)
}, {
  "day": "25",
  "miles": getRandomValue(30000, 90000)
}, {
  "day": "30",
  "miles": getRandomValue(30000, 90000)
}];

var categoryAxis3 = line3.xAxes.push(new am4charts.CategoryAxis());
categoryAxis3.dataFields.category = "day";
categoryAxis3.renderer.minGridDistance = 30;

var valueAxis3 = line3.yAxes.push(new am4charts.ValueAxis());

var series3 = line3.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "miles";
series3.dataFields.categoryX = "day";
series3.strokeWidth = 2;
series3.tensionX = 0.8;

series3.tooltip.disabled = false;
series3.tooltip.pointerOrientation = "vertical";

line3.cursor = new am4charts.XYCursor();

line3.legend = new am4charts.Legend();

// to change chart based on selection
let dayline = document.getElementById("day-line");
let weekline = document.getElementById("week-line");
let monthline = document.getElementById("month-line");
let barsline = document.getElementsByClassName("lines");
let val1 = document.getElementById("value1");
val1.textContent = "Week 2";
let periodLine = [dayline,weekline,monthline];
for (let i = 0; i < periodLine.length; i++) {
    periodLine[i].addEventListener("click",()=>{
        for (let j = 0; j < periodLine.length; j++) {
            periodLine[j].classList.remove("active");
            barsline[j].classList.remove("show");
        }
        periodLine[i].classList.add("active");
        barsline[i].classList.add("show");

        if(i==0){
            val1.textContent = "20 Feb 2022";
        }else if(i==1){
            val1.textContent = "Week 2";
        }else{
            val1.textContent = "March";
        }
    })
}