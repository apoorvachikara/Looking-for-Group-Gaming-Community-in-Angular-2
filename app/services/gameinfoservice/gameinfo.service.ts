import { Injectable } from '@angular/core';

@Injectable()
export class GameinfoService {

  constructor() { }
  
    //For Left 2 for Dead 4

    getPlatformleft() : string [] {
        
        return ["XBOX", "PC"];
    }
    
    getCharactersleft() :string[] {
        
        return ["Coach", "Rochelle", "Nick", "Ellis"];
    }
    
    aboutLeft(){
        
        return ("Left 4 Dead 2 is a cooperative first-person shooter video game developed and published by Valve Corporation. The sequel to Turtle Rock Studios's Left 4 Dead, the game released for Microsoft Windows and Xbox 360 in November 2009, and for OS X in October 2010, and for Linux in July 2013");
    }
    
    // For Destiny
    getPlatformDestiny() : string []{
        
        return ["PS3", "PS4", "XBOX", "XB1"];
    }
    
    getCharactersDestiny() :string[] {
        
        return ["Hunter", "Warlock", "Titan"];
    }
    
    aboutDestiny() {
        return ("Destiny is an online-only multiplayer first-person shooter video game developed by Bungie and published by Activision. It was released worldwide on September 9, 2014, for the PlayStation 3, PlayStation 4, Xbox 360, and Xbox One consoles. Destiny marked Bungie's first new console franchise since the Halo series, and it is the first game in a ten-year agreement between Bungie and Activision.Set in a mythic science fiction world, the game features a multiplayer shared-world environment with elements of role-playing games. Activities in Destiny are divided among player versus environment (PvE) and player versus player (PvP) game types. ") 
    }

    // For Diablo
    
    getPlatformDiablo () : string []{
        
        return ["PS3", "PS4", "XBOX", "XB1"];
    }
    
    getCharactersDiablo() :string[] {
        
        return ["Barbarian", "Crusader", "Demon Hunter", "Monk", "Witch Doctor", "Wizard"];
    }
    
    aboutDiablo(){
        return("Diablo III is a hack and slash action role-playing video game developed and published by Blizzard Entertainment. It is the third installment in the Diablo franchise and was released in the Americas, Europe, South Korea, and Taiwan on May 15, 2012, and Russia on June 7, 2012, for Microsoft Windows and macOS. A console version was released for the PlayStation 3 and Xbox 360 on September 3, 2013. Versions for PlayStation 4 and Xbox One were released on August 19, 2014.");
    }
    
    // For World of War 
    
     getPlatformWar () : string []{
        
        return ["PC"];
    }
    
    getCharactersWar() :string[] {
        
        return ["Warrior", "Paladin", "Hunter", "Rogue", "Priest", "Death Knight", "Shaman", "Mage", "Warlock", "Monk", "Druid", "Demon Hunter"];
    }
    
    aboutWar(){
        return ("World of Warcraft (WoW) is a massively multiplayer online role-playing game (MMORPG) released in 2004 by Blizzard Entertainment. It is the fourth released game set in the fantasy Warcraft universe, which was first introduced by Warcraft: Orcs & Humans in 1994. World of Warcraft takes place within the Warcraft world of Azeroth, approximately four years after the events at the conclusion of Blizzard's previous Warcraft release, Warcraft III: The Frozen Throne. Blizzard Entertainment announced World of Warcraft on September 2, 2001. The game was released on November 23, 2004, on the 10th anniversary of the Warcraft franchise.");
    }
    

}
