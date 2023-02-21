import React from 'react'; //full component not needed
import {
    onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '@/lib/firebase/initFIrebase';
import Spinner from '@/components/spinner';


export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({
    children,
}: any) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: any) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <Spinner /> : children}
        </AuthContext.Provider>
    );
};