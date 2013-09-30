/* dropdown navigation */
function dropNavigation(state)
{
	// search navigation container element by it's id
	var navigation = document.getElementById('subnavigation');
	// if container not found - return
	if (!navigation)
		return;
	// if state == true - drop navigation down
	if (state)
		navigation.style.display = 'block';
	else // hide
		navigation.style.display = 'none';
}

/* gallery image preview */
function show(e, a)
{
	// closes image & overlay
	var close = function ()
	{
		// if overlay is present - hide it
		if (overlay) 
		{
			overlay.parentNode.removeChild(overlay);
		}
		// if image is present - hide it
		if (imgContainer)
		{
			imgContainer.parentNode.removeChild(imgContainer);
		}
		// enable scrollbar
		document.body.style.overflow = 'auto';
	}
	// prevent hyperlink default action (prevent loading page defined in href attribute)
	e.preventDefault();
	// add scrollTop value in order to center image on the screen
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
	
	// create overlay element
	var overlay = document.createElement('DIV');
	document.body.appendChild(overlay);
	overlay.id = 'gallery_overlay';
	// cover page with overlay
	overlay.style.top = overlay.offsetTop + scrollTop + 'px';
	// hide scrollbars
	document.body.style.overflow = 'hidden';
	// on mouse click hide overlay
	overlay.onclick = close;
	
	// dispaly a big image 
	var imgContainer = document.createElement('DIV');
	document.body.appendChild(imgContainer);
	imgContainer.innerHTML = '<img src="' + a.href + '" />';
	imgContainer.align = 'center'
	imgContainer.id = 'gallery_img_container';
	// center image on the screen
	imgContainer.style.top = imgContainer.offsetTop + scrollTop + 'px';
	// on mouse click hide image
	imgContainer.onclick = close;
}

/* home page image-map color change */
function changeColor(state, imgName)
{
	// search for image
	var img = document.getElementById('services');
	
	// if state == false - set image to default
	if (!state)
	{
		img.src = 'pics/home.png';
	}
	// if state == true - set correspondind image to link
	else 
	{
		img.src = 'pics/main_' + imgName.substring(imgName.lastIndexOf('/') + 1, imgName.lastIndexOf('.')) + '.png';
	}
}

