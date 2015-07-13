$(document).ready(function () {
	$("#anzahl_ps").keyup(function () {
		var anz = $("#anzahl_ps").val(), regi = /^[0-9]$/, booli = regi.test(anz), len = anz.length, i = 0;
		$("#myForm_ps input").remove();
		$("#myForm_ps br").remove();
		$("#myForm_ps b").remove();
		if (booli || len === 0) {
			for (i = 0; i < anz; i++) {
				var newForm = document.createElement("input"),
                    newBreak = document.createElement("br"),
				    newBreak2 = document.createElement("br"),
                    cn = "text";
				newForm.type = "text";
				newForm.className = "text";
				$("#myForm_ps").append("<b>Parentheses Sequence " + (i + 1)  + ":</b></span>");
				$("#myForm_ps").append(newForm);
				$("#myForm_ps").append(newBreak);
			
			}
			$(".text").keyup(function () {
				$(this).next(".texti_ps").remove();
				$(this).next(".brexi_ps").remove();
				var regi = /^['('|')']+$/,
                    val = $(this).val(),
				    booli = regi.test(val),
				    len = $(this).val().length;
				if (len === 0) {
					var newText = "       <b class=\"teal-text texti_ps\"></b><br class=\"brexi_ps\">";
				} else {
					if (booli) {
						var newText = "       <b class=\"teal-text texti_ps\">Result:  " + brackets(val) + "</b><br class=\"brexi_ps\">";
					} else {
						var newText = "       <b class=\"teal-text texti_ps\">Error: Only '(' or ')' are allowed!</b><br class=\"brexi_ps\">";
					}
				}
				$(this).after(newText);
			}); 
        } else {
            $("#myForm").append("<b class=\"teal-text\">Not a Number!</b>")
		}
	});
});
function brackets(val) {
	var bracketstring = "", bra = 0, max_bra = 0, i = 0;
	for(i = 0; i < val.length; i++) {
        bra += (val[i]=="("?1:-1);
        max_bra = Math.max(max_bra, bra);
    }
    for (i = 0; i < (max_bra*2); i++) {
        bracketstring+= (i < max_bra?"(":")");
    }
    return bracketstring;
}