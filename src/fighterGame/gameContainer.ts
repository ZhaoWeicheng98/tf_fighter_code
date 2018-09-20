module fighterGame {
    export class gameContainer extends egret.DisplayObjectContainer {
        private stageW: number;

        private stageH: number;

        private btnStart: egret.Bitmap;

        private btnRestart: egret.Bitmap;

        private bg: fighterGame.bgMap;

        private moon: egret.Bitmap;

        private playerFighter: fighterGame.fighter;

        private playerBullets: fighterGame.bullet[] = [];

        private enemyFighters: fighterGame.fighter[] = [];

        private enemyFightersTimer: egret.Timer = new egret.Timer(800);

        private specialItemTimer: egret.Timer = new egret.Timer(8000);

        private enemyBullets: fighterGame.bullet[] = [];

        private specialItems: fighterGame.specialItem[] = [];

        private theIntroPanel: fighterGame.introPanel;

        private theScorePanel: fighterGame.scorePanel;

        private theBloodBar: fighterGame.bloodBar;

        private theShieldBar: fighterGame.bloodBar;

        private theScoreBar: fighterGame.scoreBar;

        private btnShare: egret.Bitmap;

        private theSharePanel: fighterGame.sharePanel;

        private myScore: number = 0;

        private particleSystem: particle.GravityParticleSystem;

        private particleState: number = 0;

        private _bgm:egret.Sound;
        private bgm: egret.SoundChannel;

        private _lastTime: number;

        public constructor() {
            super();
            this._lastTime = egret.getTimer();
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }

        private onAddToStage(event: egret.Event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        }

        private createGameScene(): void {
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;

            this.bg = new fighterGame.bgMap();
            this.addChild(this.bg);

            this.moon = fighterGame.createBitmapByName("moon_png");
            this.moon.x = this.moon.width / 2 + (this.stageW - this.moon.width) * Math.random();
            this.moon.y = this.moon.height / 2 + 10;
            this.addChild(this.moon);

            this.theIntroPanel = new fighterGame.introPanel();
            this.theIntroPanel.x = (this.stageW - this.theIntroPanel.width) / 2;
            this.theIntroPanel.y = (this.stageH - this.theIntroPanel.height) / 3;
            this.addChild(this.theIntroPanel);

            this.btnStart = fighterGame.createBitmapByName("start_png");
            this.btnStart.x = (this.stageW - this.btnStart.width) / 2;
            this.btnStart.y = (this.stageH - this.btnStart.height) * 0.6;
            this.btnStart.touchEnabled = true;
            this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameStart, this);
            this.addChild(this.btnStart);

            this.playerFighter = new fighterGame.fighter(RES.getRes("player_png"),150, "player", 1);
            this.playerFighter.y = this.stageH - this.playerFighter.height - 100;
            this.addChild(this.playerFighter);

            this.theBloodBar = new fighterGame.bloodBar(RES.getRes("bloodBar_png"), RES.getRes("bloodBarBg_png"), "bloodBar", 1);
            this.theBloodBar.x = 10;
            this.theBloodBar.y = 10;

            this.theShieldBar = new fighterGame.bloodBar(RES.getRes("shieldBar_png"), RES.getRes("bloodBarBg_png"), "shieldBar", 0);
            this.theShieldBar.x = this.theBloodBar.x;
            this.theShieldBar.y = 2 * this.theBloodBar.y + this.theBloodBar.height;

            this.theScoreBar = new fighterGame.scoreBar();
            this.theScoreBar.x = this.stageW - this.theBloodBar.x - this.theScoreBar.width;
            this.theScoreBar.y = this.theBloodBar.y;

            this.theScorePanel = new fighterGame.scorePanel();
            this.theScorePanel.x = (this.stageW - this.theScorePanel.width) / 2;
            this.theScorePanel.y = 200;

            this.theSharePanel = new fighterGame.sharePanel();

            this.btnRestart = fighterGame.createBitmapByName("restart_png")
            this.btnRestart.x = (this.stageW - this.btnRestart.width) / 2;
            this.btnRestart.y = (this.stageH - this.btnRestart.height) * 0.6;
            this.btnRestart.touchEnabled = true;
            this.btnRestart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameStart, this);

            this.btnShare = fighterGame.createBitmapByName("share_png");
            this.btnShare.x = (this.stageW - this.btnShare.width)/2;
            this.btnShare.y = this.btnRestart.y + this.btnRestart.height + 100;
            this.btnShare.touchEnabled = true;
            this.btnShare.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shareHandler,this);

            this._bgm = RES.getRes("bgm_mp3");

            var particalTexture = RES.getRes("meteorParticle_png");
            var particalConfig = RES.getRes("meteorParticle_json");
            this.particleSystem = new particle.GravityParticleSystem(particalTexture,particalConfig);

            this.preCreatedInstance();
        }

        private preCreatedInstance(): void {
            var i: number = 0;
            var objArr: any[] = [];
            for (i = 0; i < 20; i++) {
                var bullet = fighterGame.bullet.produce("mooncake_bullet_png");
                objArr.push(bullet);
            }
            for (i = 0; i < 20; i++) {
                bullet = objArr.pop();
                fighterGame.bullet.reclaim(bullet);
            }
            for (i = 0; i < 20; i++) {
                var bullet = fighterGame.bullet.produce("bug_bullet_png");
                objArr.push(bullet);
            }
            for (i = 0; i < 20; i++) {
                bullet = objArr.pop();
                fighterGame.bullet.reclaim(bullet);
            }
            for (i = 0; i < 20; i++) {
                var enemyFighter = fighterGame.fighter.produce("bug_png",
                    (400 + Number(this.myScore < 1000) * 200 + 200 * Math.random()),
                    (1 + Number(Math.random() > (1000 / (this.myScore + 1)))));
                objArr.push(enemyFighter);
            }
            for (i = 0; i < 20; i++) {
                bullet = objArr.pop();
                fighterGame.bullet.reclaim(bullet);
            }
            for (i = 0; i < 20; i++) {
                var health = fighterGame.specialItem.produce("health_png");
                objArr.push(health);
            }
            for (i = 0; i < 20; i++) {
                health = objArr.pop();
                fighterGame.specialItem.reclaim(health);
            }
            for (i = 0; i < 20; i++) {
                var shield = fighterGame.specialItem.produce("shield_png");
                objArr.push(shield);
            }
            for (i = 0; i < 20; i++) {
                shield = objArr.pop();
                fighterGame.specialItem.reclaim(shield);
            }
            for (i = 0; i < 20; i++) {
                var boost = fighterGame.specialItem.produce("boost_png");
                objArr.push(boost);
            }
            for (i = 0; i < 20; i++) {
                boost = objArr.pop();
                fighterGame.specialItem.reclaim(boost);
            }
            for (i = 0; i < 20; i++) {
                var star = fighterGame.specialItem.produce("star_png");
                objArr.push(star);
            }
            for (i = 0; i < 20; i++) {
                star = objArr.pop();
                fighterGame.specialItem.reclaim(star);
            }
        }

        private gameStart(): void {
            this.myScore = 0;
            if(this.theIntroPanel.parent == this)
                this.removeChild(this.theIntroPanel);
            if(this.btnStart.parent == this)
                this.removeChild(this.btnStart);
            if(this.btnShare.parent == this)
                this.removeChild(this.btnShare);
            this.playerFighter.bulletNumber = 1;
            this.playerFighter.boostedState = 1;
            this.theBloodBar.update(1);
            this.addChild(this.theBloodBar);
            this.theShieldBar.update(0);
            this.addChild(this.theShieldBar);
            this.theScoreBar.update(0);
            this.addChild(this.theScoreBar);
            this.bg.start();
            this.touchEnabled = true;
            this.addEventListener(egret.Event.ENTER_FRAME, this.gameViewUpdate, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchHandler, this);
            this.playerFighter.x = (this.stageW - this.playerFighter.width) / 2;
            this.playerFighter.startFire();
            this.playerFighter.blood = 10;
            this.playerFighter.shield = 0;
            this.playerFighter.addEventListener("createBullet", this.createBulletHandler, this);
            this.enemyFightersTimer.addEventListener(egret.TimerEvent.TIMER, this.createEnemyFighter, this);
            this.enemyFightersTimer.start();
            this.specialItemTimer.addEventListener(egret.TimerEvent.TIMER, this.createSpecialItem, this);
            this.specialItemTimer.start();
            if (this.theScorePanel.parent == this)
                this.removeChild(this.theScorePanel);
            if (this.btnRestart.parent == this)
                this.removeChild(this.btnRestart);
            this.particleState = 0;
            this.addChildAt(this.particleSystem,3);
            this.bgm = this._bgm.play();
        }

        private touchHandler(evt: egret.TouchEvent): void {
            var tx: number = evt.localX;
            tx = Math.max(0, tx);
            tx = Math.min(this.stageW - this.playerFighter.width, tx);
            this.playerFighter.x = tx;
        }

        private createBulletHandler(evt: egret.Event): void {
            var bullet: fighterGame.bullet;
            if (evt.target == this.playerFighter) {
                for (var i: number = 0; i < this.playerFighter.bulletNumber; i++) {
                    bullet = fighterGame.bullet.produce("mooncake_bullet_png");
                    bullet.x = this.playerFighter.x + (i % 2) * (-1) * (i / 2) * bullet.width;
                    bullet.y = this.playerFighter.y - 64;
                    this.addChildAt(bullet, this.numChildren - 1 - this.enemyFighters.length - this.specialItems.length);
                    this.playerBullets.push(bullet);
                }
            }
            else {
                var theFighter: fighterGame.fighter = evt.target;
                if (theFighter.bulletNumber == 1) {
                    bullet = fighterGame.bullet.produce("bug_bullet_png");
                    bullet.x = theFighter.x + 16;
                    bullet.y = theFighter.y + 64;
                    this.addChildAt(bullet, this.numChildren - 1 - this.enemyFighters.length - this.specialItems.length);
                    this.enemyBullets.push(bullet);
                }
                else {
                    for (var i: number = 0; i < theFighter.bulletNumber; i++) {
                        bullet = fighterGame.bullet.produce("bug_bullet_png");
                        bullet.x = (i == 0) ? theFighter.x : theFighter.x + 32;
                        bullet.y = theFighter.y + 64;
                        this.addChildAt(bullet, this.numChildren - 1 - this.enemyFighters.length - this.specialItems.length);
                        this.enemyBullets.push(bullet);
                    }
                }
            }
        }

        private createEnemyFighter(evt: egret.TimerEvent): void {
            var enemyFighter: fighterGame.fighter = fighterGame.fighter.produce("bug_png",
                (300 + Number(this.myScore < 1000) * 500 + 500 * Math.random()),
                (1 + Number(Math.random() > (1000 / (this.myScore + 1)))));
            enemyFighter.x = Math.random() * (this.stageW - enemyFighter.width);
            enemyFighter.y = -enemyFighter.height - Math.random() * 300;
            enemyFighter.addEventListener("createBullet", this.createBulletHandler, this);
            enemyFighter.startFire();
            this.addChildAt(enemyFighter, this.numChildren - 1);
            this.enemyFighters.push(enemyFighter);
        }

        private createSpecialItem(evt: egret.TimerEvent): void {
            var r: number = Math.random();
            var specialItem: fighterGame.specialItem;
            if (r <= 0.05) {
                specialItem = fighterGame.specialItem.produce("boost_png");
            }
            else if (r <= 0.3) {
                specialItem = fighterGame.specialItem.produce("shield_png");
            }
            else if (r <= 0.6 - Math.min(0.2, 0.2 * this.myScore / 1000)) {
                specialItem = fighterGame.specialItem.produce("health_png");
            }
            else {
                specialItem = fighterGame.specialItem.produce("star_png");
            }
            specialItem.x = Math.random() * (this.stageW - specialItem.width);
            specialItem.y = -specialItem.height - Math.random() * 300;
            this.addChildAt(specialItem, this.numChildren - 1 - this.enemyFighters.length);
            this.specialItems.push(specialItem);
        }

        private gameViewUpdate(evt: egret.Event): void {
            var nowTime: number = egret.getTimer();
            var fps: number = 1000 / (nowTime - this._lastTime);
            this._lastTime = nowTime;
            var speedOffset: number = 60 / fps;

            var i: number = 0;
            var bullet: fighterGame.bullet;
            var playerBulletsCount: number = this.playerBullets.length;
            for (i = 0; i < playerBulletsCount; i++) {
                bullet = this.playerBullets[i];
                {
                    if (bullet.y < -bullet.height) {
                        this.removeChild(bullet);
                        fighterGame.bullet.reclaim(bullet)
                        this.playerBullets.splice(i, 1);
                        i--;
                        playerBulletsCount--;
                    }
                    bullet.y -= 12 * this.playerFighter.boostedState * speedOffset;
                }
            }

            var theFighter: fighterGame.fighter;
            var enemyFighterCount: number = this.enemyFighters.length;
            for (i = 0; i < enemyFighterCount; i++) {
                theFighter = this.enemyFighters[i];
                if (theFighter.y > this.stage.stageHeight) {
                    this.removeChild(theFighter);
                    fighterGame.fighter.reclaim(theFighter);
                    theFighter.removeEventListener("createBullet", this.createBulletHandler, this);
                    theFighter.stopFire();
                    this.enemyFighters.splice(i, 1);
                    i--;
                    enemyFighterCount--;
                }
                theFighter.y += 4 * (1 + Math.min(1, this.myScore / 1000)) * speedOffset;
            }

            var enemyBulletsCount: number = this.enemyBullets.length;
            for (i = 0; i < enemyBulletsCount; i++) {
                bullet = this.enemyBullets[i];
                if (bullet.y > this.stage.stageHeight) {
                    this.removeChild(bullet);
                    fighterGame.bullet.reclaim(bullet);
                    this.enemyBullets.splice(i, 1);
                    i--;
                    enemyBulletsCount--;
                }
                bullet.y += 8 * (1 + Math.min(1, this.myScore / 1000)) * speedOffset;
            }

            var specialItemCount: number = this.specialItems.length;
            var specialItem: fighterGame.specialItem;
            for (i = 0; i < specialItemCount; i++) {
                specialItem = this.specialItems[i];
                if (specialItem.y > this.stage.height) {
                    this.removeChild(specialItem);
                    fighterGame.specialItem.reclaim(specialItem);
                    this.specialItems.splice(i, 1);
                    i--;
                    specialItemCount--;
                }
                specialItem.y += 6 * (1 + Math.min(1, this.myScore / 1000)) * speedOffset;
            }

            if (this.myScore >= 500 && this.particleState == 0)
            {
                this.particleSystem.start();
                this.particleState=1;
            }
            this.gameHitTest();
        }

        private gameHitTest(): void {
            var i: number, j: number;
            var bullet: fighterGame.bullet;
            var theFighter: fighterGame.fighter;
            var specialItem: fighterGame.specialItem;
            var playerBulletsCount: number = this.playerBullets.length;
            var enemyBulletsCount: number = this.enemyBullets.length;
            var enemyFighterCount: number = this.enemyFighters.length;
            var specialItemCount: number = this.specialItems.length;

            var delBullets: fighterGame.bullet[] = [];
            var delFighters: fighterGame.fighter[] = [];
            var delSpecialItems: fighterGame.specialItem[] = [];

            for (i = 0; i < playerBulletsCount; i++) {
                bullet = this.playerBullets[i];
                for (j = 0; j < enemyFighterCount; j++) {
                    theFighter = this.enemyFighters[j];
                    if (fighterGame.GameUtils.hitTest(theFighter, bullet)) {
                        theFighter.blood -= (3 - 2*(Math.min(1,this.myScore/1000)))*this.playerFighter.boostedState;
                        if (delBullets.indexOf(bullet) == -1)
                            delBullets.push(bullet);
                        if (theFighter.blood <= 0 && delFighters.indexOf(theFighter) == -1)
                            delFighters.push(theFighter);
                    }
                }
            }

            for (i = 0; i < enemyBulletsCount; i++) {
                bullet = this.enemyBullets[i];
                if (fighterGame.GameUtils.hitTest(this.playerFighter, bullet)) {
                    var dmg:number = 1 + (Math.random()>0.5?1:0) + 2*Number(this.myScore>=1000)
                    if (this.playerFighter.shield >= dmg) {
                        this.playerFighter.shield -= dmg;
                        this.theShieldBar.update(this.playerFighter.shield / 5);
                    }
                    else if (this.playerFighter.shield > 0)
                    {
                        this.playerFighter.shield = 0;
                        this.theShieldBar.update(this.playerFighter.shield / 5);
                    }
                    else {
                        this.playerFighter.blood -= dmg;
                        this.theBloodBar.update(this.playerFighter.blood / 10);
                    }
                    if (delBullets.indexOf(bullet) == -1)
                        delBullets.push(bullet);
                }
            }

            for (i = 0; i < enemyFighterCount; i++) {
                theFighter = this.enemyFighters[i];
                if (fighterGame.GameUtils.hitTest(theFighter, this.playerFighter)) {
                    if (this.playerFighter.shield > 0) {
                        this.playerFighter.shield = 0;
                        this.theShieldBar.update(0);
                    }
                    else {
                        this.playerFighter.blood = 0;
                        this.theBloodBar.update(0);
                    }
                    theFighter.blood = 0;
                    if(delFighters.indexOf(theFighter)==-1)
                        delFighters.push(theFighter);
                }
            }

            for (i = 0; i < specialItemCount; i++) {
                specialItem = this.specialItems[i];
                if (fighterGame.GameUtils.hitTest(specialItem, this.playerFighter)) {
                    if (specialItem.textureName == "boost_png") {
                        if (this.playerFighter.bulletNumber == 1) {
                            this.playerFighter.bulletNumber += 2;
                        }
                        else {
                            this.playerFighter.boostedState += 0.1;
                        }
                    }
                    else if (specialItem.textureName == "health_png") {
                        if (this.playerFighter.blood < 10) {
                            this.playerFighter.blood += 1;
                            this.theBloodBar.update(this.playerFighter.blood / 10);
                        }
                    }
                    else if (specialItem.textureName == "shield_png") {
                        if (this.playerFighter.shield < 5) {
                            this.playerFighter.shield += 1;
                            this.theShieldBar.update(this.playerFighter.shield / 5);
                        }
                    }
                    else if (specialItem.textureName == "star_png") {
                        this.myScore += 50;
                        this.theScoreBar.update(this.myScore);
                    }
                    if(delSpecialItems.indexOf(specialItem) == -1)
                        delSpecialItems.push(specialItem);
                }
            }

            if (this.playerFighter.blood <= 0) {
                this.gameStop();
            }
            else {
                while (delBullets.length > 0) {
                    bullet = delBullets.pop();
                    this.removeChild(bullet);
                    if (bullet.textureName == "mooncake_bullet_png")
                        this.playerBullets.splice(this.playerBullets.indexOf(bullet), 1);
                    else
                        this.enemyBullets.splice(this.enemyBullets.indexOf(bullet), 1);
                    fighterGame.bullet.reclaim(bullet);
                }
                this.myScore += delFighters.length * 5;
                this.theScoreBar.update(this.myScore);
                while (delFighters.length > 0) {
                    theFighter = delFighters.pop();
                    theFighter.stopFire();
                    theFighter.removeEventListener("createBullet", this.createBulletHandler, this);
                    this.removeChild(theFighter);
                    this.enemyFighters.splice(this.enemyFighters.indexOf(theFighter), 1);
                    fighterGame.fighter.reclaim(theFighter);
                }
                this.myScore += delSpecialItems.length;
                this.theScoreBar.update(this.myScore);
                while (delSpecialItems.length > 0) {
                    specialItem = delSpecialItems.pop();
                    this.removeChild(specialItem);
                    this.specialItems.splice(this.specialItems.indexOf(specialItem), 1);
                    fighterGame.specialItem.reclaim(specialItem);
                }
            }
        }

        private gameStop(): void {
            this.addChild(this.btnRestart);
            this.bg.pause();
            if(this.particleState == 1)
            {
                this.particleSystem.stop();
            }
            this.removeEventListener(egret.Event.ENTER_FRAME, this.gameViewUpdate, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchHandler, this);
            this.playerFighter.stopFire();
            this.playerFighter.removeEventListener("createBullet", this.createBulletHandler, this);
            this.enemyFightersTimer.removeEventListener(egret.TimerEvent.TIMER, this.createEnemyFighter, this);
            this.enemyFightersTimer.stop();
            this.specialItemTimer.removeEventListener(egret.TimerEvent.TIMER, this.createSpecialItem, this);
            this.specialItemTimer.stop();
            
            var bullet: fighterGame.bullet;
            while (this.playerBullets.length > 0)
            {
                bullet = this.playerBullets.pop();
                this.removeChild(bullet);
                fighterGame.bullet.reclaim(bullet);
            }
            while (this.enemyBullets.length > 0) {
                bullet = this.enemyBullets.pop();
                this.removeChild(bullet);
                fighterGame.bullet.reclaim(bullet);
            }

            var theFighter: fighterGame.fighter;
            while (this.enemyFighters.length > 0) {
                theFighter = this.enemyFighters.pop();
                theFighter.stopFire();
                theFighter.removeEventListener("createBullet", this.createBulletHandler, this);
                this.removeChild(theFighter);
                fighterGame.fighter.reclaim(theFighter);
            }

            var specialItem: fighterGame.specialItem;
            while (this.specialItems.length > 0) {
                specialItem = this.specialItems.pop();
                this.removeChild(specialItem);
                fighterGame.specialItem.reclaim(specialItem);
            }

            this.theScorePanel.showScore(this.myScore);
            this.addChild(this.theScorePanel);

            
            this.addChild(this.btnShare);
            
            this.bgm.stop();
        }

        private shareHandler():void
        {
            this.theSharePanel.show(this.myScore);
            var renderTexture = new egret.RenderTexture();
            renderTexture.drawToTexture(this.theSharePanel);//渲染到临时画布
            var divImage = document.getElementById("divImage");//获取DIV
            var shareImage: HTMLImageElement = document.getElementById("shareImage") as HTMLImageElement;//获取Image标签
            shareImage.src = renderTexture.toDataURL('image/jpeg');//把数据赋值给Image
            divImage.style.display = "block";//显示DIV
        }
    }
}