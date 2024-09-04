import { useParams } from "react-router-dom";
import { getRecettes } from "../../services/api/recette";
import { recetteFakerInterface } from "../../services/fakers/recetteFaker";
import { useQuery } from "@tanstack/react-query";

export default function RecetteInfos() {
  const params = useParams();

  const { data: recette } = useQuery<recetteFakerInterface[] | undefined>({
    queryKey: ["recette"],
    queryFn: () => getRecettes(),
    staleTime: 0,
  });

  const recetteInfos = recette?.find(({ id }) => id === Number(params.id));

  return (
    <div>
      <h1>{recetteInfos?.title}</h1>
    </div>
  );
}
