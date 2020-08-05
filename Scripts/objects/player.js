var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        // Constructor
        function Player() {
            var _this = _super.call(this, "player") || this;
            _this.laserCount = 0;
            _this.Start();
            return _this;
        }
        Player.prototype.Start = function () {
            this.x = 320;
            this.y = 700;
            this.isDead = false;
            this.Lasers = new Array();
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound();
            this.LaserFire();
            this.Lasers.forEach(function (laser) {
                laser.Update();
            });
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            // I need a reference to the "STAGE" createjs object to get mouse position
            // this.x = objects.Game.stage.mouseX;
            // This will eventually be replaced with keyboard input
            if (managers.Game.keyboardManager.moveLeft) {
                this.x -= 7.5;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.x += 7.5;
            }
            if (managers.Game.keyboardManager.shoot) {
            }
            // Maybe xbox controller....maybe...
        };
        Player.prototype.CheckBound = function () {
            // Right boundary
            if (this.x >= 640 - this.halfW) {
                // I have collided with the right boundary
                this.x = 640 - this.halfW;
            }
            // Left boundary
            if (this.x <= this.halfW) {
                this.x = this.halfW;
            }
        };
        Player.prototype.LaserFire = function () {
            var ticker = createjs.Ticker.getTicks();
            if (!this.isDead && managers.Game.keyboardManager.shoot && (ticker % 10 == 0)) {
                this.laserSpawn = new math.Vec2(this.x, this.y - this.halfH);
                var laser = new objects.Laser();
                laser.x = this.laserSpawn.x;
                laser.y = this.laserSpawn.y;
                this.Lasers[this.laserCount] = laser;
                managers.Game.currentSceneObject.addChild(laser);
                this.laserCount++;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map