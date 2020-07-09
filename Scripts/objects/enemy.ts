module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "enemy");
            this.Start();
        }
        // Methods
        public Start():void {
            this.x = 320;
            this.y = -50;
        }
        public Update():void {
            this.Move();
            this.CheckBound();
        }
        public Reset():void {
            // Empty.....for now.
        }
        public Move():void {
            this.y += 5;
        }
        public CheckBound():void {
            if(this.y >= 900 + this.halfH) {
                this.y = -50;
            }
        }
    }
}