import { AssetManager } from "./AssetManager";
import { PLAYER_JUMP_HEIGHT, PLAYER_JUMP_SPEED } from "./Constants";


export class LeafPlatform {

    //custome events
    private eventPlayerJumped:createjs.Event; //probably move, here temp

    //vars
    private _used:boolean;

    protected stage:createjs.StageGL;
    protected _sprite:createjs.Sprite;

    constructor(stage:createjs.StageGL, assetManager:AssetManager){

        this._used = false;

        this._sprite = assetManager.getSprite("misc", "misc/leafplatform_right", 300, 300);

    }

    //get/set

    public get used() {
        return this._used;
    }

    public get sprite() {
        return this._sprite;
    }

    public set used(value:boolean) {
        this._used = value;
    }

    //methods

    public showMe():void {
        this.stage.addChild(this._sprite);
    }
    
    public hideMe():void {
        this.stage.removeChild(this._sprite);
    }

    public update():void {
        //collision detection here

        //downwards movement needs to be opposite of player upwards movement
        this.sprite.y = -PLAYER_JUMP_SPEED;
        //cap total movement at PLAYER_JUMP_HEIGHT
    }
}