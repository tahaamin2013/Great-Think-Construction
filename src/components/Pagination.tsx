import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming you're using shadcn/ui

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => {
  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, '...', totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  return (
    <div className="flex space-x-2">
      {getPageNumbers().map((page, index) => (
        <Button
          variant="ghost"
          key={index}
          onClick={() => typeof page === 'number' && setCurrentPage(page)}
          className={`
            sm:px-4 sm:py-2
px-[0.7rem] py-1
            ${
            currentPage === page
              ? "bg-yellow-400 text-white"
              : "text-gray-800 hover:bg-gray-50"
          } ${typeof page !== 'number' ? 'cursor-default' : ''}`}
          disabled={typeof page !== 'number'}
        >
          {page}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;