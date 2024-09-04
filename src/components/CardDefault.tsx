import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { CardDefaultInterface } from "../services/interfaces/CardDefaultInterface";
import { DefaultImg } from "./DefaultImg";
import { Link } from "react-router-dom";

export function CardDefault({
  title,
  description,
  image,
  id,
}: CardDefaultInterface) {
  return (
    <Link to={`/recetteInfos/${id}`}>
      <Card className="flex flex-row bg-deep-orange-400">
        <CardHeader
          color="blue-gray"
          className="w-96 h-52 mb-4"
          floated={false}
          shadow={false}
        >
          <DefaultImg image={image} />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </CardBody>
      </Card>
    </Link>
  );
}
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
// } from "@material-tailwind/react";
// import { CardDefaultInterface } from "../services/interfaces/CardDefaultInterface";
// import { DefaultImg } from "./DefaultImg";

// export function CardDefault({
//   title,
//   description,
//   image,
// }: CardDefaultInterface) {
//   return (
//     <Card className="flex flex-row bg-deep-orange-400">
//       <CardHeader
//         color="blue-gray"
//         className="w-96 h-52 mb-4"
//         floated={false}
//         shadow={false}
//       >
//         <DefaultImg image={image} />
//       </CardHeader>
//       <CardBody>
//         <Typography variant="h5" color="blue-gray" className="mb-2">
//           {title}
//         </Typography>
//         <Typography>{description}</Typography>
//       </CardBody>
//     </Card>
//   );
// }
