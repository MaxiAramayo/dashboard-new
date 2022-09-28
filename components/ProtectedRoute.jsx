import React, { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/404");
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
