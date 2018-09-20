module fighterGame
{
    export class specialItem extends egret.Bitmap
    {
        private static cacheDict:Object = {};

        public static produce(textureName:string):fighterGame.specialItem
        {
            if(fighterGame.specialItem.cacheDict[textureName]==null)
                fighterGame.specialItem.cacheDict[textureName] = [];
            var dict:fighterGame.specialItem[] = fighterGame.specialItem.cacheDict[textureName];
            var theSpecialItem:fighterGame.specialItem;
            if(dict.length>0)
            {
                theSpecialItem = dict.pop();
            }
            else
            {
                theSpecialItem = new fighterGame.specialItem(RES.getRes(textureName),textureName);
            }
            return theSpecialItem;
        }

        public static reclaim(theSpecialItem:fighterGame.specialItem):void
        {
            var textureName:string = theSpecialItem.textureName;
            if(fighterGame.specialItem.cacheDict[textureName]==null)
                fighterGame.specialItem.cacheDict[textureName] = [];
            var dict:fighterGame.specialItem[] = fighterGame.specialItem.cacheDict[textureName];
            if(dict.indexOf(theSpecialItem)==-1)
                dict.push(theSpecialItem);
        }

        public textureName:string;

        public constructor(texture:egret.Texture,textureName:string)
        {
            super(texture);
            this.textureName = textureName;
        }
    }
}