import { createContext, useEffect, useContext, useState, PropsWithChildren } from "react";
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  onAuthStateChanged, 
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential
} from "firebase/auth";
import { firebaseApp } from "./firebase-app";

const firebaseAuth = getAuth(firebaseApp);

declare type firebaseAuthContextType = {
  user: User | null,
  sign_Up: ({email, password}:{email: string, password: string}) => Promise<UserCredential>,
  sign_In: ({email, password}:{email: string, password: string}) => Promise<UserCredential>,
  sign_Out: () => Promise<void>,
}

const firebaseAuthContext = createContext({} as firebaseAuthContextType);

export const FirebaseAuthContextProvider = ({ children }:PropsWithChildren) => {
  const [user, setUser] = useState< User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged( firebaseAuth,(user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const sign_Up = async ({email, password}:{email: string, password: string}) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
  }

  const sign_In = async ({email, password}: {email: string, password: string}) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
  }

  const sign_Out = async () => {
    return signOut(firebaseAuth)
  };

  return (
    <firebaseAuthContext.Provider value={{ user, sign_Up, sign_In, sign_Out }}>
      {children}
    </firebaseAuthContext.Provider>
  )
}

export const useFirebaseAuth = () => {
  const {user, sign_Up, sign_In, sign_Out } = useContext(firebaseAuthContext);
  return { user, sign_Up, sign_In, sign_Out };
}