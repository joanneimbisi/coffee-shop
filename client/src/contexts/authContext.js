import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
     const [loading, setLoading] = useState(true)
   

    const navigate = useNavigate()

    useEffect(() => {
      fetch('/auth')
      .then(res => {
        if(res.ok){
          res.json()
          .then(user => {
            if (user && user.id) {
              setCurrentUser(user)
            }
            setLoading(false);
          })
        } else {
          setLoading(false);
        }
      })
    }, [navigate]);


    return <AuthContext.Provider value={{ currentUser, loading, setCurrentUser }}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;


