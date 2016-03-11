import React from "react";
import PieChart from "react-chartjs/lib/Pie";

export default class Statistics extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: false,
			game: false
		};
	}

	componentDidMount() {
		var game = 'archeage';
		this.getGraph();		
	}

	getGraph(e) {
		var game = e ? e.target.value : 'archeage';
		const apiURL = 'http://earlygame.net/api/statistics/'+game;

		//API Request (ajax)
		this.serverRequest = $.ajax({
			url: apiURL,
			dataType: 'jsonp',
			crossDomain: true,
			cache: false,
			jsonpCallback: 'callback',
			success: function(data) {
				this.changeData(game, data);
			}.bind(this)
		});
	}

	changeData(game, r) {
		var chartData = [];
		var charOptions = [];

		for(var i in r.response)
		{
			// Generate Random RGB numbers
			var rgb = [];
			for(var x = 0; x < 3; x++)
			    rgb.push(Math.floor(Math.random() * 255));

			// Populate chartData with Pie Data Structure {value,label,color,highlight} - ChartJS
			var pieDataStructure = {
				value: r.response[i].Classe.count,
				label: '<img src="'+r.response[i].Classe.icon+'"/> '+r.response[i].Classe.name,
				color: 'rgba('+ rgb.join(',') +',1)',
				highlight: 'rgba('+ rgb.join(',') +',0.7)'
			}
			chartData.push(pieDataStructure);
		}

		// Call Change State
		if(chartData.length)
			this.setState({chartData, game});
	}

	render() {
		// Custom Tooltip - Eu preciso carregar as imagens enviei pela Label
		const chartOptions = {
		    customTooltips: function (tooltip) {
		        var tooltipEl = $('#chartjs-tooltip');

		        if (!tooltip) {
		            tooltipEl.css({
		                opacity: 0
		            });
		            return;
		        }

		        tooltipEl.removeClass('above below');
		        tooltipEl.addClass(tooltip.yAlign);
				tooltipEl.html(tooltip.text+' Guides'); // Read tooltip text as HTML

		        tooltipEl.css({
		            opacity: 1,
		            left: tooltip.chart.canvas.offsetLeft + tooltip.x + 'px',
		            top: tooltip.chart.canvas.offsetTop + tooltip.y + 'px',
		            fontFamily: tooltip.fontFamily,
		            fontSize: tooltip.fontSize,
		            fontStyle: tooltip.fontStyle,
		        });
		    }
		};
		const title = 'Charts from earlyGame.net - '+this.state.game+' site';

		return (
		<div>
			<h1 class="statistics-title">{title}</h1>

			<div class="statistics-buttons btn-group btn-group-justified" role="group" aria-label="...">
				<div class="btn-group" role="group">
					<button type="button" class="btn btn-default" value="archeage" onClick={this.getGraph.bind(this)}>Archeage</button>
				</div>
				<div class="btn-group" role="group">
					<button type="button" class="btn btn-default" value="wildstar" onClick={this.getGraph.bind(this)}>WildStar</button>
				</div>
				<div class="btn-group" role="group">
					<button type="button" class="btn btn-default" value="tos" onClick={this.getGraph.bind(this)}>Tree of Savior</button>
				</div>
			</div>

			<PieChart data={this.state.chartData} options={chartOptions} redraw width="800" height="350"/>

			<div id="chartjs-tooltip"></div>
		</div>
		);
	}
}