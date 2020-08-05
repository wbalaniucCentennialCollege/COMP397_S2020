// Immediate Invoked Anonymous Function

(function() {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;

    let assetManager:createjs.LoadQueue;
    let assetManifest: any[];

    // Store current scene information
    let currentScene:objects.Scene;
    let currentState:number;

    let keyboardManager: managers.Keyboard;

    let textureAtlasData: any;
    let textureAtlas: createjs.SpriteSheet;

    textureAtlasData = {
        "images": [
            ""
        ],
        
        "framerate": 20,
        "frames": [
            [19, 1, 39, 31, 0, 0, 0],
            [153, 154, 98, 85, 0, 0, 0],
            [101, 1, 36, 36, 0, 0, 0],
            [112, 90, 68, 62, 0, 0, 0],
            [1, 90, 66, 60, 0, 0, 0],
            [182, 90, 68, 62, 0, 0, 0],
            [1, 154, 74, 62, 0, 0, 0],
            [77, 154, 74, 62, 0, 0, 0],
            [1, 1, 16, 21, 0, 0, 0],
            [60, 1, 39, 31, 0, 0, 0],
            [69, 90, 41, 61, 0, 0, 0],
            [1, 39, 190, 49, 0, 0, 0]
        ],

        "animations": {
            "backButton": { "frames": [0] },
            "enemy": { "frames": [1] },
            "explosion" : { 
                "frames": [2,7],
                "speed" : 0.1
            },
            "laser" : { "frames" : [8]},
            "nextButton": { "frames": [9]},
            "player": { "frames": [10]},
            "startButton": { "frames": [11]}
        },
    };

    assetManifest = [
        {id: "textureAtlas", src:"./Assets/Sprites/textureAtlas2.png"},
        {id:"background", src:"./Assets/background.png"},
        {id:"explosion", src:"./Assets/Audio/explode.wav"},
        {id:"start_music", src:"./Assets/Audio/Title Screen.wav"},
        {id:"play_music", src:"./Assets/Audio/Level 1.wav"}
    ];

    function Init() {
        console.log("Initializing Start");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }

    function Start() {
        console.log("Starting Application...");

        textureAtlasData.images = [ assetManager.getResult("textureAtlas")];
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);

        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);

        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);

        // Set up default game states -- State Machine
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;

        keyboardManager = new managers.Keyboard;
        managers.Game.keyboardManager = keyboardManager;

        managers.Game.assetManager = assetManager;
        managers.Game.textureAtlas = textureAtlas;

        Main();
    }

    function Update() {
        // Has my state changed since the last check?
        if(currentState != managers.Game.currentScene)
        {
            console.log("Changing scenes to " + managers.Game.currentScene);
            Main();
        }

        currentScene.Update();
        stage.update();
    }


    function Main() {
        console.log("Game Start");

        // Finite State Machine
        switch(managers.Game.currentScene)
        {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene();
                stage.addChild(currentScene);
            break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene();
                stage.addChild(currentScene);
            break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene();
                stage.addChild(currentScene);
            break;
        }

        currentState = managers.Game.currentScene;
        managers.Game.currentSceneObject = currentScene;
    }

    window.onload = Init;
})();