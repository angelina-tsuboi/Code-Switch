$(document).ready(function() {
    $("#encodeArea").html(">_");
    
    setInterval(function(){
    removeAndAppendBlickWraper();
    },2000);
    
    });
    
    function removeAndAppendBlickWraper(){
            removeAndAppendBlick(function(){
    
                    var text = $("#encodeArea").val(),
                    withCursortext =text+">_";
                    $("#encodeArea").val(withCursortext);
    
            });
    }

    function removeAndAppendBlick(callback){
        var text = $("#encodeArea").val();
         var witoutCursor = text.substr(0,text.lastIndexOf(">_"));
         $("#encodeArea").val(witoutCursor);
         setTimeout(function(){
         callback();
         },1500);
        
        }