module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private player:objects.Player;
        // private enemy:objects.Enemy;
        private enemies:objects.Enemy[];
        private enemyNum:number;
        private scoreBoard:managers.Scoreboard;

        private backgroundMusic:createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        public Start():void {
            console.log("Play scene start");
            // Inintialize our variables
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            // this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 5;
            for(let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
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
        }

        public Update():void {
            // this.background.Update();
            this.player.Update();
            // this.enemy.Update();
            this.enemies.forEach(e => {
                e.Update();
                managers.Collision.Check(this.player, e);
            })
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.player);
            // this.addChild(this.enemy);
            this.enemies.forEach(e => {
                this.addChild(e);
            });
            this.addChild(this.scoreBoard);
        }
    }
}