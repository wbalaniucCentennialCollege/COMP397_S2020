module objects {
    export class Button extends objects.GameObject {
        // Variables
        // Constructor
        constructor(imageString:string, x:number = 0, y:number = 0) {
            super(imageString);

            // Default position
            this.x = x;
            this.y = y;

            // Set up event handlers
            this.on("mouseover", this.mouseOver);
            this.on("mouseout", this.mouseOut);
        }
        // Methods
        // Event Handlers
        private mouseOver():void {
            this.alpha = 0.7;
        }

        private mouseOut():void {
            this.alpha = 1.0;
        }
    }
}