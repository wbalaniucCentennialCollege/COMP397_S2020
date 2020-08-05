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
var scenes;
(function (scenes) {
    var PlayScene = (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene() {
            var _this = _super.call(this) || this;
            _this.isExploding = false;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            console.log("Play scene start");
            // Inintialize our variables
            this.background = new objects.Background();
            this.player = new objects.Player();
            // this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array();
            this.enemyNum = 5;
            for (var i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy();
            }
            this.scoreBoard = new managers.Scoreboard();
            this.scoreBoard.x = 10;
            this.scoreBoard.y = 10;
            // Instantiate Sound
            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; // Loop infinitely
            this.backgroundMusic.volume = 0.2;
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            // this.background.Update();
            this.player.Update();
            // this.enemy.Update();
            this.enemies.forEach(function (e) {
                e.Update();
                _this.player.isDead = managers.Collision.Check(_this.player, e);
                if (_this.player.isDead && !_this.isExploding) {
                    // If the player is dead and hasn't exploded...explode!
                    // Disable music
                    _this.backgroundMusic.stop();
                    // Create the explosion
                    _this.explosion = new objects.Explosion(_this.player.x, _this.player.y);
                    _this.explosion.on("animationend", _this.handleExplosion);
                    _this.addChild(_this.explosion);
                    _this.isExploding = true;
                    _this.removeChild(_this.player);
                }
            });
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            this.addChild(this.player);
            // this.addChild(this.enemy);
            this.enemies.forEach(function (e) {
                _this.addChild(e);
            });
            this.addChild(this.scoreBoard);
        };
        PlayScene.prototype.handleExplosion = function () {
            this.stage.removeChild(this.explosion);
            this.isExploding = false;
            managers.Game.currentScene = config.Scene.OVER;
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map