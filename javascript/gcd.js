$(document).ready(function () {
	$("#anzahl_gc").keyup(function () {
		var anz = $("#anzahl_gc").val(), regi = /^[0-9]$/, booli = regi.test(anz), len = anz.length, i = 0;
		$("#myForm_gc input").remove();
		$("#myForm_gc br").remove();
		$("#myForm_gc b").remove();
		if (booli || len === 0) {
			for (i = 0; i < anz; i++) {
				var newForm = document.createElement("input"),
                    newBreak = document.createElement("br"),
				    newBreak2 = document.createElement("br"),
                    cn = "text";
				newForm.type = "text";
				newForm.className = i+1==anz?"text"+i+" text text_last":"text"+i+" text"
				$("#myForm_gc").append("<b>Number " + (i + 1)  + ":</b></span>");
				$("#myForm_gc").append(newForm);
				$("#myForm_gc").append(newBreak);
			
			}
			$(".text").keyup(function () {
                var anz = $("#anzahl_gc").val();
                var zahl = new Array(anz);
                for(var i=0; i<anz;i++){
                    zahl[i]=1;
                }
                for(var i = 0; i<anz; i++) {
                    var z = $("#myForm_gc").find(".text"+i).val();
                    zahl[i] = (z.length!=0 ? z : 1);
                }
                zahl = zahl.sort(function(a, b){return a-b});
                for (i=0;i<anz; i++) {
                    console.log(zahl[i]);
                }
				$(".text").next(".texti_gc").remove();
				$(".text").next(".brexi_gc").remove();
				var regi = /^[0-9]+$/,
                    val = $(this).val(),
				    booli = regi.test(val),
				    len = $(this).val().length;
				if (len === 0) {
					var newText = "       <b class=\"teal-text texti_gc\"></b><br class=\"brexi_gc\">";
				} else {
					if (booli) {
						var newText = "       <b class=\"teal-text texti_gc\">Result:  " + gcd(zahl, anz) + "</b><br class=\"brexi_gc\">";
					} else {
						var newText = "       <b class=\"teal-text texti_gc\">Error: Only Numbers are allowed!</b><br class=\"brexi_gc\">";
					}
				}
				$(".text_last").after(newText);
			}); 
        } else {
            $("#myForm_gc").append("<b class=\"teal-text\">Not a Number!</b>")
		}
	});
    function gcd_ab(a, b) {
        while (b > 0)
        {
            var temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    function gcd(z, a) {
        var result = z[0];
        for(var i = 1; i < a; i++) result = gcd_ab(result, z[i]);
        return result;
    }
});
