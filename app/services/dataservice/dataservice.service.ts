import { Injectable } from '@angular/core';
import {Game} from '../../appdata/game';
import {Platform} from '../../appdata/platform';
import {Characters} from '../../appdata/characters';

@Injectable()
export class DataserviceService {

  constructor() { }

   getGames() {
    return [
     new Game(1, 'Destiny' ),
     new Game(2, 'Diablo 3' ),
     new Game(3, 'Left 4 Dead 2' ),
     new Game(4, 'World of Warcraft' )
    ];
  }
   
  getPlatforms() {
   return [
     new Platform(1, 'Destiny', 'PS3 ' ),
     new Platform(2, 'Destiny', 'PS4' ),
     new Platform(3, 'Destiny', 'XBox'),
     new Platform(4, 'Destiny', 'XB1'),
     new Platform(5, 'Diablo 3', 'PS3' ),
     new Platform(6, 'Diablo 3', 'PS4'),
     new Platform(7, 'Diablo 3', 'XBox' ),
     new Platform(8, 'Diablo 3', 'XB1' ),
     new Platform(9, 'Left 4 Dead 2', 'PC' ),
     new Platform(10, 'Left 4 Dead 2', 'XBox' ),
     new Platform(11, 'World of Warcraft', 'PC')
    ];
  }

  getCharacters(){
    return [
        new Characters(1, 'Destiny', 'Hunter'),
        new Characters(1, 'Destiny', 'Warlock'),
        new Characters(1, 'Destiny', 'Titan'),
        new Characters(1, 'Diablo 3', 'Barbarian'),
        new Characters(1, 'Diablo 3', 'Crusader'),
        new Characters(1, 'Diablo 3', 'Demon Hunter(Diablo 3)'),
        new Characters(1, 'Diablo 3', 'Monk '),
        new Characters(1, 'Diablo 3', 'Witch  '),
        new Characters(1, 'Diablo 3', 'Doctor '),
        new Characters(1, 'Diablo 3', 'Wizard '),
        new Characters(1, 'Left 4 Dead 2', 'Coach'),
        new Characters(1, 'Left 4 Dead 2', 'Rochelle'),
        new Characters(1, 'Left 4 Dead 2', 'Nick'),
        new Characters(1, 'Left 4 Dead 2', 'Ellis'),
        new Characters(1, 'World of Warcraft', 'Warrior'),
        new Characters(1, 'World of Warcraft', 'Paladin '),
        new Characters(1, 'World of Warcraft', 'Hunter '),
        new Characters(1, 'World of Warcraft', 'Rogue '),
        new Characters(1, 'World of Warcraft', 'Priest '),
        new Characters(1, 'World of Warcraft', 'Death Knight '),
        new Characters(1, 'World of Warcraft', 'Shaman '),
        new Characters(1, 'World of Warcraft', 'Mage '),
        new Characters(1, 'World of Warcraft', 'Warlock '),
        new Characters(1, 'World of Warcraft', 'Monk '),
        new Characters(1, 'World of Warcraft', 'Druid '),
        new Characters(1, 'World of Warcraft', 'Demon Hunter(World of Warcraft) ')
    ];
  }

}
