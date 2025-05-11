'use client'
import Topbar from '../component/Topbar';
import Footer from '../component/Footer';
import Top from '../section/topcard';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <div>
        <Topbar />
        <Top />
        {children}
        <Footer />
    </div>
  </>
);

export default Layout;

