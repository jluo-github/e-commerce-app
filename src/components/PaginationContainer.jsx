import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();

  const { pageCount, page } = meta.pagination;

  // array of pages: [1,2,3,4,5]
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);

    // console.log("pageNumber", pageNumber);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        {/* prev button */}
        <button
          className='btn btn-xs sm:btn-md join-item'
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}>
          Prev
        </button>

        {/* page */}
        {pages.map((pageNumber) => {
          return (
            <button
              onClick={() => handlePageChange(pageNumber)}
              key={pageNumber}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNumber === page ? "bg-base-300 border-base-300" : ""
              }`}>
              {pageNumber}
            </button>
          );
        })}

        {/* next button */}
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
export default PaginationContainer;
