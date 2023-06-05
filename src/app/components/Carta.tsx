import { FC } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

interface Parametros {
  titulo: string;
  parrafo : string;
  textoBoton: string;
}

const Carta: FC<Parametros> = ({ titulo, parrafo, textoBoton }) => {
  return (
    <Card className="mt-6 w-96">
      <CardBody className="bg-gray-900">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {titulo}
        </Typography>
        <Typography>{parrafo}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>{textoBoton}</Button>
      </CardFooter>
    </Card>
  );
};

export default Carta;
