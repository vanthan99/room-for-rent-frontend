import Footer from "../../components/Footer";
import Header from "../../components/Header";

function AdminLayout({children}:any) {
    return (
        <>
        <Header />
        <main>
            this is Admin layout
            {children}
        </main>
        <Footer />
    </>
    );
}

export default AdminLayout;