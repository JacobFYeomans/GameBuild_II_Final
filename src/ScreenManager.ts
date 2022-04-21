import { AssetManager } from "./AssetManager";

export class ScreenManager {

    //vars & properties
    private stage:createjs.StageGL;
    private introScreen:createjs.Container;
    private gameScreen:createjs.Sprite;
    private gameOverScreen:createjs.Container;

    //custom events

    //constructor
    constructor(stage:createjs.StageGL, assetManager:AssetManager) {

        this.introScreen = new createjs.Container();
        this.introScreen.addChild(assetManager.getSprite("backgrounds", "backgrounds/title", 0, 0));
        let playerSprite:createjs.Sprite = assetManager.getSprite("player", "player/player_alive", 300, 300);
        playerSprite.play();
        this.introScreen.addChild(playerSprite);

        this.gameOverScreen = new createjs.Container();
        this.gameOverScreen.addChild(assetManager.getSprite("backgrounds", "backgrounds/background", 0, 0));
        //need to make gameover sprite

        this.gameScreen = assetManager.getSprite("backgrounds", "backgrounds/background", 0, 0);

    }

    public Intro():void {
        this.hideAll();
        this.stage.addChildAt(this.introScreen, 0);

        //dispatch event to start game
    }

    public showGame():void {
        this.hideAll();
        this.stage.addChildAt(this.gameScreen, 0);
    }

    public displayGameOver():void {
        this.hideAll();
        this.stage.addChildAt(this.gameOverScreen, 0);

        //dispatch event to reset game

    }

    private hideAll():void {
        this.stage.removeChild(this.introScreen);
        this.stage.removeChild(this.gameOverScreen);
        this.stage.removeChild(this.gameScreen); 
    }
}