(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1920,1080]]},
		{name:"index_atlas_2", frames: [[0,0,1920,1080]]},
		{name:"index_atlas_3", frames: [[0,0,1920,1080]]},
		{name:"index_atlas_4", frames: [[987,1436,97,96],[1086,1436,97,96],[1425,1082,377,256],[1804,1180,123,96],[862,1436,123,96],[1425,1340,484,182],[1804,1082,136,96],[862,1082,561,352],[0,1082,860,644],[0,0,1920,1080]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_10 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Gaben_transperrerersdssssssssar = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.SGF2024 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sleep_1 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sleep_2 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sleep_3 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.gaben = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Gaben_transperrerersdssssssssar();
	this.instance.setTransform(0,0,0.2859,0.2859);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245.9,184.1);


(lib.but_cnt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("sonud_click");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(4));

	// Слой_1
	this.instance = new lib.sleep_1();
	this.instance.setTransform(-43,-54,0.1938,0.1938);

	this.instance_1 = new lib.sleep_3();
	this.instance_1.setTransform(-42,-56,0.1931,0.1978);

	this.instance_2 = new lib.sleep_2();
	this.instance_2.setTransform(-44,-54,0.1946,0.1946);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-56,373.6,213.7);


(lib.к3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-64.8,59.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(-72.35,100,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_10();
	this.instance_2.setTransform(-64.8,59.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_1},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.3,0,188.5,228);


(lib.к2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(4.3,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(-2.5,40.3,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(4.3,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_1},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,0,242,131.3);


(lib.к1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-120.15,-54.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-140.95,-14.05,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF66").s().p("AlnKJQgogUgQgWQgMgPgLgiQgSg+gOh9QgOh/gQg8QgMgqg8iVQgwh1gHhOQgCgdABglIADhCQALi6gJi7QBBgZBSgEQBBgDBWAKQAyAGBkAOQBZAMA9ABIBCgCQApgBAaABIBOAGQAdACAlgDIBBgGQCagNCbAUQAJC/gMC/QgEBMgJArQgMA9giBWIg6CPQg8CsgHDhQgBAegBAMQgDAYgJAQQgJAUgTARQgOAMgZAPQidBfjHAAQi+AAirhYg");
	this.shape.setTransform(69.7413,81.0046);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF33").s().p("AjVMJQgzgPhegmIg+gYQgXgJgMgJQgVgQgOgkQgghKgPiEQgSiggOg0QgMgvg6iNQgwh0gIhLQgFgtAFhjQAJi8gJjCQgCgmALgRQAMgVAqgLQB0ghB5AGQAyADCRAWQB6ATBKgDIAsgDIAsgCQAhAABCAIQAlACA4gEIBdgGQA8gEBLAEQAuACBaAHQAeACALAKQAMAMACAiQAIDGgLDFQgGBkgOA9QgLAzgcBGIgwB2QhGC+gIDJQgBA3gDATQgFApgQAcQgXApg+AlQiHBRijATQgvAGgvAAQhuAAhsgggAnereQhSAEhBAZQAJC6gKC7IgEBCQgBAlADAcQAHBOAvB2QA9CUALArQAQA7APCAQAOB8ASA+QAKAiAMAQQARAVAnAUQCrBYC/ABQDHAACdhfQAYgQAOgMQAUgRAJgTQAIgRADgXQACgNABgdQAGjiA9isIA5iOQAjhXAMg8QAIgrAFhMQALi/gIjAQibgTiaAMIhCAGQglADgcgBIhPgGQgagCgpACIhCABQg9AAhZgMQhkgPgygGQg/gHg0AAIgkABg");
	this.shape_1.setTransform(69.8556,80.8609);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.9,-54.5,280.6,216.5);


(lib.Символ8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_9 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,255,0.698)").s().p("AhgBhQgogoAAg5QAAg4AogoQAogoA4AAQA5AAAoAoQAoAoAAA4QAAA5goAoQgoAog5AAQg4AAgogog");
	this.shape.setTransform(124.35,124.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,102,255,0.733)").s().p("Ai3C4QhMhMAAhsQAAhrBMhMQBMhMBrAAQBsAABMBMQBMBMAABrQAABshMBMQhMBMhsAAQhrAAhMhMg");
	this.shape_1.setTransform(124.35,124.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,102,255,0.765)").s().p("AkOEPQhwhwAAifQAAieBwhwQBwhwCeAAQCfAABwBwQBwBwAACeQAACfhwBwQhwBwifAAQieAAhwhwg");
	this.shape_2.setTransform(124.325,124.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,102,255,0.8)").s().p("AllFmQiUiUAAjSQAAjRCUiUQCUiUDRAAQDSAACUCUQCUCUAADRQAADSiUCUQiUCUjSAAQjRAAiUiUg");
	this.shape_3.setTransform(124.325,124.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,102,255,0.831)").s().p("Am8G9Qi4i4AAkFQAAkEC4i4QC4i4EEAAQEFAAC4C4QC4C4AAEEQAAEFi4C4Qi4C4kFAAQkEAAi4i4g");
	this.shape_4.setTransform(124.325,124.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(102,102,255,0.867)").s().p("AoSITQjcjcAAk3QAAk2DcjcQDcjcE2AAQE3AADcDcQDcDcAAE2QAAE3jcDcQjcDck3AAQk2AAjcjcg");
	this.shape_5.setTransform(124.325,124.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(102,102,255,0.898)").s().p("AppJqQkAkAAAlqQAAlpEAkAQEAkAFpAAQFqAAEAEAQEAEAAAFpQAAFqkAEAQkAEAlqAAQlpAAkAkAg");
	this.shape_6.setTransform(124.325,124.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,102,255,0.933)").s().p("ArALBQkkkkAAmdQAAmcEkkkQEkkkGcAAQGdAAEkEkQEkEkAAGcQAAGdkkEkQkkEkmdAAQmcAAkkkkg");
	this.shape_7.setTransform(124.325,124.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(102,102,255,0.965)").s().p("AsXMYQlIlIAAnQQAAnPFIlIQFIlIHPAAQHQAAFIFIQFIFIAAHPQAAHQlIFIQlIFInQAAQnPAAlIlIg");
	this.shape_8.setTransform(124.3,124.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6666FF").s().p("AtuNvQlslsAAoDQAAoCFslsQFslsICAAQIDAAFsFsQFsFsAAICQAAIDlsFsQlsFsoDAAQoCAAlslsg");
	this.shape_9.setTransform(124.3,124.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.6,248.6);


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(20,1,1).p("AzNxGMAmbAAAMAAAAiNMgmbAAAg");
	this.shape.setTransform(123,109.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AzNRHMAAAgiNMAmbAAAMAAAAiNg");
	this.shape_1.setTransform(123,109.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,266,239);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.button_1.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(1);
		}
		this.stop ();
	}
	this.frame_1 = function() {
		/* Нажмите для перехода к кадру и остановки воспроизведения
		При нажатии на указанный экземпляр символа точка воспроизведения перемещается на кадр, указанный на временной шкале, а воспроизведение останавливается.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		
		Инструкции:
		1. Замените цифру 5 в коде ниже на номер кадра, с которого продолжится воспроизведение после нажатия на экземпляр символа.
		2. Номера кадров в EaselJS начинаются с 0, а не с 1
		*/
		
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop(0);
		}
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой_2
	this.button_1 = new lib.Символ3();
	this.button_1.name = "button_1";
	this.button_1.setTransform(151.95,139.35,1.2629,1.2947,0,0,0,122.9,109.3);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.Символ3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(2));

	// Слой_1
	this.instance = new lib.Символ8();
	this.instance.setTransform(34.85,17.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-14.9,336.2,309);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var count = 0;
		
		this.but_cnt.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			// Начало пользовательского кода
			// Этот образец кода отображает в панели "Вывод" слова "Нажата кнопка мыши".
			count=count+1;
			
			this.total.text=count;
			// Конец пользовательского кода
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// counter
	this.instance = new lib.gaben();
	this.instance.setTransform(982.9,581,1,1,0,0,0,122.9,92);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.gaben(), 3);

	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(1350.55,945.75,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(1149.1,945.75,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_3 = new lib.Символ1();
	this.instance_3.setTransform(949.05,947.2,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_4 = new lib.Символ1();
	this.instance_4.setTransform(750.5,945.75,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(547.55,944.25,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_6 = new lib.Символ1();
	this.instance_6.setTransform(1350.55,753.1,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_7 = new lib.Символ1();
	this.instance_7.setTransform(1149.1,754.55,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_8 = new lib.Символ1();
	this.instance_8.setTransform(949.05,753.05,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_9 = new lib.Символ1();
	this.instance_9.setTransform(749.05,753.1,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_10 = new lib.Символ1();
	this.instance_10.setTransform(543.1,753.05,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_11 = new lib.Символ1();
	this.instance_11.setTransform(1349.1,556,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_12 = new lib.Символ1();
	this.instance_12.setTransform(1149.1,556,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_13 = new lib.Символ1();
	this.instance_13.setTransform(749.05,554.55,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_14 = new lib.Символ1();
	this.instance_14.setTransform(544.6,554.55,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_15 = new lib.Символ1();
	this.instance_15.setTransform(1147.65,357.45,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_16 = new lib.Символ1();
	this.instance_16.setTransform(544.6,354.5,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_17 = new lib.Символ1();
	this.instance_17.setTransform(750.5,354.55,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_18 = new lib.Символ1();
	this.instance_18.setTransform(949.05,357.5,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_19 = new lib.Символ1();
	this.instance_19.setTransform(1350.35,355.5,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_20 = new lib.Символ1();
	this.instance_20.setTransform(1350.95,156.8,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_21 = new lib.Символ1();
	this.instance_21.setTransform(1148.5,156.15,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_22 = new lib.Символ1();
	this.instance_22.setTransform(951,156.8,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_23 = new lib.Символ1();
	this.instance_23.setTransform(751.7,157.45,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_24 = new lib.Символ1();
	this.instance_24.setTransform(539.75,157.8,0.5692,0.5995,0,0,0,105,99.1);

	this.total = new cjs.Text("", "73px 'Impact'", "#FFFFFF");
	this.total.name = "total";
	this.total.textAlign = "center";
	this.total.lineHeight = 91;
	this.total.lineWidth = 93;
	this.total.parent = this;
	this.total.setTransform(190.75,196.65);

	this.but_cnt = new lib.but_cnt();
	this.but_cnt.name = "but_cnt";
	this.but_cnt.setTransform(198.05,106.35,1,1,0,0,0,150,63);
	new cjs.ButtonHelper(this.but_cnt, 0, 1, 2, false, new lib.but_cnt(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.but_cnt},{t:this.total},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой_4
	this.instance_25 = new lib.к3();
	this.instance_25.setTransform(1844.4,807.7,1,1,0,0,0,74.4,114);
	new cjs.ButtonHelper(this.instance_25, 0, 1, 2, false, new lib.к3(), 3);

	this.instance_26 = new lib.к2();
	this.instance_26.setTransform(1696.4,459.7,1,1,0,0,0,118.5,65.5);
	new cjs.ButtonHelper(this.instance_26, 0, 1, 2, false, new lib.к2(), 3);

	this.instance_27 = new lib.к1();
	this.instance_27.setTransform(1745.45,625.25,1,1,0,0,0,69.9,80.9);
	new cjs.ButtonHelper(this.instance_27, 0, 1, 2, false, new lib.к1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]}).wait(1));

	// Слой_2
	this.instance_28 = new lib.SGF2024();
	this.instance_28.setTransform(1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Az/rjMAn/AAAIAAXHMgn/AAAg");
	this.shape.setTransform(197.025,218.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF33").s().p("EB6YArmQgTgJgegTIgxgeQgjgRgQgKQgcgRgMgVQgMgUAHgRQADgJAKgFQAJgEAJAEQAGADAFAIIAJAOQAIALASAHIAhAJQATAHAdAUQAiAYANAGQAdAQApAHQAeAFAsAAQA9ABBogJQBYgHAzgOQA5gPBBgiQAogVBKgvQAbgRANgMQAUgSAFgVQADgKAAgTQAAgUABgIQADgQAJgLQALgMANACQAQABAIASQAHAOABAVQABAfgCATQgEAbgLAUQgOAYgrAeQhMA0hVArQg6AfgtANQg1AQhiAHQhbAGhNAAIgHABQhsAAg9gdgEiHXgU6IAA3IMAn/AAAIAAXIg");
	this.shape_1.setTransform(935.4781,425.9017);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_28}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(961,527.4,960,552.6);
// library properties:
lib.properties = {
	id: 'C12D9F0897444049B06E50E6591B8FCF',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png", id:"index_atlas_3"},
		{src:"images/index_atlas_4.png", id:"index_atlas_4"},
		{src:"sounds/sonud_click.mp3", id:"sonud_click"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C12D9F0897444049B06E50E6591B8FCF'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;