export type PlayerPosition = {
    position: number;
    player: string;
    sector1: number|null;
    sector2: number|null;
    sector3: number|null;
    int: number|null;
}

const positions: PlayerPosition[] = [
    {
      position: 1,
      player: "RIC",
      sector1: 18.272,
      sector2: 44.524,
      sector3: 41.671,
      int: null,
    },
    {
      position: 2,
      player: "HAM",
      sector1: 18.457,
      sector2: 44.604,
      sector3: 42.094,
      int: 6.385,
    },
    {
      position: 3,
      player: "BOT",
      sector1: 18.044,
      sector2: 43.926,
      sector3: null,
      int: 8.987,
    },
    {
      position: 4,
      player: "VET",
      sector1: 17.799,
      sector2: 43.918,
      sector3: null,
      int: 3.299,
    },
    {
      position: 5,
      player: "VER",
      sector1: 37.294,
      sector2: 43.446,
      sector3: null,
      int: 2.388,
    },
  ];

export function getPositions(): PlayerPosition[] {
    return positions;
}