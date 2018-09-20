module fighterGame
{
    export class bullet extends egret.Bitmap
    {
        private static cacheDict:Object = {};

        public static produce(textureName:string):fighterGame.bullet
        {
            if(fighterGame.bullet.cacheDict[textureName]==null)
                fighterGame.bullet.cacheDict[textureName] = [];
            var dict:fighterGame.bullet[] = fighterGame.bullet.cacheDict[textureName];
            var theBullet:fighterGame.bullet;
            if(dict.length>0)
            {
                theBullet = dict.pop();
            }
            else
            {
                theBullet = new fighterGame.bullet(RES.getRes(textureName),textureName);
            }
            return theBullet;
        }

        public static reclaim(theBullet:fighterGame.bullet):void
        {
            var textureName:string = theBullet.textureName;
            if(fighterGame.bullet.cacheDict[textureName]==null)
                fighterGame.bullet.cacheDict[textureName] = [];
            var dict:fighterGame.bullet[] = fighterGame.bullet.cacheDict[textureName];
            if(dict.indexOf(theBullet)==-1)
                dict.push(theBullet);
        }

        public textureName:string;

        public constructor(texture:egret.Texture,textureName: string)
        {
            super(texture);
            this.textureName = textureName;
        }
    }
}