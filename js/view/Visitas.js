import React from "react";
import LineChart from "react-chartjs/lib/Line";

export default class Visitas extends React.Component {
  render() {
    const chartData = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        datasets: [
            {
                label: "Ano de 2015",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [12032,8930,18020,4503,5300,22030,21024,16030,17302,12506,36101,32423]
            }
		]
	};
	const chartOptions = {};
    return (
    	<div>
      		<h1>Visitas</h1>
      		<LineChart data={chartData} options={chartOptions} width="800" height="350"/>
      	</div>
    );
  }
}