module objects {
    export class Laser extends objects.GameObject {
        // Variables
        // Constructor
        constructor()
        {
            super("laser");
            this.Start();
        }
        // Methods
        public Start():void {
            this.speedX = 0;
            this.speedY = -10;

            this.Reset();
        }

        public Update():void {
            this.Move();
        }

        public Reset():void {
            this.x = -5000;
            this.y = -5000;
        }

        public Move():void {
            this.y += this.speedY;
        }

        public Main():void {}
        public CheckBounds():void {}
    }
}