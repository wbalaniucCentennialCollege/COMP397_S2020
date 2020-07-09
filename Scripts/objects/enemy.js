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
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        // Variables
        // Constructor
        function Enemy(assetManager) {
            var _this = _super.call(this, assetManager, "enemy") || this;
            _this.Start();
            return _this;
        }
        // Methods
        Enemy.prototype.Start = function () {
            this.x = 320;
            this.y = -50;
        };
        Enemy.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        Enemy.prototype.Reset = function () {
            // Empty.....for now.
        };
        Enemy.prototype.Move = function () {
            this.y += 5;
        };
        Enemy.prototype.CheckBound = function () {
            if (this.y >= 900 + this.halfH) {
                this.y = -50;
            }
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map