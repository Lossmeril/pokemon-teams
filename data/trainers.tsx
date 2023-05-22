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

const Trainers: [TrainerType] = [
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
];

export default Trainers;
