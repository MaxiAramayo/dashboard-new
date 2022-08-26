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
  Stack,
  Textarea,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { validarCat, valdarEditProduct } from "../functions/validar";
import { ref, getStorage, deleteObject } from "firebase/storage";
import { nanoid } from "nanoid";
import Compressor from "compressorjs";

const EditFormProducto = ({
  isOpen,
  onClose,
  addProducto,
  addCategoria,
  nombre,
  precio,
  descripcion,
  categoria,
  data,
  id,
  deleteProducto,
  urlImage,
}) => {
  const { user } = useAuth();

  const storage = getStorage();

  const userDest = user.email;

  // console.log(nombre, precio, categoria, descripcion, id, urlImage);

  const [showInput, setShowInput] = useState(false);
  const [addImage, setAddImage] = useState(false);
  const [comprobarEliminarImagen, setComprobarEliminarImagen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // let Bandera = false;

  const onSubmit = (producto) => {
    if (!valdarEditProduct(producto, data, nombre)) {
      console.log(producto);

      console.log(urlImage);

      if (urlImage === false) {
        console.log("No hay imagen");
        if (producto.imagen) {
          console.log("se quiere añadir una imagen");

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
              deleteProducto(userDest, id, false);
              addProducto(userDest, newProducto, true);
            },
            error(err) {
              console.log(err);
            },
          });
        } else {
          console.log("no quiere añadir una imagen");
          const newProducto = {
            nombre: producto.nombre,
            precio: producto.precio,
            categoria: producto.categoria,
            descripcion: producto.descripcion,
            imagen: false,
            id: nanoid(6),
          };
          deleteProducto(userDest, id, false);
          addProducto(userDest, newProducto, false);
        }
      } else {
        console.log("Si hay imagen");
        if (producto.imagen) {
          console.log("se quiere añadir una imagen");

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
              deleteProducto(userDest, id, true);
              addProducto(userDest, newProducto, true);
            },
            error(err) {
              console.log(err);
            },
          });
        } else {
          if (comprobarEliminarImagen === true) {
            console.log("quiere eliminar una imagen");
            const newProducto = {
              nombre: producto.nombre,
              precio: producto.precio,
              categoria: producto.categoria,
              descripcion: producto.descripcion,
              imagen: false,
              id: nanoid(6),
            };
            deleteProducto(userDest, id, true);
            addProducto(userDest, newProducto, false);
          }else{
            console.log("solo quiere editar el texto");

            const newProducto = {
              nombre: producto.nombre,
              precio: producto.precio,
              categoria: producto.categoria,
              descripcion: producto.descripcion,
              imagen: urlImage,
              id: nanoid(6),
            };
            deleteProducto(userDest, id, false);
            addProducto(userDest, newProducto, false);
          }
        }
      }

      // if (comprobarEliminarImagen === false) {
      //   const newProducto = {
      //     nombre: producto.nombre,
      //     precio: producto.precio,
      //     categoria: producto.categoria,
      //     descripcion: producto.descripcion,
      //     imagen: false,
      //     id: nanoid(6),
      //   };
      //   console.log("antes del delete producto");
      //   deleteProducto(userDest, id, true);
      //   console.log("despues del delete producto");
      //   addProducto(userDest, newProducto, false);
      //   console.log("despues del add producto");
      // } else {
      // if (addImage === true) {
      //   new Compressor(producto.imagen[0], {
      //     quality: 0.5,

      //     success(result) {
      //       const newProducto = {
      //         nombre: producto.nombre,
      //         precio: producto.precio,
      //         categoria: producto.categoria,
      //         descripcion: producto.descripcion,
      //         imagen: result,
      //         id: nanoid(6),
      //       };

      //       if (urlImage === false) {
      //         deleteProducto(userDest, id, false);
      //       } else {
      //         deleteProducto(userDest, id, true);
      //       }

      //       addProducto(userDest, newProducto, true);
      //     },
      //     error(err) {
      //       console.log(err);
      //     },
      //   });
      // } else {
      //   const newProducto = {
      //     nombre: producto.nombre,
      //     precio: producto.precio,
      //     categoria: producto.categoria,
      //     descripcion: producto.descripcion,
      //     imagen: urlImage,
      //     id: id,
      //   };
      //   deleteProducto(userDest, id, false);
      //   addProducto(userDest, newProducto, false);
      // }
      // }
    } else {
      alert("El nombre del producto ya existe");
    }

    onClose();
  };

  const editarImagen = async () => {
    setShowInput(true);
    setAddImage(true);
    /*  const imagenRef = ref(storage, `images/${id}`);
    await deleteObject(imagenRef); */
  };

  const eliminarImagen = async () => {
    // const imagenRef = ref(storage, `images/${id}`);
    // await deleteObject(imagenRef);
    setComprobarEliminarImagen(true);
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Editar producto</DrawerHeader>

        <DrawerBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={5}>
              <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input
                  {...register("nombre", {
                    required: true,
                  })}
                  defaultValue={nombre}
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
                  defaultValue={descripcion}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Precio</FormLabel>
                <Input
                  type="number"
                  {...register("precio", {
                    required: true,
                  })}
                  defaultValue={precio}
                />

                {errors.precio?.type === "required" && (
                  <Alert status="error">
                    <AlertIcon />
                    Este Campo es obligatorio
                  </Alert>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Categoria</FormLabel>
                <Input
                  {...register("categoria", { required: true })}
                  defaultValue={categoria}
                />
                {errors.categoria?.type === "required" && (
                  <Alert status="error">
                    <AlertIcon />
                    Este Campo es obligatorio
                  </Alert>
                )}
              </FormControl>

              <Box display="flex" alignItems="center">
                {/*   <FormControl>
                  <FormLabel>Imagen</FormLabel>
                  <Input {...register("imagen")} type="file" 
                   border="none"
                    
                  />
                </FormControl> */}

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

                    <Button onClick={() => editarImagen()}>
                      Editar imagen
                    </Button>

                    <Button onClick={() => eliminarImagen()}>
                      Eliminar imagen
                    </Button>
                  </>
                )}
              </Box>

              <Button type="submit">Editar el producto</Button>
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

export default EditFormProducto;
