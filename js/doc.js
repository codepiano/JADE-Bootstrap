$(document).ready(function(){
    $('#myModal .modal-footer button').click(function(){
        var button = $(this);
        if ( button.attr("data-dismiss") != "modal" ){
            var inputs = $('#myModal form input');
            var title = $('#myModal .modal-title');
            var progress = $('#myModal .progress');
            var progressBar = $('#myModal .progress-bar');
            inputs.attr("disabled", "disabled");
            button.hide();
            progress.show();
            progressBar.animate({width : "100%"}, 100);
            progress.delay(1000)
                .fadeOut(600);
            button.text("Close")
                .removeClass("btn-primary")
                .addClass("btn-success")
                .blur()
                .delay(1600)
                .fadeIn(function(){
                    title.text("Log in is successful");
                    button.attr("data-dismiss", "modal");
                });
        }
    });
    $('#myModal').on('hidden.bs.modal', function (e) {
        var inputs = $('#myModal form input');
        var title = $('#myModal .modal-title');
        var progressBar = $('#myModal .progress-bar');
        var button = $('#myModal .modal-footer button');
        inputs.removeAttr("disabled");
        title.text("Log in");
        progressBar.css({ "width" : "0%" });
        button.removeClass("btn-success")
            .addClass("btn-primary")
            .text("Ok")
            .removeAttr("data-dismiss");
    });
});
