import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";
import { env } from "./config";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
  let navigate = useNavigate();
  let [cart, setCart] = useState([]);
  let [data, setData] = useState([]);
  let [finalPay, setFinalpay] = useState([]);
  const [total, setTotal] = useState(0);
  let [loading, setloading] = useState(false);
  let [loadings, setloadings] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let products = await axios.get(`${env.api}/product/products`, {
      headers: {
        authorization: window.localStorage.getItem("Token"),
      },
    });
    setData(products.data.products);
  };

  const getUserdata = async (name, email, roll) => {
    let val = {};
    val.name = name;
    val.email = email;
    val.roll = roll;

    window.localStorage.setItem("name", name);
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("roll", roll);
  };

  const editData = async (id, values) => {
    setloadings(true);
    let val = await axios.put(`${env.api}/product/edit-product/${id}`, values, {
      headers: {
        authorization: window.localStorage.getItem("Token"),
      },
    });
    if (val.data.statusCode === 200) {
      setloadings(false);
      toast.success("Edited successfully");

      getData();

      navigate("/layout/dashboard/view-product");
    }

    if (val.data.statusCode === 401) {
      toast.warn("Token Expried");
    }
  };

  const deleteData = async (id) => {
    let del = await axios.delete(`${env.api}/product/delete-product/${id}`, {
      headers: {
        authorization: window.localStorage.getItem("Token"),
      },
    });
    getData();
    if (del.data.statusCode === 200) {
      toast.success(del.data.message);
    }
    if (del.data.statusCode === 401) {
      toast.warn(del.data.message);
    }
  };

  const addData = async (values) => {
    setloading(true);
    let val = await axios.post(`${env.api}/product/add-product`, values, {
      headers: {
        authorization: window.localStorage.getItem("Token"),
      },
    });
    if (val.data.statusCode === 201) {
      setloading(false);
      toast.success(val.data.message);
      getData();
      navigate("/layout/dashboard/view-product");
    }
  };

  return (
    <UserContext.Provider
      value={{
        cart,
        setCart,
        data,
        total,
        setTotal,
        finalPay,
        setFinalpay,
        getUserdata,
        getData,
        editData,
        deleteData,
        addData,
        loading,
        loadings,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
