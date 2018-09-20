var __reflect=this&&this.__reflect||function(e,t,i){e.__class__=t,i?i.push(t):i=[t],e.__types__=e.__types__?i.concat(e.__types__):i},__extends=this&&this.__extends||function(e,t){function i(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);i.prototype=t.prototype,e.prototype=new i},__awaiter=this&&this.__awaiter||function(e,t,i,r){return new(i||(i=Promise))(function(h,a){function s(e){try{l(r.next(e))}catch(t){a(t)}}function n(e){try{l(r["throw"](e))}catch(t){a(t)}}function l(e){e.done?h(e.value):new i(function(t){t(e.value)}).then(s,n)}l((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function i(e){return function(t){return r([e,t])}}function r(i){if(h)throw new TypeError("Generator is already executing.");for(;l;)try{if(h=1,a&&(s=a[2&i[0]?"return":i[0]?"throw":"next"])&&!(s=s.call(a,i[1])).done)return s;switch(a=0,s&&(i=[0,s.value]),i[0]){case 0:case 1:s=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,a=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(s=l.trys,!(s=s.length>0&&s[s.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){l.label=i[1];break}if(6===i[0]&&l.label<s[1]){l.label=s[1],s=i;break}if(s&&l.label<s[2]){l.label=s[2],l.ops.push(i);break}s[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(r){i=[6,r],a=0}finally{h=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var h,a,s,n,l={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return n={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n},fighterGame;!function(e){var t=function(t){function i(){var e=t.call(this)||this;return e.playerBullets=[],e.enemyFighters=[],e.enemyFightersTimer=new egret.Timer(800),e.specialItemTimer=new egret.Timer(8e3),e.enemyBullets=[],e.specialItems=[],e.myScore=0,e.particleState=0,e._lastTime=egret.getTimer(),e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(i,t),i.prototype.onAddToStage=function(e){this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this),this.createGameScene()},i.prototype.createGameScene=function(){this.stageW=this.stage.stageWidth,this.stageH=this.stage.stageHeight,this.bg=new e.bgMap,this.addChild(this.bg),this.moon=e.createBitmapByName("moon_png"),this.moon.x=this.moon.width/2+(this.stageW-this.moon.width)*Math.random(),this.moon.y=this.moon.height/2+10,this.addChild(this.moon),this.theIntroPanel=new e.introPanel,this.theIntroPanel.x=(this.stageW-this.theIntroPanel.width)/2,this.theIntroPanel.y=(this.stageH-this.theIntroPanel.height)/3,this.addChild(this.theIntroPanel),this.btnStart=e.createBitmapByName("start_png"),this.btnStart.x=(this.stageW-this.btnStart.width)/2,this.btnStart.y=.6*(this.stageH-this.btnStart.height),this.btnStart.touchEnabled=!0,this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gameStart,this),this.addChild(this.btnStart),this.playerFighter=new e.fighter(RES.getRes("player_png"),150,"player",1),this.playerFighter.y=this.stageH-this.playerFighter.height-100,this.addChild(this.playerFighter),this.theBloodBar=new e.bloodBar(RES.getRes("bloodBar_png"),RES.getRes("bloodBarBg_png"),"bloodBar",1),this.theBloodBar.x=10,this.theBloodBar.y=10,this.theShieldBar=new e.bloodBar(RES.getRes("shieldBar_png"),RES.getRes("bloodBarBg_png"),"shieldBar",0),this.theShieldBar.x=this.theBloodBar.x,this.theShieldBar.y=2*this.theBloodBar.y+this.theBloodBar.height,this.theScoreBar=new e.scoreBar,this.theScoreBar.x=this.stageW-this.theBloodBar.x-this.theScoreBar.width,this.theScoreBar.y=this.theBloodBar.y,this.theScorePanel=new e.scorePanel,this.theScorePanel.x=(this.stageW-this.theScorePanel.width)/2,this.theScorePanel.y=200,this.theSharePanel=new e.sharePanel,this.btnRestart=e.createBitmapByName("restart_png"),this.btnRestart.x=(this.stageW-this.btnRestart.width)/2,this.btnRestart.y=.6*(this.stageH-this.btnRestart.height),this.btnRestart.touchEnabled=!0,this.btnRestart.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gameStart,this),this.btnShare=e.createBitmapByName("share_png"),this.btnShare.x=(this.stageW-this.btnShare.width)/2,this.btnShare.y=this.btnRestart.y+this.btnRestart.height+100,this.btnShare.touchEnabled=!0,this.btnShare.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shareHandler,this),this._bgm=RES.getRes("bgm_mp3");var t=RES.getRes("meteorParticle_png"),i=RES.getRes("meteorParticle_json");this.particleSystem=new particle.GravityParticleSystem(t,i),this.preCreatedInstance()},i.prototype.preCreatedInstance=function(){var t=0,i=[];for(t=0;20>t;t++){var r=e.bullet.produce("mooncake_bullet_png");i.push(r)}for(t=0;20>t;t++)r=i.pop(),e.bullet.reclaim(r);for(t=0;20>t;t++){var r=e.bullet.produce("bug_bullet_png");i.push(r)}for(t=0;20>t;t++)r=i.pop(),e.bullet.reclaim(r);for(t=0;20>t;t++){var h=e.fighter.produce("bug_png",400+200*Number(this.myScore<1e3)+200*Math.random(),1+Number(Math.random()>1e3/(this.myScore+1)));i.push(h)}for(t=0;20>t;t++)r=i.pop(),e.bullet.reclaim(r);for(t=0;20>t;t++){var a=e.specialItem.produce("health_png");i.push(a)}for(t=0;20>t;t++)a=i.pop(),e.specialItem.reclaim(a);for(t=0;20>t;t++){var s=e.specialItem.produce("shield_png");i.push(s)}for(t=0;20>t;t++)s=i.pop(),e.specialItem.reclaim(s);for(t=0;20>t;t++){var n=e.specialItem.produce("boost_png");i.push(n)}for(t=0;20>t;t++)n=i.pop(),e.specialItem.reclaim(n);for(t=0;20>t;t++){var l=e.specialItem.produce("star_png");i.push(l)}for(t=0;20>t;t++)l=i.pop(),e.specialItem.reclaim(l)},i.prototype.gameStart=function(){this.myScore=0,this.theIntroPanel.parent==this&&this.removeChild(this.theIntroPanel),this.btnStart.parent==this&&this.removeChild(this.btnStart),this.btnShare.parent==this&&this.removeChild(this.btnShare),this.playerFighter.bulletNumber=1,this.playerFighter.boostedState=1,this.theBloodBar.update(1),this.addChild(this.theBloodBar),this.theShieldBar.update(0),this.addChild(this.theShieldBar),this.theScoreBar.update(0),this.addChild(this.theScoreBar),this.bg.start(),this.touchEnabled=!0,this.addEventListener(egret.Event.ENTER_FRAME,this.gameViewUpdate,this),this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchHandler,this),this.playerFighter.x=(this.stageW-this.playerFighter.width)/2,this.playerFighter.startFire(),this.playerFighter.blood=10,this.playerFighter.shield=0,this.playerFighter.addEventListener("createBullet",this.createBulletHandler,this),this.enemyFightersTimer.addEventListener(egret.TimerEvent.TIMER,this.createEnemyFighter,this),this.enemyFightersTimer.start(),this.specialItemTimer.addEventListener(egret.TimerEvent.TIMER,this.createSpecialItem,this),this.specialItemTimer.start(),this.theScorePanel.parent==this&&this.removeChild(this.theScorePanel),this.btnRestart.parent==this&&this.removeChild(this.btnRestart),this.particleState=0,this.addChildAt(this.particleSystem,3),this.bgm=this._bgm.play()},i.prototype.touchHandler=function(e){var t=e.localX;t=Math.max(0,t),t=Math.min(this.stageW-this.playerFighter.width,t),this.playerFighter.x=t},i.prototype.createBulletHandler=function(t){var i;if(t.target==this.playerFighter)for(var r=0;r<this.playerFighter.bulletNumber;r++)i=e.bullet.produce("mooncake_bullet_png"),i.x=this.playerFighter.x+r%2*-1*(r/2)*i.width,i.y=this.playerFighter.y-64,this.addChildAt(i,this.numChildren-1-this.enemyFighters.length-this.specialItems.length),this.playerBullets.push(i);else{var h=t.target;if(1==h.bulletNumber)i=e.bullet.produce("bug_bullet_png"),i.x=h.x+16,i.y=h.y+64,this.addChildAt(i,this.numChildren-1-this.enemyFighters.length-this.specialItems.length),this.enemyBullets.push(i);else for(var r=0;r<h.bulletNumber;r++)i=e.bullet.produce("bug_bullet_png"),i.x=0==r?h.x:h.x+32,i.y=h.y+64,this.addChildAt(i,this.numChildren-1-this.enemyFighters.length-this.specialItems.length),this.enemyBullets.push(i)}},i.prototype.createEnemyFighter=function(t){var i=e.fighter.produce("bug_png",300+500*Number(this.myScore<1e3)+500*Math.random(),1+Number(Math.random()>1e3/(this.myScore+1)));i.x=Math.random()*(this.stageW-i.width),i.y=-i.height-300*Math.random(),i.addEventListener("createBullet",this.createBulletHandler,this),i.startFire(),this.addChildAt(i,this.numChildren-1),this.enemyFighters.push(i)},i.prototype.createSpecialItem=function(t){var i,r=Math.random();i=.05>=r?e.specialItem.produce("boost_png"):.3>=r?e.specialItem.produce("shield_png"):r<=.6-Math.min(.2,.2*this.myScore/1e3)?e.specialItem.produce("health_png"):e.specialItem.produce("star_png"),i.x=Math.random()*(this.stageW-i.width),i.y=-i.height-300*Math.random(),this.addChildAt(i,this.numChildren-1-this.enemyFighters.length),this.specialItems.push(i)},i.prototype.gameViewUpdate=function(t){var i=egret.getTimer(),r=1e3/(i-this._lastTime);this._lastTime=i;var h,a=60/r,s=0,n=this.playerBullets.length;for(s=0;n>s;s++)h=this.playerBullets[s],h.y<-h.height&&(this.removeChild(h),e.bullet.reclaim(h),this.playerBullets.splice(s,1),s--,n--),h.y-=12*this.playerFighter.boostedState*a;var l,o=this.enemyFighters.length;for(s=0;o>s;s++)l=this.enemyFighters[s],l.y>this.stage.stageHeight&&(this.removeChild(l),e.fighter.reclaim(l),l.removeEventListener("createBullet",this.createBulletHandler,this),l.stopFire(),this.enemyFighters.splice(s,1),s--,o--),l.y+=4*(1+Math.min(1,this.myScore/1e3))*a;var c=this.enemyBullets.length;for(s=0;c>s;s++)h=this.enemyBullets[s],h.y>this.stage.stageHeight&&(this.removeChild(h),e.bullet.reclaim(h),this.enemyBullets.splice(s,1),s--,c--),h.y+=8*(1+Math.min(1,this.myScore/1e3))*a;var p,g=this.specialItems.length;for(s=0;g>s;s++)p=this.specialItems[s],p.y>this.stage.height&&(this.removeChild(p),e.specialItem.reclaim(p),this.specialItems.splice(s,1),s--,g--),p.y+=6*(1+Math.min(1,this.myScore/1e3))*a;this.myScore>=500&&0==this.particleState&&(this.particleSystem.start(),this.particleState=1),this.gameHitTest()},i.prototype.gameHitTest=function(){var t,i,r,h,a,s=this.playerBullets.length,n=this.enemyBullets.length,l=this.enemyFighters.length,o=this.specialItems.length,c=[],p=[],g=[];for(t=0;s>t;t++)for(r=this.playerBullets[t],i=0;l>i;i++)h=this.enemyFighters[i],e.GameUtils.hitTest(h,r)&&(h.blood-=(3-2*Math.min(1,this.myScore/1e3))*this.playerFighter.boostedState,-1==c.indexOf(r)&&c.push(r),h.blood<=0&&-1==p.indexOf(h)&&p.push(h));for(t=0;n>t;t++)if(r=this.enemyBullets[t],e.GameUtils.hitTest(this.playerFighter,r)){var u=1+(Math.random()>.5?1:0)+2*Number(this.myScore>=1e3);this.playerFighter.shield>=u?(this.playerFighter.shield-=u,this.theShieldBar.update(this.playerFighter.shield/5)):this.playerFighter.shield>0?(this.playerFighter.shield=0,this.theShieldBar.update(this.playerFighter.shield/5)):(this.playerFighter.blood-=u,this.theBloodBar.update(this.playerFighter.blood/10)),-1==c.indexOf(r)&&c.push(r)}for(t=0;l>t;t++)h=this.enemyFighters[t],e.GameUtils.hitTest(h,this.playerFighter)&&(this.playerFighter.shield>0?(this.playerFighter.shield=0,this.theShieldBar.update(0)):(this.playerFighter.blood=0,this.theBloodBar.update(0)),h.blood=0,-1==p.indexOf(h)&&p.push(h));for(t=0;o>t;t++)a=this.specialItems[t],e.GameUtils.hitTest(a,this.playerFighter)&&("boost_png"==a.textureName?1==this.playerFighter.bulletNumber?this.playerFighter.bulletNumber+=2:this.playerFighter.boostedState+=.1:"health_png"==a.textureName?this.playerFighter.blood<10&&(this.playerFighter.blood+=1,this.theBloodBar.update(this.playerFighter.blood/10)):"shield_png"==a.textureName?this.playerFighter.shield<5&&(this.playerFighter.shield+=1,this.theShieldBar.update(this.playerFighter.shield/5)):"star_png"==a.textureName&&(this.myScore+=50,this.theScoreBar.update(this.myScore)),-1==g.indexOf(a)&&g.push(a));if(this.playerFighter.blood<=0)this.gameStop();else{for(;c.length>0;)r=c.pop(),this.removeChild(r),"mooncake_bullet_png"==r.textureName?this.playerBullets.splice(this.playerBullets.indexOf(r),1):this.enemyBullets.splice(this.enemyBullets.indexOf(r),1),e.bullet.reclaim(r);for(this.myScore+=5*p.length,this.theScoreBar.update(this.myScore);p.length>0;)h=p.pop(),h.stopFire(),h.removeEventListener("createBullet",this.createBulletHandler,this),this.removeChild(h),this.enemyFighters.splice(this.enemyFighters.indexOf(h),1),e.fighter.reclaim(h);for(this.myScore+=g.length,this.theScoreBar.update(this.myScore);g.length>0;)a=g.pop(),this.removeChild(a),this.specialItems.splice(this.specialItems.indexOf(a),1),e.specialItem.reclaim(a)}},i.prototype.gameStop=function(){this.addChild(this.btnRestart),this.bg.pause(),1==this.particleState&&this.particleSystem.stop(),this.removeEventListener(egret.Event.ENTER_FRAME,this.gameViewUpdate,this),this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchHandler,this),this.playerFighter.stopFire(),this.playerFighter.removeEventListener("createBullet",this.createBulletHandler,this),this.enemyFightersTimer.removeEventListener(egret.TimerEvent.TIMER,this.createEnemyFighter,this),this.enemyFightersTimer.stop(),this.specialItemTimer.removeEventListener(egret.TimerEvent.TIMER,this.createSpecialItem,this),this.specialItemTimer.stop();for(var t;this.playerBullets.length>0;)t=this.playerBullets.pop(),this.removeChild(t),e.bullet.reclaim(t);for(;this.enemyBullets.length>0;)t=this.enemyBullets.pop(),this.removeChild(t),e.bullet.reclaim(t);for(var i;this.enemyFighters.length>0;)i=this.enemyFighters.pop(),i.stopFire(),i.removeEventListener("createBullet",this.createBulletHandler,this),this.removeChild(i),e.fighter.reclaim(i);for(var r;this.specialItems.length>0;)r=this.specialItems.pop(),this.removeChild(r),e.specialItem.reclaim(r);this.theScorePanel.showScore(this.myScore),this.addChild(this.theScorePanel),this.addChild(this.btnShare),this.bgm.stop()},i.prototype.shareHandler=function(){this.theSharePanel.show(this.myScore);var e=new egret.RenderTexture;e.drawToTexture(this.theSharePanel);var t=document.getElementById("divImage"),i=document.getElementById("shareImage");i.src=e.toDataURL("image/jpeg"),t.style.display="block"},i}(egret.DisplayObjectContainer);e.gameContainer=t,__reflect(t.prototype,"fighterGame.gameContainer")}(fighterGame||(fighterGame={}));var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="加载中，请稍候...\n"+e+"/"+t+"\n Powered by Egret"},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var fighterGame;!function(e){var t=function(t){function i(){var e=t.call(this)||this;return e.rollSpeed=2,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(i,t),i.prototype.onAddToStage=function(t){this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this),this.stageW=this.stage.stageWidth,this.stageH=this.stage.stageHeight;var i=RES.getRes("background_png");this.textureHeight=i.textureHeight,this.rowCount=Math.ceil(this.stageH/this.textureHeight)+1,this.bmpRef=[];for(var r=0;r<this.rowCount;r++){var h=e.createBitmapByName("background_png");h.y=this.textureHeight*r-(this.textureHeight*this.rowCount-this.stageH),this.bmpRef.push(h),this.addChild(h)}},i.prototype.start=function(){this.removeEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this),this.addEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this)},i.prototype.enterFrameHandler=function(e){for(var t=0;t<this.rowCount;t++){var i=this.bmpRef[t];i.y+=this.rollSpeed,i.y>this.stageH&&(i.y=this.bmpRef[0].y-this.textureHeight,this.bmpRef.pop(),this.bmpRef.unshift(i))}},i.prototype.pause=function(){this.removeEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this)},i}(egret.DisplayObjectContainer);e.bgMap=t,__reflect(t.prototype,"fighterGame.bgMap")}(fighterGame||(fighterGame={}));var fighterGame;!function(e){var t=function(e){function t(t,i,r,h){var a=e.call(this)||this;a.emptyBar=new egret.Bitmap(t),a.addChild(a.emptyBar),a.fullBar=new egret.Bitmap(i);var s=a.fullBar.width,n=a.fullBar.height;return a.theMask=new egret.Shape,a.theMask.graphics.beginFill(16777215),a.theMask.graphics.drawRect(h*s,0,(1-h)*s,n),a.theMask.graphics.endFill(),a.fullBar.mask=a.theMask,a.addChild(a.fullBar),a.addChild(a.theMask),a.typeName=r,a}return __extends(t,e),t.prototype.update=function(e){var t=this.fullBar.width,i=this.fullBar.height;this.theMask.graphics.clear(),this.theMask.graphics.beginFill(16777215),this.theMask.graphics.drawRect(e*t,0,(1-e)*t,i),this.theMask.graphics.endFill()},t}(egret.DisplayObjectContainer);e.bloodBar=t,__reflect(t.prototype,"fighterGame.bloodBar")}(fighterGame||(fighterGame={}));var fighterGame;!function(e){var t=function(t){function i(e,i){var r=t.call(this,e)||this;return r.textureName=i,r}return __extends(i,t),i.produce=function(t){null==e.bullet.cacheDict[t]&&(e.bullet.cacheDict[t]=[]);var i,r=e.bullet.cacheDict[t];return i=r.length>0?r.pop():new e.bullet(RES.getRes(t),t)},i.reclaim=function(t){var i=t.textureName;null==e.bullet.cacheDict[i]&&(e.bullet.cacheDict[i]=[]);var r=e.bullet.cacheDict[i];-1==r.indexOf(t)&&r.push(t)},i.cacheDict={},i}(egret.Bitmap);e.bullet=t,__reflect(t.prototype,"fighterGame.bullet")}(fighterGame||(fighterGame={}));var fighterGame;!function(e){var t=function(t){function i(e,i,r,h){var a=t.call(this)||this;return a.blood=10,a.shield=0,a.bulletNumber=1,a.boostedState=1,a.fireDelay=i,a.bmp=new egret.Bitmap(e),a.textureName=r,a.addChild(a.bmp),a.fireTimer=new egret.Timer(i),a.fireTimer.addEventListener(egret.TimerEvent.TIMER,a.createBullet,a),a.bulletNumber=h,a}return __extends(i,t),i.produce=function(t,i,r){null==e.fighter.cacheDict[t]&&(e.fighter.cacheDict[t]=[]);var h,a=e.fighter.cacheDict[t];return h=a.length>0?a.pop():new e.fighter(RES.getRes(t),i,t,r),h.blood=10,h.shield=0,h.bulletNumber=r,h},i.reclaim=function(t){var i=t.textureName;null==e.fighter.cacheDict[i]&&(e.fighter.cacheDict[i]=[]);var r=e.fighter.cacheDict[i];-1==r.indexOf(t)&&r.push(t)},i.prototype.startFire=function(){this.fireTimer.start()},i.prototype.stopFire=function(){this.fireTimer.stop()},i.prototype.createBullet=function(e){this.dispatchEventWith("createBullet")},i.cacheDict={},i}(egret.DisplayObjectContainer);e.fighter=t,__reflect(t.prototype,"fighterGame.fighter")}(fighterGame||(fighterGame={}));var Main=function(e){function t(){var t=e.call(this)||this;return t.addEventListener(egret.Event.ADDED_TO_STAGE,t.onAddToStage,t),t}return __extends(t,e),t.prototype.onAddToStage=function(e){egret.lifecycle.addLifecycleListener(function(e){e.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(i){switch(i.label){case 0:return[4,this.loadResource()];case 1:return i.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return e=i.sent(),this.startAnimation(e),[4,platform.login()];case 3:return i.sent(),[4,platform.getUserInfo()];case 4:return t=i.sent(),console.log(t),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,RES.loadGroup("preload",0,e)];case 2:return i.sent(),this.stage.removeChild(e),[3,4];case 3:return t=i.sent(),console.error(t),[3,4];case 4:return[2]}})})},t.prototype.createGameScene=function(){var e=new fighterGame.gameContainer;this.addChild(e)},t.prototype.startAnimation=function(e){var t=this,i=new egret.HtmlTextParser,r=e.map(function(e){return i.parse(e)}),h=this.textfield,a=-1,s=function(){a++,a>=r.length&&(a=0);var e=r[a];h.textFlow=e;var i=egret.Tween.get(h);i.to({alpha:1},200),i.wait(2e3),i.to({alpha:0},200),i.call(s,t)};s()},t}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var fighterGame;!function(e){var t=function(e){function t(){var t=e.call(this)||this,i=t.graphics;return i.beginFill(0,.8),i.drawRect(0,0,400,300),i.endFill(),t.txt=new egret.TextField,t.txt.width=400,t.txt.height=300,t.txt.textAlign="center",t.txt.textColor=16777215,t.txt.size=28,t.txt.y=60,t.txt.text="快来帮助腾小飞\n用月饼对抗碧油鸡的攻击吧！\n场景中会有实验室随便捣鼓\n的药水、接错线的电路板、纳米\n材料月饼和天外飞星掉落，\n注意收集哦！",t.addChild(t.txt),t.touchChildren=!1,t.touchEnabled=!1,t}return __extends(t,e),t}(egret.Sprite);e.introPanel=t,__reflect(t.prototype,"fighterGame.introPanel")}(fighterGame||(fighterGame={}));var fighterGame;!function(e){var t=function(e){function t(){var t=e.call(this)||this;return t.width=280,t.height=72,t.textAlign="cneter",t.font=RES.getRes("hylx_fnt"),t.text="分数0",t}return __extends(t,e),t.prototype.update=function(e){this.text="分数"+e},t}(egret.BitmapText);e.scoreBar=t,__reflect(t.prototype,"fighterGame.scoreBar")}(fighterGame||(fighterGame={}));var fighterGame;!function(e){var t=function(e){function t(){var t=e.call(this)||this,i=t.graphics;return i.beginFill(0,.8),i.drawRect(0,0,400,300),i.endFill(),t.txt=new egret.BitmapText,t.txt.width=400,t.txt.height=280,t.txt.textAlign="center",t.txt.font=RES.getRes("fzzt_fnt"),t.txt.y=60,t.addChild(t.txt),t.touchEnabled=!1,t.touchChildren=!1,t}return __extends(t,e),t.prototype.showScore=function(e){var t="腾小飞，你的成绩是\n"+e+"\n转发分享到朋友圈\n召唤更多同伴\n一起对抗碧油鸡叭！";this.txt.text=t},t}(egret.Sprite);e.scorePanel=t,__reflect(t.prototype,"fighterGame.scorePanel")}(fighterGame||(fighterGame={}));var fighterGame;!function(e){var t=function(t){function i(){var i=t.call(this)||this;return i.bg=e.createBitmapByName("sharebackground_jpg"),i.addChild(i.bg),i.txt=new egret.BitmapText,i.txt.width=400,i.txt.height=600,i.txt.textAlign="center",i.txt.font=RES.getRes("sharefont_fnt"),i.txt.y=200,i.txt.x=(i.width-i.txt.width)/2,i.addChild(i.txt),i.touchChildren=!1,i.touchEnabled=!1,i}return __extends(i,t),i.prototype.show=function(e){this.txt.text="我在与碧油鸡的战斗中\n获得了\n"+e+"分\n快来加入我们！"},i}(egret.Sprite);e.sharePanel=t,__reflect(t.prototype,"fighterGame.sharePanel")}(fighterGame||(fighterGame={}));var fighterGame;!function(e){var t=function(t){function i(e,i){var r=t.call(this,e)||this;return r.textureName=i,r}return __extends(i,t),i.produce=function(t){null==e.specialItem.cacheDict[t]&&(e.specialItem.cacheDict[t]=[]);var i,r=e.specialItem.cacheDict[t];return i=r.length>0?r.pop():new e.specialItem(RES.getRes(t),t)},i.reclaim=function(t){var i=t.textureName;null==e.specialItem.cacheDict[i]&&(e.specialItem.cacheDict[i]=[]);var r=e.specialItem.cacheDict[i];-1==r.indexOf(t)&&r.push(t)},i.cacheDict={},i}(egret.Bitmap);e.specialItem=t,__reflect(t.prototype,"fighterGame.specialItem")}(fighterGame||(fighterGame={}));var fighterGame;!function(e){function t(e){var t=new egret.Bitmap,i=RES.getRes(e);return t.texture=i,t}var i=function(){function e(){}return e.hitTest=function(e,t){var i=e.getBounds(),r=t.getBounds();return i.x=e.x,i.y=e.y,r.x=t.x,r.y=t.y,i.intersects(r)},e}();e.GameUtils=i,__reflect(i.prototype,"fighterGame.GameUtils"),e.createBitmapByName=t}(fighterGame||(fighterGame={}));