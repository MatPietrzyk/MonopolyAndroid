import { Player } from "./Player";

export class PlayerBot extends Player {
    constructor(pawn,board,rgbColorString, id ) {
        super(pawn,board,rgbColorString, id );
        this.isBot=true;
    }

    GetNextEvent(previousEvent,gameState) {
        if (previousEvent.name === "endMove"){
            if(gameState.showBuyButton)
                return {name: "buy"};
            else if (gameState.showUpgradeButton)
                return {name: "upgrade"};
            else 
                return {name: "endTurn"};
        }else if (previousEvent.name === "endTurn"){
            return {name: "roll"};
        }else if (previousEvent.name === "buy" ||previousEvent.name === "upgrade" )
            return  {name: "endTurn"};
        return null;
    }
}