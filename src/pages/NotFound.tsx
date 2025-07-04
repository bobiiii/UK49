
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Head from '../components/Head';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Head
        title="404 - Page Not Found | UK49s Results"
        description="The page you're looking for could not be found. Return to UK49s Results homepage for the latest lottery results and information."
        keywords="404, page not found, UK49s Results, error page"
        canonical={`https://lucky-number-finder-uk.lovable.app/${location.pathname}`}
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
