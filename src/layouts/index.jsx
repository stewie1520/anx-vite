import Footer from './footer';
import Sidebar from './sidebar';
import Main from './main';

const Layout = () => {
  return (
    <>
      <div className="flex relative">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
