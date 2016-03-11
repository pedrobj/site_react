$(function(){
    $('#myModal').on('shown.bs.modal', function(){
        var ctx = document.getElementById("myChart").getContext("2d");
        var randomData = [
            {
                value: 53,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "Breaking Bad"
            },
            {
                value: 52,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Suits"
            },
            {
                value: 51,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Game of Thrones"
            }
        ];
        var customOptions = {
          segmentShowStroke : true,
          segmentStrokeColor : "#fff",
          segmentStrokeWidth : 2,
          legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li class=\"legend-title\"><span class=\"legend-sample\" style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%> - <%=segments[i].value%> votos<%}%></li><%}%></ul>"
        };
        var chart = new Chart(ctx).Doughnut(randomData, customOptions);
        $("#legend").empty().append(chart.generateLegend());
    });
});