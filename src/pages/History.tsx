import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Head from '../components/Head';
import LotteryBalls from '../components/LotteryBalls';
import { Calendar, Clock, Filter, Download, Search } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const History = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchDate, setSearchDate] = useState('');
  const resultsPerPage = 20;
  
  // Mock historical results data - extended for history
  const allResults = Array.from({ length: 200 }, (_, index) => {
    const date = new Date('2024-06-30');
    date.setDate(date.getDate() - Math.floor(index / 2));
    const isLunchtime = index % 2 === 1;
    
    return {
      id: index + 1,
      date: date.toISOString().split('T')[0],
      draw: isLunchtime ? 'Lunchtime' : 'Teatime',
      time: isLunchtime ? '12:49' : '17:49',
      numbers: Array.from({ length: 6 }, () => Math.floor(Math.random() * 49) + 1).sort((a, b) => a - b),
      boosterBall: Math.floor(Math.random() * 49) + 1
    };
  });

  const filteredResults = allResults.filter(result => {
    const matchesFilter = selectedFilter === 'all' || result.draw.toLowerCase() === selectedFilter;
    const matchesDate = !searchDate || result.date.includes(searchDate);
    return matchesFilter && matchesDate;
  });

  const totalPages = Math.ceil(filteredResults.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const currentResults = filteredResults.slice(startIndex, startIndex + resultsPerPage);

  return (
    <Layout>
      <Head 
        title="Complete UK49s Results History & Archive"
        description="Browse the complete UK49s lottery history archive with advanced search and filtering options. Find historical results by date, draw type, and more from our comprehensive database."
        keywords="UK49s history, lottery archive, historical results, search results, filter results, complete history, UK49s database, past draws"
        canonical="https://lucky-number-finder-uk.lovable.app/history"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 overflow-x-hidden">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">UK49s History & Archive</h1>
          <p className="text-lg sm:text-xl text-gray-600">Easily explore the full uk49s history results using our advanced search tool. Start by choosing the draw ( lunchtime or teatime ) then select a date. The previous results will load automatically based on your selection. You can also export the data for your own records. For the most recent winning numbers, visit our <Link to="/" className="text-blue-600 hover:text-blue-800 underline">UK49s latest results</Link> page.</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedFilter}
                onChange={(e) => {
                  setSelectedFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded-md px-3 py-2 bg-white w-full"
              >
                <option value="all">All Draws</option>
                <option value="lunchtime">Lunchtime Only</option>
                <option value="teatime">Teatime Only</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-gray-500" />
              <input
                type="date"
                value={searchDate}
                onChange={(e) => {
                  setSearchDate(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                placeholder="Search by date"
              />
            </div>

            <div className="flex items-center justify-center">
              <span className="text-sm text-gray-600">
                Total: {filteredResults.length} results
              </span>
            </div>

            <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
          </div>
        </div>

        {/* Results Table for Desktop */}
        <div className="hidden md:block bg-white rounded-lg shadow-md mb-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Draw</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Numbers</TableHead>
                <TableHead>Bonus</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentResults.map((result) => (
                <TableRow key={result.id}>
                  <TableCell className="font-medium">{result.date}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      result.draw === 'Lunchtime' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {result.draw}
                    </span>
                  </TableCell>
                  <TableCell>{result.time}</TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      {result.numbers.map((num, idx) => (
                        <div key={idx} className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {num}
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {result.boosterBall}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Results Cards for Mobile */}
        <div className="md:hidden grid gap-4 mb-6">
          {currentResults.map((result) => (
            <div key={result.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center mb-3">
                <div className={`px-3 py-2 rounded-full text-sm font-bold ${
                  result.draw === 'Lunchtime' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {result.draw}
                </div>
                <span className="font-bold text-sm">{result.date}</span>
              </div>
              <div className="flex justify-center overflow-hidden">
                <LotteryBalls 
                  numbers={result.numbers} 
                  boosterBall={result.boosterBall}
                  size="small"
                  mobileLayout={true}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination className="mb-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
            
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
              return (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    onClick={() => setCurrentPage(pageNum)}
                    isActive={currentPage === pageNum}
                    className="cursor-pointer"
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Archive Statistics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <span className="font-medium text-gray-700 block">Total Results:</span>
              <span className="text-blue-600 font-bold text-lg">{allResults.length}</span>
            </div>
            <div className="text-center">
              <span className="font-medium text-gray-700 block">Filtered Results:</span>
              <span className="text-purple-600 font-bold text-lg">{filteredResults.length}</span>
            </div>
            <div className="text-center">
              <span className="font-medium text-gray-700 block">Current Page:</span>
              <span className="text-green-600 font-bold text-lg">{currentPage} of {totalPages}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default History;
