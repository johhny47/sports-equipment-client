import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const authContext = createContext();
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const [user,setUser] = useState(null)

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

          const mannageProfile =(name,image)=>{
                 
            return updateProfile(auth.currentUser,{
                displayName:name,photoURL:image
               
            } 
          )
          
          }
          const handleLogout=()=>{
            signOut(auth)
           }
           useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
             
                  if(currentUser){
                    setUser(currentUser)
                  }
                  else{
                    setUser(null)
                  }
                return ()=>{
                    unsubscribe 
                }
            })
          },[])
   
  const authInfo ={
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    mannageProfile,
    handleLogout,
    user,
    setUser,


  }
   
 
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
        
    );
};

export default AuthProvider;