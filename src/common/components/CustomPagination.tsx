import * as React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"; // Adjust this import path if needed

interface CustomPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  // The 'limit' prop is not directly used in the pagination logic itself,
  // but it's good practice to know it exists for context.
  // We'll use a siblingCount to determine how many page numbers to show around the current page.
  siblingCount?: number;
}

export default function CustomPagination({
  totalPages,
  currentPage,
  onPageChange,
  siblingCount = 1,
}: CustomPaginationProps) {

  // Memoize the calculation of the pagination range to avoid re-calculating on every render
  const paginationRange = React.useMemo(() => {
    const totalPageNumbers = siblingCount + 5; // siblingCount + firstPage + lastPage + currentPage + 2*ellipsis

    // Case 1: If the number of pages is less than the page numbers we want to show
    if (totalPageNumbers >= totalPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftEllipsis = leftSiblingIndex > 2;
    const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    // Case 2: No left ellipsis, but right ellipsis
    if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, '...', totalPages];
    }

    // Case 3: No right ellipsis, but left ellipsis
    if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = Array.from({ length: rightItemCount }, (_, i) => totalPages - rightItemCount + i + 1);
      return [firstPageIndex, '...', ...rightRange];
    }

    // Case 4: Both left and right ellipsis
    if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      let middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i);
      return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
    }

    // Fallback case (should be unreachable)
    return [];

  }, [totalPages, currentPage, siblingCount]);

  // --- Event Handlers ---
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // If there's only one page, don't render the pagination component
  if (totalPages <= 1) {
    return null;
  }

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePreviousPage();
            }}
            // Disable the button if on the first page
            className={currentPage === 1 ? 'pointer-events-none text-muted-foreground' : ''}
          />
        </PaginationItem>

        {/* Page Number Links */}
        {paginationRange.map((pageNumber, index) => {
          // If the page number is an ellipsis, render the ellipsis component
          if (typeof pageNumber === 'string') {
            return <PaginationEllipsis key={`ellipsis-${index}`} />;
          }

          // Otherwise, render a page link
          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(pageNumber);
                }}
                isActive={currentPage === pageNumber}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNextPage();
            }}
            // Disable the button if on the last page
            className={currentPage === totalPages ? 'pointer-events-none text-muted-foreground' : ''}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}