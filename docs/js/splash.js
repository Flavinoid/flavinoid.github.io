/***************************************************************/
/*
class: 		SplashScreen
version:	1.0
created:	2010-02-02
author: 	Chris Bolson < www.cbolson.com >
url:		http://www.cbolson.com/sandbox/mootools/splashScreen/
dependencies: 
	mootools core 1.2.4

implementation:
	var splash = new SplashScreen(element,{[options]});
	var sel = new mooSelect('_id_select_box',,{[options]});
	options:
		delay		NUMERIC (default: 5000) - Time until window closes
		showOnce	BOOLEAN (default: true) - Use cookie to prevent splash screen from being shown more than once per session
		
*/
/***************************************************************/

var SplashScreen = new Class({
	Implements: Options,
  
	options: {
		'delay':2000 ,
		'showOnce': true,
	},
	
	initialize: function(element, options){
		this.setOptions(options);
		this.splash=document.id(element);
		if(this.options.showOnce){
			//	check cookie to see if splash has been shown in this session
			var splashCookie = Cookie.read('showSplashCookie') || 'yes'; 
			if(splashCookie=='yes'){
				this.showSplash();
				Cookie.write('showSplashCookie', 'no');
				return;
			}
		}else{
			this.showSplash();
		}
	},
		
	showSplash:function(){
		this.splash.setStyles({
			//'height':window.getScrollHeight(),
			//changed from window.getScrollHeight - I think this may work... it doesn't - splash wont fade out 
			'display':'block',
			'opacity':'100'
		}).fade('in');
		
		//	iframe for ie6 <Bah! Humbug!>
		if(Browser.Engine.trident4){
			var iframe2 = new Element('iframe',{
				styles:{'position':'absolute','width':'120%','height':'120%','top':'-10%','left':'-10%'},
				height:'100%',
				width:'100%',
				frameborder:0
			}).setOpacity(0).inject(this.splash,'top');
		}

		
		
		this.closeSplash.delay(this.options.delay, this);
	},
	
	closeSplash: function(){
		this.splash.fade('out');
	}
});

