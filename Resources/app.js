Titanium.UI.backgroundColor = '#fff';


//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

// This is a single context application with mutliple windows in a stack
(function() {
	//determine platform and form factor and render approproate components
	var osname  = Ti.Platform.osname,
		  version = Ti.Platform.version,
		  height  = Ti.Platform.displayCaps.platformHeight,
		  width   = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
		
	var ApplicationHomeWindow = require('ui/common/ApplicationHomeWindow');
	
/**
 *  ------------------------------------------------------------------------------------------------
 *  Create a loading screen
 *  ------------------------------------------------------------------------------------------------
 */
  var loadingScreen = Titanium.UI.createActivityIndicator({
      height: 50,
      width: 210,
      color: '#fff',
      font: {fontFamily:'Helvetica Neue', fontSize:14,fontWeight:'normal'},
      message: L('loading'),
  });
  
  loadingScreen.show();	

/**
 * Create a json client
 */
	
  var jsonClient = Titanium.Network.createHTTPClient({
    
    onload:  function(){
      loadingScreen.hide();
      
      var xassaides = JSON.parse(this.responseText);
            
      new ApplicationHomeWindow(xassaides).open();
    },
    
    onerror: function(){
      loadingScreen.hide();
      alert('error')      
    }
    
  });
  
  jsonClient.open('GET', 'http://xassidareader.herokuapp.com/?format=json');
  
  jsonClient.send();
	

	
	
	
})();
