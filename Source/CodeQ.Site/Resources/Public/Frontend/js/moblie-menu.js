(function() {

	//Remember if the menu is opened or not
	var menuOpened = false;
	var menuButton = document.getElementById('mobile-navigation-button');
	var mobileNavigationContainer = document.getElementById('site-navigation-holder');
	var siteNavigationHolder = document.getElementById('codeq-site-header');
	var siteContainer = document.querySelector('.main-contentcollection');
	var footerContainer = document.querySelector('.codeq-site-footer');
	  
	// Add click listener on menu icon
	menuButton.addEventListener('click', onMenu_click);
	  
	// Add click listener on menu 
	mobileNavigationContainer.addEventListener('click', onMobileNavigationContainer_click);

	// Add click and scroll listener on body
	document.addEventListener('click', onDoc_click);
	document.addEventListener('scroll', onDoc_click);
	window.addEventListener('resize', onDoc_click);

	function toggleMenu(){
	  	menuOpened = !menuOpened;
		var mobileNavigationContainerHeight = mobileNavigationContainer.offsetHeight; 
	 
	  	if (menuOpened){
	  		// Show menu and move other Elements down
	    	siteNavigationHolder.style.transform = 'translateY(' + mobileNavigationContainerHeight + 'px)';
	    	siteContainer.style.transform = 'translateY(' + mobileNavigationContainerHeight + 'px)';
	    	footerContainer.style.transform = 'translateY(' + mobileNavigationContainerHeight + 'px)';
	    } else{
	    	// Hide menu and move other Elements up
	    	siteNavigationHolder.style.transform = 'unset';
	    	siteContainer.style.transform = 'unset';
	    	footerContainer.style.transform = 'unset';
	    }
	}
	  
	function onMenu_click(domEvent){
		domEvent.stopPropagation();
		toggleMenu();
	}

	function onDoc_click(domEvent){
		if(!menuOpened) {
			return;
		}
		domEvent.stopPropagation();
		toggleMenu();
	}

	function onMobileNavigationContainer_click(domEvent){
		domEvent.stopPropagation();
	}


}());