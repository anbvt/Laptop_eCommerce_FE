import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Navbar from "../Admin/Navbar";
import SideMenu from "../Admin/Sidebar";

const AdminLayout = ({ children }: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cookie, setCookie] = useCookies(['admin']);
    const router = useNavigate();
    useEffect(() => {
        if (!cookie.admin) {
            router("/admin/login")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            {
                cookie.admin && <div className="container-fluid p-0" >
                    <Navbar />
                    <div className="row">
                        <SideMenu />
                        <div className="col">
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>

    );
}

export default AdminLayout;