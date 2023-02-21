import Navbar from "./navbar";
import { AuthContextProvider } from '@/context/authContext';


export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
