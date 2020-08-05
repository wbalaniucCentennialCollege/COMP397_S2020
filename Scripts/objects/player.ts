module objects {
    export class Player extends objects.GameObject {
        // Variables
        private laserSpawn:math.Vec2;
        public Lasers:objects.Laser[];
        public laserCount:number = 0;

        public isDead:boolean;
        // Constructor
        constructor() {
            super("player");
            this.Start();
        }

        public Start():void {
            this.x = 320;
            this.y = 700;
            this.isDead = false;
            this.Lasers = new Array<objects.Laser>();
        }
        public Update():void {
            this.Move();
            this.CheckBound();
            this.LaserFire();

            this.Lasers.forEach(laser => {
                laser.Update();
            });
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

        public LaserFire():void {

            let ticker:number = createjs.Ticker.getTicks();

            if(!this.isDead && managers.Game.keyboardManager.shoot && (ticker % 10 == 0))
            {
                this.laserSpawn = new math.Vec2(this.x, this.y - this.halfH);
                let laser = new objects.Laser();
                laser.x = this.laserSpawn.x;
                laser.y = this.laserSpawn.y;
                this.Lasers[this.laserCount] = laser;
                managers.Game.currentSceneObject.addChild(laser);
                this.laserCount++;
            }
        }
    }
}