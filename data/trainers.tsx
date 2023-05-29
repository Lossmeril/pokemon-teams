export type Pokemon = {
  species: string;
  name?: string;
  imgNumber: number;
  type1: string;
  type2?: string;
};

export type Battle = {
  id: string;
  pkmn: Pokemon[];
};

export type TrainerType = {
  name: string;
  battles: Battle[];
};

const Trainers: TrainerType[] = [
  {
    name: "Imrich",
    battles: [
      {
        id: "1",
        pkmn: [
          {
            name: "Paprika",
            species: "Capsakid",
            imgNumber: 1243,
            type1: "grass",
          },
          {
            name: "Ředkev",
            species: "Oddish",
            imgNumber: 65,
            type1: "grass",
            type2: "poison",
          },
          {
            name: "Vrabčák",
            species: "Pidgey",
            imgNumber: 22,
            type1: "normal",
            type2: "flying",
          },
        ],
      },
      {
        id: "2",
        pkmn: [
          {
            name: "Paprika",
            species: "Capsakid",
            imgNumber: 1243,
            type1: "grass",
          },
          {
            name: "Česnek",
            species: "Silcoon",
            imgNumber: 372,
            type1: "bug",
          },
          {
            name: "Ředkev",
            species: "Oddish",
            imgNumber: 65,
            type1: "grass",
            type2: "poison",
          },

          {
            name: "Vrabčák",
            species: "Pidgeotto",
            imgNumber: 23,
            type1: "normal",
            type2: "flying",
          },
        ],
      },
      {
        id: "3",
        pkmn: [
          {
            name: "Paprika",
            species: "Scovillain",
            imgNumber: 1244,
            type1: "grass",
            type2: "fire",
          },
          {
            name: "Dýně",
            species: "Pumpkaboo",
            imgNumber: 955,
            type1: "ghost",
            type2: "grass",
          },
          {
            name: "Cibulka",
            species: "Galarian Farfetch'd",
            imgNumber: 122,
            type1: "fighting",
          },
          {
            name: "Vrabčák",
            species: "Pidgeotto",
            imgNumber: 23,
            type1: "normal",
            type2: "flying",
          },
        ],
      },
      {
        id: "4",
        pkmn: [
          {
            name: "Paprika",
            species: "Scovillain",
            imgNumber: 1244,
            type1: "grass",
            type2: "fire",
          },
          {
            name: "Dýně",
            species: "Gourgeist",
            imgNumber: 959,
            type1: "ghost",
            type2: "grass",
          },
          {
            name: "Cibulka",
            species: "Galarian Farfetch'd",
            imgNumber: 122,
            type1: "fighting",
          },
          {
            name: "Mandelinka",
            species: "Rellor",
            imgNumber: 1245,
            type1: "bug",
          },
          {
            name: "Vrabčák",
            species: "Pidgeot",
            imgNumber: 24,
            type1: "normal",
            type2: "flying",
          },
        ],
      },
      {
        id: "Final",
        pkmn: [
          {
            name: "Paprika",
            species: "Scovillain",
            imgNumber: 1244,
            type1: "grass",
            type2: "fire",
          },
          {
            name: "Dýně",
            species: "Gourgeist",
            imgNumber: 959,
            type1: "ghost",
            type2: "grass",
          },
          {
            name: "Cibulka",
            species: "Sirfetch'd",
            imgNumber: 1133,
            type1: "fighting",
          },
          {
            name: "Mandelinka",
            species: "Rabsca",
            imgNumber: 1246,
            type1: "bug",
            type2: "psychic",
          },
          {
            name: "Kosa",
            species: "Scyther",
            imgNumber: 172,
            type1: "bug",
            type2: "flying",
          },
          {
            name: "Vrabčák",
            species: "Mega Pidgeot",
            imgNumber: 25,
            type1: "normal",
            type2: "flying",
          },
        ],
      },
    ],
  },
  {
    name: "Jirka Formánek",
    battles: [
      {
        id: "Final",
        pkmn: [
          {
            name: "Víno de Formys",
            species: "Tsareena",
            imgNumber: 1024,
            type1: "grass",
          },
          {
            name: "Dědek AMAVET",
            species: "Grimsnarl",
            imgNumber: 1129,
            type1: "dark",
            type2: "fairy",
          },
          {
            name: "Školné",
            species: "Gholdengo",
            imgNumber: 1296,
            type1: "steel",
            type2: "ghost",
          },
          {
            name: "Nové křídlo",
            species: "Conkeldurr",
            imgNumber: 703,
            type1: "fighting",
          },
          {
            name: "IoT kávovar",
            species: "Rotom Heat Form",
            imgNumber: 621,
            type1: "electric",
            type2: "fire",
          },
          {
            name: "Ředitel",
            species: "Beheeyem",
            imgNumber: 791,
            type1: "psychic",
          },
        ],
      },
    ],
  },
  {
    name: "Pavel Čáp",
    battles: [
      {
        id: "Final",
        pkmn: [
          {
            name: "Unity",
            species: "Porygon",
            imgNumber: 191,
            type1: "normal",
          },
          {
            name: "Covid-19",
            species: "Galarian Weezing",
            imgNumber: 157,
            type1: "poison",
            type2: "fairy",
          },
          {
            name: "Ozobot",
            species: "Registeel",
            imgNumber: 500,
            type1: "steel",
          },
          {
            name: "Arduino",
            species: "Klinklang",
            imgNumber: 786,
            type1: "steel",
          },
          {
            name: "micro:bit autíčko",
            species: "Revavroom",
            imgNumber: 1259,
            type1: "steel",
            type2: "poison",
          },
          {
            name: "Chlap",
            species: "Bombirdier",
            imgNumber: 1254,
            type1: "flying",
            type2: "dark",
          },
        ],
      },
    ],
  },
];

export default Trainers;
