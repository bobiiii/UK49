
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

const PredictionsMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Link
      to="/predictions"
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        currentPath === '/predictions'
          ? 'bg-blue-100 text-blue-700'
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      <TrendingUp className="h-4 w-4 mr-2" />
      Predictions
    </Link>
  );
};

export default PredictionsMenu;
