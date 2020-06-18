module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private welcomeLabel: objects.Label;
        private startButton: objects.Button;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        // Methods
        public Start():void {
            // Initialize our objects for this scene
            this.welcomeLabel = new objects.Label("Welcome to School!", "60px", "Consolas", "#000000", 320, 240, true);

            // NOTE: PreloadJS manifest id
            this.startButton = new objects.Button(this.assetManager, "nextButton", 320, 300);
            this.Main();
        }

        public Update():void {}

        public Main():void {
            // Add items to the scene
            this.addChild(this.welcomeLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        }

        private startButtonClick():void {
            // Change from START to GAME scene
            objects.Game.currentScene = config.Scene.GAME;
        }
    }
}