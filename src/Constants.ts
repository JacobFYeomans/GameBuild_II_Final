// game constants
export const STAGE_WIDTH:number = 600;
export const STAGE_HEIGHT:number = 600;
export const FRAME_RATE:number = 30;
export const PLAYER_JUMP_HEIGHT:number = 150; //pixels
export const PLAYER_JUMP_SPEED:number = 6;
export const LEAF_PLATFORM_MAX:number = 10;

export const ASSET_MANIFEST:Object[] = [
    {
        type:"json",
        src:"./lib/spritesheets/player.json",
        id:"player",
        data:0
    },
    {
        type:"image",
        src:"./lib/spritesheets/player.png",
        id:"player",
        data:0
    },
    {
        type:"json",
        src:"./lib/spritesheets/misc.json",
        id:"misc",
        data:0
    },
    {
        type:"image",
        src:"./lib/spritesheets/misc.png",
        id:"misc",
        data:0
    },
    {
        type:"json",
        src:"./lib/spritesheets/backgrounds.json",
        id:"backgrounds",
        data:0
    },
    {
        type:"image",
        src:"./lib/spritesheets/backgrounds.png",
        id:"backgrounds",
        data:0
    },
    {
        type:"sound",
        src:"./lib/sounds/beep.ogg",
        id:"beep",
        data:4
    }     
];