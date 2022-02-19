
function unlike(){
    var ao = document.querySelectorAll('div[aria-label="Action options"]');
    for(var i=0; i<ao.length; i++){
        ao[i].click();
        setTimeout(function(){
            var unlike = document.querySelector('div[role="menuitem"]');
            unlike.click();
		}, 4000);
    }
    console.log('Done :), removed '+ ao.length + 'shiiit');

    window.location.reload();

}