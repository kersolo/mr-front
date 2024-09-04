export interface recetteFakerInterface {
  title: string;
  description: string;
  image: string;
  id: number;
}

export const recetteFaker: recetteFakerInterface[] = [
  {
    id: 1,
    title: "Pâtes Carbonara",
    description:
      "Pâtes carbonara, plat rapide et bon à manger, repas de la flemme !!",
    image:
      "https://www.ptitchef.com/imgupl/recipe/pates-carbonara-ideal-pour-les-enfants--21428p26538.jpg",
  },
  {
    id: 2,
    title: "Pâtes Bolo",
    description:
      "Pâtes Bolo, plat rapide et bon à manger, repas de la flemme !!",
    image:
      "https://th.bing.com/th/id/R.ec6894ef4396e211bdb51ea06a09fe8e?rik=CWuGf2STO8239w&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    title: "Poulet curry",
    description:
      "Poulet curry, plat rapide et bon à manger, repas de la flemme !!",
    image:
      "https://recipesfromapantry.com/wp-content/uploads/2018/05/instant-pot-chicken-curry-11.jpg",
  },
  {
    id: 4,
    title: "Boeuf bourguinion",
    description:
      "Boeuf bourguinion, plat long et bon à manger, repas trop bon !!",
    image:
      "https://th.bing.com/th/id/OIP.Zdi2mn0S_SUnQJydT7U3qwHaE8?rs=1&pid=ImgDetMain",
  },
];
