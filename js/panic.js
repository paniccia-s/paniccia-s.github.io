//All Javascript by Sam Paniccia (so much code smh). Using Google Materialize Design API. 


//Should I show the work-in-progress screen, or should I show the real content? 
var isBuild = false;

$(document).ready(function(){
	//Dropdowns
	$('.dropdown-button').dropdown();
	$('.dropdown-button-mobile').dropdown();
	$('.button-collapse').sideNav({
		edge: 'right'
	}); 

	//Modals
	$('#modal-darwin').modal();
	$('#modal-haiku').modal();
	$('#modal-event').modal();
	$('#modal-site').modal();
	$('#modal-drum').modal();

	//Determine which content to show/hide by isBuild flag
	if (isBuild) { 
		//in build mode, display wip content
		document.getElementById("true-wrap").className = "hide";
		document.getElementById("footer").className += " hide"; 
	} else { 
		document.getElementById("wip-wrap").className = "hide";
	}
});