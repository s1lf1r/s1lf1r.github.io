var oldAnz = 0;
$(document).ready(function() {
	$("#anzahl").keyup(function() {
		var anz = $("#anzahl").val();
		var i=0;
		$("#myForm input").remove();
		$("#myForm br").remove();
		$("#myForm b").remove()
		for (i=0;i<anz;i++) {
			var newForm = document.createElement("input");
			var newBreak = document.createElement("br");
			var newBreak2 = document.createElement("br");
			var cn = "text";
			newForm.type = "text";
			newForm.className = "text";
			$("#myForm").append("<b>String " +(i+1) + ":</b></span>");
			$("#myForm").append(newForm);
			$("#myForm").append(newBreak);
			
		}
		$(".text").keyup(function() {
			$(this).next(".texti").remove();
			$(this).next(".brexi").remove();
			var val = $(this).val();
			var newText = "       <b class=\"teal-text texti\">Ergebnis:  " + lwsarray(val) + "</b><br class=\"brexi\">";
			$(this).after(newText);
		});
	});
});
function lwsarray(strseq) {
	var anz = $("#anzahl").val();
	var i = 0;
	var lwsar = new Array(26);
	for(j=0;j<26;j++) {
		lwsar[j] = new Array(26);
	}
	var lwsarNeu = new Array(26);
	for(j=0;j<26;j++) {
		lwsarNeu[j] = new Array(26);
	}
	for(i = 0; i<26; i++) {
		for(j=0; j<26; j++) {
			lwsar[i][j]=0;
			lwsarNeu[i][j]=0;
		}
	}
	for(i=1;i<=strseq.length;i++) {
		var c = strseq.charCodeAt(i-1);
		var ende = c-'a'.charCodeAt(0);
		var max = 0;
		var val = 0;
		for(j=0;j<26;j++) {
			max = 0;
			for(k=0;k<=ende;k++) {
				val = lwsar[k][j];
                lwsarNeu[k][j] = val;
                max = Math.max(max, val);
			}
			lwsarNeu[ende][j] = max+1;
            for (k=ende+1; k<26; k++) {
                lwsarNeu[k][j] = lwsar[k][j];
            }
		}
		for (k=0; k<26; k++) {
            max = 0;
            for (j=25; j>=ende; j--) {
                val = lwsar[k][j];
                lwsarNeu[k][j] = Math.max(val, lwsar[k][j]);                        
                max = Math.max(max, val);
            }
			lwsarNeu[k][ende] = Math.max(max+1, lwsarNeu[k][ende]);
            for (j=0; j<ende; j++) {
                lwsarNeu[k][j] = Math.max(lwsar[k][j], lwsarNeu[k][j]);
            }
		}
		var vorr = new Array(26);
		for(j=0;j<26;j++) {
			vorr[j] = new Array(26);
		}
		for(j=0;j<26;j++) {
			for(k=0;k<26;k++) {
				vorr[k][j] = lwsar[k][j];
			}
		}
		for(j=0;j<26;j++) {
			for(k=0;k<26;k++) {
				lwsar[k][j] = lwsarNeu[k][j];
			}
		}
		for(j=0;j<26;j++) {
			for(k=0;k<26;k++) {
				lwsarNeu[k][j] = vorr[k][j];
			}
		}
		max = 0;
		val = 0;
		for(j=0;j<26;j++) {
			for(k=0;k<26;k++) {
				val = lwsar[k][j];
				max = Math.max(max, val);
			}
		}
	}
	return max;
}
