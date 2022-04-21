import { AssetManager } from "./AssetManager";
import { PLAYER_JUMP_HEIGHT, PLAYER_JUMP_SPEED } from "./Constants";

export class Player {

    //states
    public static STATE_IDLE:number = 1;
    public static STATE_DEAD:number = 2;
    public static STATE_JUMPING:number = 3;
    public static STATE_FALLING:number = 4;

    //protected var
    protected stage:createjs.StageGL;
    //protected properties
    protected _state:number;
    protected _sprite:createjs.Sprite;
    protected _jumpPower:number;
    protected _jumpHeight:number;

    //player constructor
    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        //Player init
        this._state = Player.STATE_IDLE;
        this._jumpPower = PLAYER_JUMP_SPEED;
        this._jumpHeight = PLAYER_JUMP_HEIGHT;
        this.stage = stage;

        this._sprite = assetManager.getSprite("player", "player/player_alive", 300, 300);
    }

    //gets/sets

    get state():number {
        return this._state;
    }

    get sprite():createjs.Sprite {
        return this._sprite;
    }

    get jumpPower():number {
        return this._jumpPower;
    }

    get jumpHeight():number {
        return this._jumpHeight;
    }

    //methods
    public startMe():void { //starts jump
        if (this._state == Player.STATE_DEAD) return;

        this._sprite.play();
        this._state = Player.STATE_JUMPING;
    }

    public stopMe():void { //stops fall
        if (this._state == Player.STATE_DEAD) return;

        this._sprite.stop();
        this._state = Player.STATE_IDLE;
    }

    public showMe():void {
        this.stage.addChild(this._sprite);
    }

    public hideMe():void {
        this._sprite.stop();
        this.stage.removeChild(this._sprite);
    }

    public update():void {
        if ((this._state == Player.STATE_DEAD) || (this._state == Player.STATE_DEAD)) return;

        //code jump here
        this._sprite.y + this._jumpPower;
        
        //use if statement
    }


}