module fighterGame
{
    export class bloodBar extends egret.DisplayObjectContainer
    {
        private emptyBar:egret.Bitmap;

        private fullBar:egret.Bitmap;

        private theMask:egret.Shape;

        private typeName:string;

        public constructor(textureEmptyBar:egret.Texture,textureFullBar:egret.Texture,typeName:string,initValue:number)
        {
            super();
            this.emptyBar = new egret.Bitmap(textureEmptyBar);
            this.addChild(this.emptyBar);
            this.fullBar = new egret.Bitmap(textureFullBar);
            var textureW:number = this.fullBar.width;
            var textureH:number = this.fullBar.height;
            this.theMask = new egret.Shape();
            this.theMask.graphics.beginFill(0xFFFFFF);
            this.theMask.graphics.drawRect(initValue*textureW,0,(1-initValue)*textureW,textureH);
            this.theMask.graphics.endFill();
            this.fullBar.mask = this.theMask;
            this.addChild(this.fullBar);
            this.addChild(this.theMask);
            this.typeName = typeName;
        }

        public update(value:number):void
        {
            var textureW:number = this.fullBar.width;
            var textureH:number = this.fullBar.height;
            this.theMask.graphics.clear();
            this.theMask.graphics.beginFill(0xFFFFFF);
            this.theMask.graphics.drawRect(value*textureW,0,(1-value)*textureW,textureH);
            this.theMask.graphics.endFill();
        }
    }
}