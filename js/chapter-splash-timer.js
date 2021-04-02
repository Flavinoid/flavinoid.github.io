window.addEvent('domready', function() {
			var splash = new SplashScreen('splash',{'delay':'2500','showOnce':false});
			document.id('btCloseSplash').addEvent('click',function(){
			splash.closeSplash();
			});
				});// JavaScript Document