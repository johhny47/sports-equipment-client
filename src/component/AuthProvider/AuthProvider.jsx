import { createContext } from "react";
import auth from "../../firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const authContext = createContext();
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()

    const handleRegister =(email,password)=>
        {
         return createUserWithEmailAndPassword(auth,email,password)
         
        }
        
        const handleLogin = (email,passward)=>{
          return signInWithEmailAndPassword(auth,email,passward)
        }

        const handleGoogleLogin =()=>{
            return signInWithPopup(auth, googleProvider)
          }
   
  const authInfo ={
    handleRegister,
    handleLogin,
    handleGoogleLogin
   


  }
   
 
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
        
    );
};

export default AuthProvider;