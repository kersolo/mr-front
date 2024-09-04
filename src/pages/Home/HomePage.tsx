import { Button } from "@material-tailwind/react";
import { CardDefault } from "../../components/CardDefault";
import { useEffect, useState } from "react";
import { getRecettes } from "../../services/api/recette";
import { recetteFakerInterface } from "../../services/fakers/recetteFaker";
import { useQuery } from "@tanstack/react-query";

export default function HomePage() {
  const { data: recettes } = useQuery<recetteFakerInterface[] | undefined>({
    queryKey: ["recettes"],
    queryFn: () => getRecettes(),
    staleTime: 0,
  });

  return (
    <>
      <div className="flex justify-end gap-3 mb-10">
        <Button>Connexion</Button>
        <Button>Inscription</Button>
      </div>
      <div className="flex flex-col gap-4">
        {recettes &&
          recettes.map((recette: recetteFakerInterface) => (
            <CardDefault
              key={recette.id}
              id={recette.id}
              title={recette.title}
              description={recette.description}
              image={recette.image}
            />
          ))}
      </div>
    </>
  );
}
