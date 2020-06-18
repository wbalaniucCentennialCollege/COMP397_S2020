// Immediate Invoked Anonymous Function
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickMeButton;
    var assetManager;
    var assetManifest;
    assetManifest = [
        { id: "clickMeButton", src: "./Assets/ClickMeButton.png" }
    ];
    function Init() {
        console.log("Initializing Start");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
        // Start();
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update();
        // Movement here
        // helloLabel.rotation += 5;
    }
    function clickMeButtonClicked() {
        helloLabel.text = "Clicked";
        console.log("I am clicked!");
    }
    function Main() {
        console.log("Game Start");
        // Label instantiation
        helloLabel = new objects.Label("Hello World", "40px", "Consolas", "#000000", 320, 240, true);
        // Button instantiation
        clickMeButton = new objects.Button(assetManager, "clickMeButton", 320, 340);
        clickMeButton.regX = 95;
        clickMeButton.regY = 24.5;
        clickMeButton.on("click", clickMeButtonClicked);
        stage.addChild(helloLabel);
        stage.addChild(clickMeButton);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map