import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import Navbar from "../Components/Shared/Navbar/Navbar";
import {useLocation} from 'react-router-dom'


const Layout = () => {
    const location = useLocation()
    

    return (
        <div className="overflow-hidden ">
              {
                location.pathname == '/screen' || <Navbar></Navbar>
              }
            
            <Outlet></Outlet>
            {
                location.pathname == '/screen' || <Footer></Footer>
              }
            
            <Helmet>
        <meta name="description" content="Zero commission, competitive rates, and the convenience of click
& collect at M4. Choose from over 70 currencies for your
next adventure." />
      </Helmet>
        </div>
    );
};

export default Layout;