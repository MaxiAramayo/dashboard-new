import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import Compressor from "compressorjs";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { storage } from "../firebase/firebase";
import { validarCat } from "../functions/validar";

const FormProducto = ({
  isOpen,
  onClose,
  addProducto,
  // addCategoria,
  data,
  addFile,
}) => {
  const { user } = useAuth();
  const [comprobarSiTieneImagen, setComprobarSiTieneImagen] = useState(false);

  const [urlImage, setUrlImage] = useState("false");

  const userDest = user.email;

  const [generacionId, setGeneracionId] = useState(0);

  useEffect(() => {
    setGeneracionId(nanoid(6));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (producto) => {
    if (!validarCat(producto, data)) {
      if (producto.imagen[0]) {
        console.log("tiene imagen");
        new Compressor(producto.imagen[0], {
          quality: 0.5,

          success(result) {
            const newProducto = {
              nombre: producto.nombre,
              precio: producto.precio,
              categoria: producto.categoria,
              descripcion: producto.descripcion,
              imagen: result,
              id: nanoid(6),
            };
            const tieneImagen = false;
            addProducto(userDest, newProducto, true, tieneImagen);
          },
          error(err) {
            console.log(err);
          },
        });
      } else {
        console.log("no tiene imagen");
        const newProducto = {
          nombre: producto.nombre,
          precio: producto.precio,
          categoria: producto.categoria,
          descripcion: producto.descripcion,
          imagen: false,
          id: nanoid(6),
        };
        const tieneImagen = false;
        addProducto(userDest, newProducto, false, tieneImagen);
      }
    } else {
      alert("El nombre del producto ya existe");
    }

    onClose();
  };

  const obj = {};

  data.map((item) => {
    {
      if (item.productos.length > 0) {
        item.productos.forEach((producto) => {
          const { categoria } = producto;
          obj[categoria] = obj[categoria]
            ? [...obj[categoria], producto]
            : [producto];
        });
      } else {
        return null;
      }
    }
  });

  console.log(data[0].productos[0]);
  console.log(data);

  const [abrirCategoriaNueva, setAbrirCategoriaNueva] = useState(false);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
      <DrawerOverlay />
      <DrawerContent fontFamily="Poppins">
        <DrawerCloseButton />
        <DrawerHeader>Agregar producto</DrawerHeader>

        <DrawerBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={5}>
              <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input
                  {...register("nombre", {
                    required: true,
                  })}
                  placeholder="Nombre"
                />

                {errors.nombre?.type === "required" && (
                  <Alert status="error">
                    <AlertIcon />
                    Este Campo es obligatorio
                  </Alert>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Descripcion</FormLabel>
                <Textarea
                  {...register("descripcion")}
                  placeholder="Descripcion"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Precio</FormLabel>
                <Input
                  type="number"
                  {...register("precio", {
                    required: true,
                  })}
                  placeholder="Precio"
                />

                {errors.precio?.type === "required" && (
                  <Alert status="error">
                    <AlertIcon />
                    Este Campo es obligatorio
                  </Alert>
                )}
              </FormControl>

              <Box
                flexDirection="row"
                justifyContent="space-around"
                alignItems="center"
                display="flex"
                p={2}
                rounded="xl"
                gap={3}
              >
                <FormLabel>Categoria</FormLabel>

                {data[0].productos[0] ? ( //si no hay categorias no se muestra el select de categorias y se muestra el input para crear una nueva categoria
                  <>
                    {abrirCategoriaNueva ? (
                      <>
                        <FormControl>
                          <Input
                            {...register("categoria", { required: true })}
                            placeholder="Agregar una Categoria"
                            width="100%"
                          />
                        </FormControl>
                        {/* {errors.categoria?.type === "required" && (
                          <Alert status="error">
                            <AlertIcon />
                            Este Campo es obligatorio
                          </Alert>
                        )} */}

                        <Button
                          onClick={() => {
                            setAbrirCategoriaNueva(false);
                          }}
                          colorScheme="blue"
                          variant="outline"
                        >
                          Cancelar
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          onClick={() => {
                            setAbrirCategoriaNueva(true);
                          }}
                          colorScheme="blue"
                          variant="outline"
                        >
                          new Category
                        </Button>

                        <FormControl mt={0} mb="0">
                          <Select
                            {...register("categoria", { required: true })}
                            placeholder="Seleccione una categoria"
                            width="80%"
                          >
                            {Object.keys(obj).map(
                              (item) => (
                                <option value={item}>{item}</option>
                              ),
                              []
                            )}
                          </Select>
                        </FormControl>
                      </>
                    )}

                    {/* {errors.categoria?.type === "required" && (
                      <Alert status="error">
                        <AlertIcon />
                        Este Campo es obligatorio
                      </Alert>
                    )} */}

                    {/* solo se debe escribir una categoria */}
                  </>
                ) : (
                  <FormControl>
                    <Input
                      {...register("categoria", { required: true })}
                      placeholder="Agregar una Categoria"
                      width="100%"
                    />
                    {errors.categoria?.type === "required" && (
                      <Alert status="error">
                        <AlertIcon />
                        Este Campo es obligatorio
                      </Alert>
                    )}
                  </FormControl>
                )}

                {errors.categoria?.type === "required" && (
                  <Alert status="error">
                    <AlertIcon />
                    Este Campo es obligatorio
                  </Alert>
                )}
              </Box>

              <Box display="flex " justifyContent="center">
                <Input
                  type="file"
                  onClick={() => setComprobarSiTieneImagen(true)}
                  {...register("imagen")}
                />
              </Box>

              <Button type="submit">Agregar producto</Button>
            </Stack>
          </form>
        </DrawerBody>

        {/*  <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="blue">Agregar</Button>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};

export default FormProducto;
