import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  // handle page change:
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  // add page button:
  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`btn btn-xs sm:btn-md border-none join-item ${
          activeClass ? "bg-base-300 border-base-300 " : ""
        }`}>
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    // first:
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

    //left side  dots:
    if (page > 3) {
      pageButtons.push(
        <button className='join-item btn btn-xs sm:btn-md'>...</button>
      );
    }

    // current page:
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }

    // right side dots:
    if (page < pageCount - 1) {
      pageButtons.push(
        <button className='join-item btn btn-xs sm:btn-md' key='dots-2'>
          ...
        </button>
      );
    }

    // last:
    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    );

    return pageButtons;
  };

  // return:
  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        {/* prev page */}
        <button
          className='btn btn-xs sm:btn-md join-item'
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}>
          Prev
        </button>

        {renderPageButtons()}

        {/* next page */}
        <button
          className='btn btn-xs sm:btn-md join-item'
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}>
          Next
        </button>
      </div>
    </div>
  );
};
export default ComplexPaginationContainer;
