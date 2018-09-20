module fighterGame
{
    export class bgMap extends egret.DisplayObjectContainer
    {
        private bmpRef:egret.Bitmap[];

        private rowCount:number;

        private stageW:number;

        private stageH:number;

        private textureHeight:number;

        private rollSpeed:number = 2;

        public constructor()
        {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        }

        private onAddToStage(event:egret.Event)
        {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            var texture:egret.Texture = RES.getRes("background_png");
            this.textureHeight = texture.textureHeight;
            this.rowCount = Math.ceil(this.stageH/this.textureHeight)+1;
            this.bmpRef = [];
            for(var i:number = 0;i<this.rowCount;i++)
            {
                var bgBmp:egret.Bitmap = fighterGame.createBitmapByName("background_png");
                bgBmp.y = this.textureHeight*i-(this.textureHeight*this.rowCount-this.stageH);
                this.bmpRef.push(bgBmp);
                this.addChild(bgBmp);
            }
        }

        public start():void
        {
            this.removeEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this);
            this.addEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this);
        }

        private enterFrameHandler(event:egret.Event):void
        {
            for(var i:number = 0;i<this.rowCount;i++)
            {
                var bgBmp:egret.Bitmap = this.bmpRef[i];
                bgBmp.y+=this.rollSpeed;

                if(bgBmp.y > this.stageH)
                {
                    bgBmp.y = this.bmpRef[0].y - this.textureHeight;
                    this.bmpRef.pop();
                    this.bmpRef.unshift(bgBmp);
                }
            }
        }

        public pause():void
        {
            this.removeEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this);
        }
    }
}