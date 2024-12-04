import { createContext } from "react";
import auth from "../../firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";

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
            signOut( auth)
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