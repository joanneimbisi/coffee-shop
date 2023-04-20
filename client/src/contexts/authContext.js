import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
     const [loading, setLoading] = useState(true)
    // This comes in while trying to determine if there's a logged in user

    const navigate = useNavigate()

    useEffect(() => {
      fetch('/auth')
      .then(res => {
        if(res.ok){
          res.json()
          .then(user => {
            user && user.id ? setCurrentUser(user) : navigate('/login');
            setLoading(false);
          })
        } else {
          setLoading(false);
        }
      })
    }, [navigate]);

      if (loading) return "Loading...";

    // makes determination if logged in to let user see the page OR send user to login page until we're done loading by trying to load user from the session and if there's no user, it sends you to login page
    // 



    // Basically creates a provider around the children
    // The .Provider is from React is through createContext()
    return <AuthContext.Provider value={{ currentUser, loading, setCurrentUser }}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;



// query methods
// assosiations
// dynamic routing