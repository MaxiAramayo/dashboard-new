import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const Configuracion = ({ user, data, error, deleteProductosDeCategoria }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // console.log(data);
  // console.log(user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [nombre, nombreUsuario, descripcion, email, whatsapp] = data[0];

  // console.log(nombre, nombreUsuario, descripcion, email, whatsapp);

  const onSubmit = (DatosComercio) => {
    // console.log(DatosComercio);
    deleteProductosDeCategoria(user, DatosComercio);
  };

  const onSubmitWpp = (DatosWpp) => {
    console.log(DatosWpp);
  };

  return (
    <>
      <Box
        w="100%"
        h="100%"
        bg="blue.100"
        borderRadius="lg"
        boxShadow="lg"
        p={4}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Stack spacing={4}>
          {data?.map((item) => (
            <>
              <label>Nombre del local - {item.nombre} -</label>
              <label>Descripcion - {item.descripcion} -</label>
              <label>Horarios: {item.horario}</label>
              <label>Mail del local {item.email}</label>
              <label>Whatsapp del local {item.whatsapp}</label>
            </>
          ))}
        </Stack>
      </Box>

      <Box
        mt={4}
        w="100%"
        h="100%"
        bg="blue.100"
        borderRadius="lg"
        boxShadow="lg"
        p={4}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        {data?.map((item) => (
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack gap={5}>
                <FormControl>
                  <FormLabel>Nombre del Local</FormLabel>
                  <Input
                    bg="white"
                    {...register("nombre", {
                      required: true,
                    })}
                    defaultValue={item.nombre}
                  />

                  {errors.nombre?.type === "required" && (
                    <Alert status="error">
                      <AlertIcon />
                      Este Campo es obligatorio
                    </Alert>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel>Descripcion del local</FormLabel>
                  <Textarea
                    bg="white"
                    {...register("descripcion")}
                    defaultValue={item.descripcion}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Horarios del Local</FormLabel>
                  <Input
                    bg="white"
                    {...register("horario", {
                      required: true,
                    })}
                    defaultValue={item.horario}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Link de Instagram del Local</FormLabel>
                  <Input
                    bg="white"
                    {...register("instagram", {
                      required: true,
                    })}
                    defaultValue={item.instagram}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Link de facebook del Local</FormLabel>
                  <Input
                    bg="white"
                    {...register("facebook", {
                      required: true,
                    })}
                    defaultValue={item.facebook}
                  />
                </FormControl>

                <Button type="submit" bg={"white"}>
                  Guardar Datos
                </Button>
              </Stack>
            </form>

            <form onSubmit={handleSubmit(onSubmitWpp)}>
              <Stack spacing={4} mt={20}>
                <FormControl>
                  <FormLabel>Modificar Numero de Whatsapp</FormLabel>
                  <Input
                    bg="white"
                    {...register("whatsapp", {
                      required: true,
                    })}
                    defaultValue={item.whatsapp}
                  />
                </FormControl>

                <Button type="submit" bg={"whatsapp.100"}>
                  Editar el numero de Whatsapp
                </Button>
              </Stack>
            </form>
          </>
        ))}
      </Box>
    </>
  );
};

{
  /* <Box display="flex" alignItems="center">
              {showInput ? (
                <FormControl>
                  <FormLabel>Imagen</FormLabel>
                  <Input {...register("imagen")} type="file" border="none" />
                </FormControl>
              ) : (
                <>
                  <Image
                    src={urlImage ? urlImage : "/img/no-image.png"}
                    alt={nombre}
                    width="120px"
                    height="120px"
                    rounded="md"
                    objectFit="cover"
                  />

                  <Button onClick={() => editarImagen()}>Editar imagen</Button>

                  <Button onClick={() => eliminarImagen()}>
                    Eliminar imagen
                  </Button>
                </>
              )}
            </Box> */
}

export default Configuracion;
