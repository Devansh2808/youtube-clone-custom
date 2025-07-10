
/**
 * Layout component that provides the main structure for the application.
 * 
 * - Integrates the Sidebar and main content area.
 * - Uses Redux state to determine if the sidebar is open and adjusts the main content's margin accordingly.
 * - Applies responsive and animated styling for smooth sidebar transitions.
 * 
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be rendered inside the main area.
 * @returns {JSX.Element} The layout structure with sidebar and main content.
 */
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const { isSidebarOpen } = useSelector((state) => state.ui);

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <main
          className={`
            flex-1 min-h-screen p-4 mt-16 transition-all duration-300
            ${isSidebarOpen ? 'lg:ml-64' : 'ml-0'}
          `}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
