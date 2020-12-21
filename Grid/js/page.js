function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
	document.getElementById("navmenu").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
	document.getElementById("navmenu").style.display = "block";
}

$(function() {
	addServiceBoxEventListeners();
	addServiceBoxEventListenersResp();
	document.getElementById("defaultOpen").click();
	var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
});

function addServiceBoxEventListeners() {   
	Array.from(document.getElementsByClassName('servicebox')).forEach((element) => {
		element.addEventListener('click', (e) => {
			if (e.target.hasAttribute('data-servicebox-opener')) {
				if (e.currentTarget.classList.contains('serviceboxopen')) {
					e.currentTarget.classList.remove('serviceboxopen');
				} 
				else {
					e.currentTarget.classList.add('serviceboxopen');
				}
			}
		});
	});
}

function addServiceBoxEventListenersResp() {   
	Array.from(document.getElementsByClassName('serviceboxresp')).forEach((element) => {
		element.addEventListener('click', (e) => {
			if (e.target.hasAttribute('data-servicebox-opener')) {
				if (e.currentTarget.classList.contains('serviceboxopenresp')) {
					e.currentTarget.classList.remove('serviceboxopenresp');
				} 
				else {
					e.currentTarget.classList.add('serviceboxopenresp');
				}
			}
		});
	});
}

if($(window).width() >= 992){
	$(document).ready(function(){
		var didScroll;
		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $('.topnav').outerHeight();
		$(window).scroll(function(event){
			didScroll = true;
		});
		setInterval(function() {
			if (didScroll) {
				hasScrolled();
				didScroll = false;
			}
		}, 250);
		function hasScrolled() {
			var st = $(this).scrollTop(); 
			console.log('st', st)
			if(Math.abs(lastScrollTop - st) <= delta)
			return;
			if (st > lastScrollTop && st > navbarHeight){
				$('.topnav').removeClass('nav-top').addClass('nav-up');
			} 
			else {
				if(st <= 60) {
					$('.topnav').removeClass('nav-up').removeClass('nav-top');
				} 
				else {
					$('.topnav').removeClass('nav-up').addClass('nav-top');
				}
			}
			lastScrollTop = st;
		}
	}); 
}

function openCategory(evt, categoryName) {
    var i, categoryimg, categorybtn;
    categoryimg = document.getElementsByClassName("categoryimg");
    for (i = 0; i < categoryimg.length; i++) {
        categoryimg[i].style.display = "none";
    }
    categorybtn = document.getElementsByClassName("categorybtn");
    for (i = 0; i < categorybtn.length; i++) {
        categorybtn[i].className = categorybtn[i].className.replace(" active", "");
    }
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active";
}