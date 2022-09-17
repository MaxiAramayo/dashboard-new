import {
  setDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  getDocs,
  collection,
  where,
  query,
  arrayRemove,
} from "firebase/firestore";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
  uploadBytes,
} from "firebase/storage";
import { nanoid } from "nanoid";
import { useState } from "react";
import { db } from "../firebase/firebase";
import { storage } from "../firebase/firebase";

const useFirebase = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState([]);

  const addProducto = async (userDest, producto, opcion) => {
    console.log("empieza a añadir");
    if (opcion === true) {
      //SE AGREGA UN PRODUCTO CON IMAGEN -------------------------------------------
      try {
        setLoading((prev) => ({ ...prev, addProducto: true }));

        console.log(producto);
        console.log(producto.imagen[0]);
        console.log(opcion);

        const storageRef = ref(storage, `images/${producto.id}`);
        await uploadBytes(storageRef, producto.imagen);
        const url = await getDownloadURL(storageRef);

        const newProducto = {
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          descripcion: producto.descripcion,
          categoria: producto.categoria,
          urlImage: url,
        };

        console.log(newProducto);

        const dataRef = doc(db, "comercios", userDest);

        await updateDoc(dataRef, {
          productos: arrayUnion(newProducto),
        });

        console.log(newProducto);

        setData(
          data.map((item) => {
            if (item.id === userDest) {
              return {
                ...item,
                productos: [...item.productos, newProducto],
              };
            }
            return item;
          })
        );
        console.log("termina de agregar");
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading((prev) => ({ ...prev, addProducto: false }));
      }
    } else if (opcion === false) {
      //SE AGREGA UN PRODUCTO SIN IMAGEN -------------------------------------------

      try {
        setLoading((prev) => ({ ...prev, addProducto: true }));

        // console.log(producto);
        // console.log(opcion);

        const newProducto = {
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          descripcion: producto.descripcion,
          categoria: producto.categoria,
          urlImage: producto.imagen,
        };

        console.log(newProducto);

        const dataRef = doc(db, "comercios", userDest);

        await updateDoc(dataRef, {
          productos: arrayUnion(newProducto),
        });

        console.log(userDest);

        setData(
          data.map((item) => {
            if (item.email === userDest) {
              return {
                ...item,
                productos: [...item.productos, newProducto],
              };
            }
            return item;
          })
        );

        console.log(data);
        console.log("termina de agregar");
        console.log(producto.id);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading((prev) => ({ ...prev, addProducto: false }));
      }
    }
  };

  //ELIMINAR TODOS LOS PRODUCTOS DE UNA CATEGORIA
  const deleteProductosDeCategoria = async (user, DatosDelLocal) => {
    try {
      setLoading((prev) => ({ ...prev, deleteProductos: true }));
      const dataRef = doc(db, `comercios/${user}`);

      console.log(user, DatosDelLocal);

      const DatosLocal = {
        nombre: DatosDelLocal.nombre,
        descripcion: DatosDelLocal.descripcion,
        horario: DatosDelLocal.horario,
        instagram: DatosDelLocal.instagram,
        facebook: DatosDelLocal.facebook,
      };

      await updateDoc(dataRef, {
        nombre: DatosLocal.nombre,
        descripcion: DatosLocal.descripcion,
        horario: DatosLocal.horario,
        instagram: DatosLocal.instagram,
        facebook: DatosLocal.facebook,
      });

      setData(
        data.map((item) => {
          if (item.email === user.email) {
            item.nombre = DatosLocal.nombre;
            item.descripcion = DatosLocal.descripcion;
            item.horario = DatosLocal.horario;
            item.instagram = DatosLocal.instagram;
            item.facebook = DatosLocal.facebook;
            return item;
          }
          return item;
        })
      );
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, deleteProductos: false }));
    }
  };

  //eliminar prodcutos o categorias
  const deleteProducto = async (user, idProducto, opcion) => {
    console.log("empieza a eliminar");
    if (opcion === true) {
      //SE ELIMINA UN PRODUCTO CON IMAGEN -------------------------------------------

      console.log(opcion);
      console.log(idProducto);
      try {
        let B = false;
        setLoading((prev) => ({ ...prev, deleteProducto: true }));
        const dataRef = doc(db, `comercios/${user}`);

        const productos = data.find((item) => item.id === user).productos;

        const producto = productos.find((item) => item.id === idProducto);

        const imagenRef = ref(storage, `images/${producto.id}`);

        await deleteObject(imagenRef);

        await updateDoc(dataRef, {
          productos: arrayRemove(producto),
        }),
          (B = true);

        if (B === true) {
          setData(
            data.map((item) => {
              if (item.id === user) {
                item.productos = item.productos.filter(
                  (item) => item.id !== idProducto
                );
              }
              return item;
            })
          );
          console.log("temina el set data");
        }
        console.log(data);
        console.log("temina de eliminar");
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading((prev) => ({ ...prev, deleteProducto: false }));
      }
    } else if (opcion === false) {
      //SE ELIMINA UN PRODUCTO SIN IMAGEN -------------------------------------------
      try {
        setLoading((prev) => ({ ...prev, deleteProducto: true }));
        const dataRef = doc(db, `comercios/${user}`);

        const productos = data.find((item) => item.id === user).productos;

        const producto = productos.find((item) => item.id === idProducto);

        await updateDoc(dataRef, {
          productos: arrayRemove(producto),
        });

        setData(
          data.map((item) => {
            if (item.id === user) {
              item.productos = item.productos.filter(
                (item) => item.id !== idProducto
              );
            }
            return item;
          })
        );

        console.log(data);
        console.log("temina de eliminar");
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading((prev) => ({ ...prev, deleteProducto: false }));
      }
    }
  };

  const UpdateProductoConImagen = async (user, idProducto, producto) => {
    try {
      setLoading((prev) => ({ ...prev, deleteProducto: true }));
      const dataRef = doc(db, `comercios/${user}`);

      const productosAeliminar = data.find(
        (item) => item.id === user
      ).productos;

      const productoAEliminar = productosAeliminar.find(
        (item) => item.id === idProducto
      );

      const imagenRef = ref(storage, `images/${idProducto}`);

      await deleteObject(imagenRef);

      await updateDoc(dataRef, {
        productos: arrayRemove(productoAEliminar),
      });

      setData(
        data.map((item) => {
          if (item.id === user) {
            item.productos = item.productos.filter(
              (item) => item.id !== idProducto
            );
          }
          return item;
        })
      );
      console.log("termina de eliminar");
      console.log("comienza a añadir");

      const newProducto = {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        descripcion: producto.descripcion,
        categoria: producto.categoria,
        urlImage: producto.imagen,
      };

      console.log(newProducto);

      await updateDoc(dataRef, {
        productos: arrayUnion(newProducto),
      });

      console.log(user);

      setData(
        data.map((item) => {
          if (item.email === user) {
            return {
              ...item,
              productos: [...item.productos, newProducto],
            };
          }
          return item;
        })
      );
      console.log("termina de añadir");
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, deleteProducto: false }));
    }
  };

  // nuevo v

  const addStore = async (store) => {
    try {
      setLoading(true);
      const { nombre, nombreUsuario, whatsapp, email, password } = store;
      const newStore = {
        nombre,
        nombreUsuario,
        whatsapp,
        email,
        password,
        productos: [],
      };

      const docRef = doc(db, "comercios", newStore.email);

      await setDoc(docRef, newStore);
      setData([...data, newStore]);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  //TRAE UN COMERCIO POR ID
  const searchData = async (user) => {
    try {
      setLoading((prev) => ({ ...prev, searchData: true }));
      const dataRef = collection(db, "comercios");
      const q = query(dataRef, where("email", "==", user.email));
      const querySnapshot = await getDocs(q);
      const dataDB = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setData(dataDB);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, searchData: false }));
    }
  };

  // const deleteProductosDeCategoria = (user, categoria) => {
  //   try {
  //     setLoading((prev) => ({ ...prev, deleteProductos: true }));
  //     const dataRef = doc(db, `comercios/${user.email}`);

  //     console.log(user, categoria);

  //     let productosConCategoria = [];

  //     data.filter((item) =>
  //       item.productos.map((productos) => {
  //         if (productos.categoria === categoria) {
  //           console.log(productos);
  //           productosConCategoria = [...productosConCategoria, productos];
  //         }
  //       })
  //     );

  //     productosConCategoria.forEach(async (item) => {
  //       await updateDoc(dataRef, {
  //         productos: arrayRemove(item),
  //       });
  //     });

  //     setData(
  //       data.map((item) => {
  //         if (item.id === id) {
  //           item.productos = item.productos.filter(
  //             (item) => item.categoria !== categoria
  //           );
  //         }
  //         return item;
  //       })
  //     );
  //   } catch (error) {
  //     console.log(error);
  //     setError(error.message);
  //   } finally {
  //     setLoading((prev) => ({ ...prev, deleteProductos: false }));
  //   }
  // };

  return {
    addStore,
    data,
    loading,
    error,
    // addCategoria,
    addProducto,
    deleteProductosDeCategoria,
    deleteProducto,
    searchData,
    UpdateProductoConImagen,
  };
};

export default useFirebase;
