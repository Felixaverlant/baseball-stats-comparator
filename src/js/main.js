$(document).ready(function() {

    var fileDecision = '';

    $(".position-selection-button").click(function() {
        $(".btn-group-justified button").removeClass("active");

        $("#example").empty()
        $(".empty-graph").remove()

        $(this).addClass("active");
        var lplayer = $(this).text();
        window.fileDecision = fileRouting(lplayer)

        listPlayers(
            'dist/data/' + window.fileDecision,
            lplayer
        ).then(function(stats) {
            drawParallelCoordinates(stats)

        }).catch(function(err) {
            console.log(err);
        });

        $(".teams").show();
    });
});
