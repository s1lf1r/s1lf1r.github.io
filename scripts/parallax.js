// Globale Variablen
var fensterHoehe = 0,
	seitenHoehe = 0,
	bewegungsTeiler = 2.3;	// Die Verschiebung der Hintergrundebene entspricht der gescrollten Hoehe geteilt durch diesen Wert.
							// bewegungsTeiler = 1.1	<- schnelle Geschwindigkeit
							// bewegungsTeiler >= 2		<- maessige Geschwindigkeit
							// bewegungsTeiler < 1		<- komische Geschwindigkeit

// Berechnet die Hoehe des Fensters und der Seite
function bezieheDimensionen() {
	fensterHoehe = $( window ).height(),
	seitenHoehe = $( document ).height();
    $( '.sektion' ).css('height', fensterHoehe );
}

function parallaxeVerschiebung() {

	// Prueft die aktuelle Scrollposition
	var gescrollt = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop,
	
	// Berechnet die gegenwaertige Sektion
	gegenwaertigeSektion = Math.ceil( gescrollt  / fensterHoehe  ),
	
	// Berechnet den scrollabstand zur naechsten Sektion
	gescrolltInSektion = gescrollt - ( Math.ceil ( fensterHoehe * gegenwaertigeSektion ) ),
	
	// Berechnet Position des Blocks mit der Klasse "hintergrundbild" fuer die gegenwaertige Sektion
	bewegungAktiv= Math.round( ( gescrolltInSektion / bewegungsTeiler ) + ( fensterHoehe / bewegungsTeiler ) ),
	
	// Berechnet Position des Blocks mit der Klasse "hintergrundbild" fuer die kommende Sektion
	bewegungProaktiv = Math.round( gescrolltInSektion / bewegungsTeiler );
		
	// Prueft in welcher Sektion wir uns befinden, repositioniert den inneliegenden Block mit der Klasse "hintergrundbild"
	if ( gegenwaertigeSektion == 1 ) {
		$( '#start .hintergrundbild' ).css( 'top', bewegungAktiv );
	} else {
		$( '#start .hintergrundbild' ).css( 'top', bewegungProaktiv );
	};
	if ( gegenwaertigeSektion == 2 ) {
		$( '#leistungen .hintergrundbild' ).css( 'top', bewegungAktiv );
	} else {
		$( '#leistungen .hintergrundbild' ).css( 'top', bewegungProaktiv );
	};
	if ( gegenwaertigeSektion == 3 ) {
		$( '#kontakt .hintergrundbild' ).css( 'top', bewegungAktiv );
    } else {
		$( '#kontakt .hintergrundbild' ).css( 'top', bewegungProaktiv );
	};
}

// Startet unsere Funktionen nachdem HTML geladen wurde
$( document ).ready(function() {

	// Bezieht die Dimensionen für die Berechnung der Parallaxen Verschiebung
	bezieheDimensionen();

	// Fuehrt die Funktion fuer Parallaxe Verschiebung beim scrollen aus
	$( window ).scroll(function() {
		parallaxeVerschiebung();
	});
});

// Bezieht neue Dimensionen bei Reskalierung des Browsers
$( window ).resize( function() {
	bezieheDimensionen();
});