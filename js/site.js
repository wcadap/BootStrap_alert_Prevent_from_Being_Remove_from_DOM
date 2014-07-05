(function () {
    "use strict";


    var $alertMsg = $("#alertMsg");
    var alertHtmlClose = '<a href="#" data-dismiss="alert" class="close">&times;</a>';
    var alertHtml;

    $(function () {

        configListeners();
        
    });

    function configListeners() {
        
        $("#submitButton").click(function () {
            submitComments();
        });

        $alertMsg.on("close.bs.alert", function () {
            $alertMsg.hide();
            return false;
        });
    }

     function submitComments() {
        if (!validateInput($("#Name"),"Name is required. Please supply") ) {
            return false;
        }

         if (!validateInput($("#Address"),"Address is required. Please supply") ) {
            return false;
        }

        $alertMsg.hide();
        
    }



    function validateInput($inputText, message) {

        if ($inputText.val() == "") {
            alertHtml = alertHtmlClose;
            alertHtml = alertHtml.concat(message);
            $alertMsg.show();
            $alertMsg.html(alertHtml);
            $inputText.focus();
            return false;
        }
        
        return true;
    }


})();
