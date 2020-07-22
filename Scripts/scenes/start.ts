module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private welcomeLabel: objects.Label;
        private startButton: objects.Button;
        private backgroundMusic: createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        // Methods
        public Start():void {
            // Initialize our objects for this scene
            this.background = new objects.Background(this.assetManager);

            this.welcomeLabel = new objects.Label("Welcome to School!", "60px", "Consolas", "#FFFFFF", 320, 240, true);

            // NOTE: PreloadJS manifest id
            this.startButton = new objects.Button(this.assetManager, "nextButton", 320, 300);

            // Instantiate Sound
            this.backgroundMusic = createjs.Sound.play("start_music");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 0.2;

            this.Main();
        }

        public Update():void {
            // this.background.Update();
        }

        public Main():void {
            // Add items to the scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        }

        private startButtonClick():void {
            // Change from START to GAME scene
            managers.Game.currentScene = config.Scene.GAME;
        }
    }
}