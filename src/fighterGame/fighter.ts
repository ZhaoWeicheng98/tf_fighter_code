module fighterGame
{
    export class fighter extends egret.DisplayObjectContainer
    {
        private static cacheDict:Object = {};

        public static produce(textureName:string,fireDelay:number,bulletNumber:number):fighterGame.fighter
        {
            if(fighterGame.fighter.cacheDict[textureName]==null)
                fighterGame.fighter.cacheDict[textureName] = [];
            var dict:fighterGame.fighter[] = fighterGame.fighter.cacheDict[textureName];
            var theFighter:fighterGame.fighter;
            if(dict.length>0)
            {
                theFighter = dict.pop();
            }
            else
            {
                theFighter = new fighterGame.fighter(RES.getRes(textureName),fireDelay,textureName,bulletNumber);
            }
            theFighter.blood = 10;
            theFighter.shield = 0;
            theFighter.bulletNumber = bulletNumber;
            return theFighter;
        }

        public static reclaim(theFighter:fighterGame.fighter):void
        {
            var textureName:string = theFighter.textureName;
            if(fighterGame.fighter.cacheDict[textureName]==null)
                fighterGame.fighter.cacheDict[textureName] = [];
            var dict:fighterGame.fighter[] = fighterGame.fighter.cacheDict[textureName];
            if(dict.indexOf(theFighter)==-1)
                dict.push(theFighter);
        }

        private bmp:egret.Bitmap;

        private fireDelay:number;

        private fireTimer:egret.Timer;

        public blood:number = 10;

        public shield:number = 0;

        public bulletNumber:number = 1;

        public textureName:string;

        public boostedState:number = 1;

        public constructor(texture:egret.Texture,fireDelay:number,textureName:string,bulletNumber:number)
        {
            super();
            this.fireDelay = fireDelay;
            this.bmp = new egret.Bitmap(texture);
            this.textureName = textureName;
            this.addChild(this.bmp);
            this.fireTimer = new egret.Timer(fireDelay);
            this.fireTimer.addEventListener(egret.TimerEvent.TIMER,this.createBullet,this);
            this.bulletNumber = bulletNumber;
        }

        public startFire():void
        {
            this.fireTimer.start();
        }

        public stopFire():void
        {
            this.fireTimer.stop();
        }

        private createBullet(evt:egret.TimerEvent):void
        {
            this.dispatchEventWith("createBullet");
        }
    }
}