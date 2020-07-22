module objects {
    export class Player extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "player");
            this.Start();
        }

        public Start():void {
            this.x = 320;
            this.y = 700;
        }
        public Update():void {
            this.Move();
            this.CheckBound();
        }
        public Reset():void {}
        public Move():void {
            // I need a reference to the "STAGE" createjs object to get mouse position
            // this.x = objects.Game.stage.mouseX;
            // This will eventually be replaced with keyboard input
            if(managers.Game.keyboardManager.moveLeft)
            {
                this.x -= 7.5;
            }
            if(managers.Game.keyboardManager.moveRight)
            {
                this.x += 7.5;
            }
            if(managers.Game.keyboardManager.shoot)
            {
                
            }
            // Maybe xbox controller....maybe...
        }
        public CheckBound():void {
            // Right boundary
            if(this.x >= 640 - this.halfW)
            {
                // I have collided with the right boundary
                this.x = 640 - this.halfW;
            }
            // Left boundary
            if(this.x <= this.halfW) {
                this.x = this.halfW;
            }
        }
    }
}