// createjs typescript definition for TypeScript
/// <reference path="./../node_modules/@types/createjs/index.d.ts" />

// importing createjs framework
import "createjs";
// importing game constants
import { STAGE_WIDTH, STAGE_HEIGHT, FRAME_RATE, ASSET_MANIFEST, LEAF_PLATFORM_MAX } from "./Constants";
import { AssetManager } from "./AssetManager";
import { Player } from "./Player";
import { ScreenManager } from "./ScreenManager";
import { LeafPlatform } from "./LeafPlatform";

// game variables
let stage:createjs.StageGL;
let canvas:HTMLCanvasElement;
let assetManager:AssetManager;

//game objects
let player:Player;
let leafPlats:LeafPlatform[] = [];
let screenManager:ScreenManager;
//let userInterface:UserInterface;

//class vars
let gameTimer:number;

//keyboard inputs
let enterKey:boolean = false;
let spaceKey:boolean = false;
let rKey:boolean = false;
let leftKey:boolean = false;
let rightKey:boolean = false;

function keyboardInput() {
    if (enterKey) {
        //start game
    }
    else if (spaceKey) {
        //jump
    }
    else if (rKey) {
        //resets Game
    }
    else if (leftKey) {
        //move player to left while jumping
    }
    else if (rightKey) {
        //move player to right while jumping
    }
}

// --------------------------------------------------- event handler
function onReady(e:createjs.Event):void {
    console.log(">> spritesheet loaded & ready to add sprites to game");

    //construct stuff here
    screenManager = new ScreenManager(stage, assetManager);
    screenManager.Intro();

    player = new Player(stage, assetManager);

    //populate leaf platforms
    for (let i:number = 0; i < LEAF_PLATFORM_MAX; i++) {
        leafPlats.push(new LeafPlatform(stage, assetManager));
    }

    document.onkeydown = onKeyDown;
    document.onkeyup = onKeyUp;

    // startup the ticker
    createjs.Ticker.framerate = FRAME_RATE;
    createjs.Ticker.on("tick", onTick);        
    console.log(">> game ready");
}

function onGameEvent(e:createjs.Event):void {
    //switch for game events
    switch (e.type) {

    }
}

function onTick(e:createjs.Event) {
    // console.log("TICK!");
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());

    keyboardInput();
    player.update();

    // update the stage
    stage.update();
}

function onEvent(e:createjs.Event):void {
    switch (e.type) {
        case "startGame":
            screenManager.showGame();
            player.showMe();
            //set timer here

        break;

        case "resetGame":
            screenManager.Intro();
            for (let leaf of leafPlats) leaf.hideMe();
            //reset player
            player.hideMe();

        break;

        case "timeOut":
            //timer related

        break;

        case "playerDied":
            //essentially just reset game

        break;
    }
}

function addLeafPlat():void {
    for (let newLeaf of leafPlats) {
        if (newLeaf.used == false) {
            newLeaf.used = true;
            newLeaf.showMe();
            break;
        }
    }
}

function onKeyDown(e:KeyboardEvent):void {
    if (e.key == "Space") spaceKey = true;
    else if (e.key == "Enter") enterKey = true;
    else if (e.key == "R") rKey = true;
    else if (e.key == "KeyLeft") leftKey = true;
    else if (e.key == "KeyRight") rightKey = true;
}

function onKeyUp(e:KeyboardEvent):void {
    if (e.key == "Space") spaceKey = false;
    else if (e.key == "Enter") enterKey = false;
    else if (e.key == "R") rKey = false;
    else if (e.key == "KeyLeft") leftKey = false;
    else if (e.key == "KeyRight") rightKey = false;
}

// --------------------------------------------------- main method
function main():void {
    // get reference to canvas
    canvas = <HTMLCanvasElement> document.getElementById("game-canvas");
    // set canvas width and height - this will be the stage size
    canvas.width = STAGE_WIDTH;
    canvas.height = STAGE_HEIGHT;    

    // create stage object
    stage = new createjs.StageGL(canvas, { antialias: true });

    // AssetManager setup
    assetManager = new AssetManager(stage);
    stage.on("allAssetsLoaded", onReady, null, true);
    // load the assets
    assetManager.loadAssets(ASSET_MANIFEST);
}

main();