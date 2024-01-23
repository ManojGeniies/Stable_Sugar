$(document).ready(function() {
    $('.tabLoadContent').empty();
    $('.tabLoadContent').append("<iframe id='phyicalActivity' class='phyicalActivity' src='elements/activity/physical_activity/story.html' width='970' height='500'></iframe>");
    $('.tab').click(function() {

        $('.tab').removeClass("active");
        $(this).addClass("active");
        var _getId = $(this).attr("id");
        $(".gwrapper").show();
        setTimeout(function() { __$cWrapper.hide(); }, 1000);
        //	$('.tabLoadContent').html();
        if (_getId == "tab1") {
            $('.tabLoadContent').load('pages/Topic01/T01P92.html');
            $("#_clickImg0pdfActivity").hide();
        } else if (_getId == "tab2") {
            $('.tabLoadContent').load('pages/Topic01/T01P93.html');
            $("#_clickImg0pdfActivity").hide();
        } else if (_getId == "tab3") {
            $('.tabLoadContent').load('pages/Topic01/T01P94.html');
            $("#_clickImg0pdfActivity").hide();
        } else if (_getId == "tab4") {
            $('.tabLoadContent').load('pages/Topic01/T01P95.html');
            $("#_clickImg0pdfActivity").hide();
        } else if (_getId == "tab5") {
            //	$('.tabLoadContent').load('physical_activity/story_html5.html');
            $('.tabLoadContent').empty();
            $('.tabLoadContent').append("<iframe id='phyicalActivity' class='phyicalActivity' src='elements/activity/physical_activity/story.html' width='970' height='500'></iframe>");
            $("#_clickImg0pdfActivity").fadeIn();
        }
    });

    $('._linkActivity').click(function() {
        $("#pageClsResourcesPopupActivity").show();
    });
    $('.closeAct').click(function() {
        //console.log("close");
        $("#pageClsResourcesPopupActivity").hide();
    });
});