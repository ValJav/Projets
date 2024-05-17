class Piscine {
  piscineType: string;
  icon: string;
}

export const piscineOptions: Piscine[] = [
  {
    piscineType: 'Pas de piscine',
    icon: '/assets/images/icon-none.svg',
  },
  {
    piscineType: 'Hors sol',
    icon: '/assets/images/icon-above-ground.svg',
  },
  {
    piscineType: 'Entérrée',
    icon: '/assets/images/icon-in-ground.svg',
  },
];
