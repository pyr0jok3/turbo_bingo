(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"sgf_bingo_2024_atlas_1", frames: [[0,0,1920,1080]]},
		{name:"sgf_bingo_2024_atlas_2", frames: [[0,0,1920,1080]]},
		{name:"sgf_bingo_2024_atlas_3", frames: [[0,0,1920,1080]]},
		{name:"sgf_bingo_2024_atlas_4", frames: [[0,0,1920,1080]]}
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



(lib.sleep_1 = function() {
	this.initialize(ss["sgf_bingo_2024_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sleep_2 = function() {
	this.initialize(ss["sgf_bingo_2024_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sleep_3 = function() {
	this.initialize(ss["sgf_bingo_2024_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.TGA2024 = function() {
	this.initialize(ss["sgf_bingo_2024_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.moveto = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00FF00").s().p("AwJBsIAAjXMAgTAAAIAADXg");
	this.shape.setTransform(103.35,10.775);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206.7,21.6);


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
(lib.TGA2024bingo = function(mode,startPosition,loop,reversed) {
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
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
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
		
		/* Нажмите для перехода к кадру и остановки воспроизведения
		При нажатии на указанный экземпляр символа точка воспроизведения перемещается на кадр, указанный на временной шкале, а воспроизведение останавливается.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		
		Инструкции:
		1. Замените цифру 5 в коде ниже на номер кадра, с которого продолжится воспроизведение после нажатия на экземпляр символа.
		2. Номера кадров в EaselJS начинаются с 0, а не с 1
		*/
		
		
		
		/* Нажмите для перехода к кадру и остановки воспроизведения
		При нажатии на указанный экземпляр символа точка воспроизведения перемещается на кадр, указанный на временной шкале, а воспроизведение останавливается.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		
		Инструкции:
		1. Замените цифру 5 в коде ниже на номер кадра, с которого продолжится воспроизведение после нажатия на экземпляр символа.
		2. Номера кадров в EaselJS начинаются с 0, а не с 1
		*/
		
		
		this.button_2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop(1);
		}
		
		
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
		
		
		
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// counter
	this.button_2 = new lib.moveto();
	this.button_2.name = "button_2";
	this.button_2.setTransform(1816.05,11.1,1,1,0,0,0,103.4,10.8);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.moveto(), 3);

	this.instance = new lib.Символ1();
	this.instance.setTransform(931.55,923.8,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(728.5,923.75,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(530.05,923.65,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_3 = new lib.Символ1();
	this.instance_3.setTransform(331.5,923.75,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_4 = new lib.Символ1();
	this.instance_4.setTransform(127,920.7,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(931.55,732.7,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_6 = new lib.Символ1();
	this.instance_6.setTransform(731.65,727.9,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_7 = new lib.Символ1();
	this.instance_7.setTransform(531.6,731.05,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_8 = new lib.Символ1();
	this.instance_8.setTransform(333.15,731.15,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_9 = new lib.Символ1();
	this.instance_9.setTransform(125.65,732.65,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_10 = new lib.Символ1();
	this.instance_10.setTransform(933.2,534.05,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_11 = new lib.Символ1();
	this.instance_11.setTransform(730.1,532.45,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_12 = new lib.Символ1();
	this.instance_12.setTransform(334.75,534.15,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_13 = new lib.Символ1();
	this.instance_13.setTransform(122.45,534.15,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_14 = new lib.Символ1();
	this.instance_14.setTransform(728.65,333.95,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_15 = new lib.Символ1();
	this.instance_15.setTransform(120.9,334.05,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_16 = new lib.Символ1();
	this.instance_16.setTransform(331.5,332.55,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_17 = new lib.Символ1();
	this.instance_17.setTransform(531.6,332.4,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_18 = new lib.Символ1();
	this.instance_18.setTransform(932.9,335.1,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_19 = new lib.Символ1();
	this.instance_19.setTransform(931.95,133.25,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_20 = new lib.Символ1();
	this.instance_20.setTransform(727.9,134.15,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_21 = new lib.Символ1();
	this.instance_21.setTransform(528.85,134.8,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_22 = new lib.Символ1();
	this.instance_22.setTransform(125.55,133.85,0.5692,0.5995,0,0,0,105,99.1);

	this.instance_23 = new lib.Символ1();
	this.instance_23.setTransform(334.1,135.75,0.5692,0.5995,0,0,0,105,99.1);

	this.total = new cjs.Text("", "73px 'Impact'", "#FFFFFF");
	this.total.name = "total";
	this.total.textAlign = "center";
	this.total.lineHeight = 91;
	this.total.lineWidth = 93;
	this.total.parent = this;
	this.total.setTransform(1606.8,901.2);

	this.but_cnt = new lib.but_cnt();
	this.but_cnt.name = "but_cnt";
	this.but_cnt.setTransform(1441.25,938.2,1,1,0,0,0,150,63);
	new cjs.ButtonHelper(this.but_cnt, 0, 1, 2, false, new lib.but_cnt(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.but_cnt},{t:this.total},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.button_2}]}).to({state:[]},1).wait(1));

	// Слой_2
	this.instance_24 = new lib.TGA2024();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF66").s().p("AvoByIAAjjIfRAAIAADjg");
	this.shape.setTransform(1812.95,11.775);

	this.text = new cjs.Text("НУ И НАХУЯ ТЫ СЮДА НАЖАЛ?", "96px 'Impact'");
	this.text.textAlign = "center";
	this.text.lineHeight = 119;
	this.text.lineWidth = 1499;
	this.text.parent = this;
	this.text.setTransform(942.8,442.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_24}]}).to({state:[{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,960,540);
// library properties:
lib.properties = {
	id: 'C12D9F0897444049B06E50E6591B8FCF',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/sgf_bingo_2024_atlas_1.png", id:"sgf_bingo_2024_atlas_1"},
		{src:"images/sgf_bingo_2024_atlas_2.png", id:"sgf_bingo_2024_atlas_2"},
		{src:"images/sgf_bingo_2024_atlas_3.png", id:"sgf_bingo_2024_atlas_3"},
		{src:"images/sgf_bingo_2024_atlas_4.png", id:"sgf_bingo_2024_atlas_4"},
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