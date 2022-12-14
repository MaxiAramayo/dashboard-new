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
import { nanoid } from "nanoid";
import { useState } from "react";
import { db } from "../firebase/firebase";

const useFirebase = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState([]);

  //viejo

  //AGREGAR CATEGORIA
  const addCategoria = async (user, categoria) => {
    try {
      setLoading((prev) => ({ ...prev, addCategoria: true }));
      const newCategoria = {
        nombre: categoria,
        id: nanoid(6),
      };

      const dataRef = doc(db, `comercios/${user.email}`);

      await updateDoc(dataRef, {
        categorias: arrayUnion(newCategoria),
      });
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, addCategoria: false }));
    }
  };

  //AGREGAR PRODUCTO
  /*  const addProducto = async (userDest, producto) => {
    try {
      setLoading((prev) => ({ ...prev, addProducto: true }));
      const newProducto = {
        id: nanoid(6),
        nombre: producto.nombre,
        precio: producto.precio,
        descripcion: producto.descripcion,
        categoria: producto.categoria,
      };

      const dataRef = doc(db, `comercios/${userDest}`);

      console.log(newProducto);

      await updateDoc(dataRef, {
        productos: arrayUnion(newProducto),
      });

      setData((prev) => ({
        ...prev,
        productos: [...prev.productos, newProducto],
      }));
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, addProducto: false }));
    }
  }; */

  const addProducto = async (userDest, producto) => {
    try {
      setLoading((prev) => ({ ...prev, addProducto: true }));
      const newProducto = {
        id: nanoid(6),
        nombre: producto.nombre,
        precio: producto.precio,
        descripcion: producto.descripcion,
        categoria: producto.categoria,
      };

      const dataRef = doc(db, "comercios", userDest);

      await updateDoc(dataRef, {
        productos: arrayUnion(newProducto),
      });

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
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, addProducto: false }));
    }
  };

  //ELIMINAR TODOS LOS PRODUCTOS DE UNA CATEGORIA
  const deleteProductosDeCategoria = (user, categoria) => {
    try {
      setLoading((prev) => ({ ...prev, deleteProductos: true }));
      const dataRef = doc(db, `comercios/${user.email}`);

      console.log(user, categoria);

      let productosConCategoria = [];

      data.filter((item) =>
        item.productos.map((productos) => {
          if (productos.categoria === categoria) {
            console.log(productos);
            productosConCategoria = [...productosConCategoria, productos];
          }
        })
      );

      productosConCategoria.forEach(async (item) => {
        await updateDoc(dataRef, {
          productos: arrayRemove(item),
        });
      });

      setData(
        data.map((item) => {
          if (item.id === id) {
            item.productos = item.productos.filter(
              (item) => item.categoria !== categoria
            );
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
    console.log(idProducto);
    if (opcion === true) {
      try {
        setLoading((prev) => ({ ...prev, deleteProducto: true }));
        const dataRef = doc(db, `comercios/${user}`);

        const productos = data.find((item) => item.id === user).productos;

        const producto = productos.find((item) => item.id === idProducto);

        console.log(producto);

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
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading((prev) => ({ ...prev, deleteProducto: false }));
      }
    } else if (opcion === false) {
      try {
        setLoading((prev) => ({ ...prev, deleteCategoria: true }));
        const dataRef = doc(db, `comercios/${user.email}`);

        const categorias = data.find((item) => item.id === id).categorias;

        const categoria = categorias.find((item) => item.id === idProducto);

        await updateDoc(dataRef, {
          categorias: arrayRemove(categoria),
        });

        setData(
          data.map((item) => {
            if (item.id === id) {
              item.categorias = item.categorias.filter(
                (item) => item.id !== idProducto
              );
            }
            return item;
          })
        );
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading((prev) => ({ ...prev, deleteCategoria: false }));
      }
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
  /* 
  const getStore = async (user) => {
    try {
      const docRef = doc(db, `comercios/${user.email}`);
      
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        setError(error.message);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }; */

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

  return {
    addStore,
    data,
    loading,
    error,
    addCategoria,
    addProducto,
    deleteProductosDeCategoria,
    deleteProducto,
    searchData,
  };
};

export default useFirebase;
