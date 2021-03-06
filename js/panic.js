//All Javascript by Sam Paniccia (all 50 lines of it :/). Using Google Materialize Design API. 


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
	$('#modal-cb').modal();
	$('#modal-led').modal();
	$('#modal-darwin').modal();
	$('#modal-haiku').modal();
	$('#modal-event').modal();
	$('#modal-site').modal();
	$('#modal-drum').modal();
	$('#modal-hexdungeon').modal();
	$('#modal-ssh-backup').modal();

	//Determine which content to show/hide by isBuild flag
	if (isBuild) { 
		//in build mode, display wip content
		document.getElementById("true-wrap").className = "hide";
		document.getElementById("footer").className += " hide"; 
	} else { 
		document.getElementById("wip-wrap").className = "hide";
	}
});

function closeModals() {
	$('#modal-drum').modal('close'); 	
}