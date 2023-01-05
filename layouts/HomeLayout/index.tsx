import Footer from "../../components/Footer";
import Header from "../../components/Header";

function HomeLayout({ children }:any) {
    return (
        <>
            <Header />
            This is Homelayout
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default HomeLayout;