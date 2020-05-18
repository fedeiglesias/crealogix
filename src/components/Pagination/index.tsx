import * as React from 'react';
import style from './style.css';

interface IPagination {
  totalItems: number;
  itemsPerPage: number;
  actualPage: number;
  changePage: Function;
  className: string;

  // n extra pageThumbs to left and
  // n extra pagethumbs to right
  sideExtraThumbs: number;
}

const Pagination: React.FC<IPagination> = ({
  totalItems,
  itemsPerPage,
  actualPage,
  changePage,
  sideExtraThumbs = 2,
  className,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const totalThumbs = sideExtraThumbs * 2 + 1;
  const pageGenerator = (
    from: number,
    to: number
  ): Array<number> => {
    const toExeed =
      to > totalPages ? Math.abs(totalPages - to) : 0;
    const fromExeed = from < 1 ? Math.abs(from - 1) : 0;

    // If from is negative add it pages to 'to'
    to = to + fromExeed - toExeed;
    from = from - toExeed + fromExeed;

    const pages = [];
    for (let page = from; page <= to; page++) {
      pages.push(page);
    }
    return pages;
  };

  const tumbsPages = (): Array<number> => {
    if (totalPages <= totalThumbs)
      return pageGenerator(1, totalPages);

    return pageGenerator(
      actualPage - sideExtraThumbs,
      actualPage + sideExtraThumbs
    );
  };

  const handlePrevNext = (action: string): void => {
    if (action === 'prev' && actualPage > 1)
      changePage(actualPage - 1);
    if (action === 'next' && actualPage < totalPages)
      changePage(actualPage + 1);
  };

  return (
    <div className={[style.root, className].join(' ')}>
      <button
        className={style.prev}
        onClick={(): void => {
          handlePrevNext('prev');
        }}
      >
        &#11013;
      </button>
      {tumbsPages().map(page => (
        <button
          key={page}
          data-active={actualPage === page ? true : false}
          onClick={(): void => {
            changePage(page);
          }}
        >
          {page}
        </button>
      ))}
      <button
        className={style.next}
        onClick={(): void => {
          handlePrevNext('next');
        }}
      >
        &#11157;
      </button>
    </div>
  );
};

export default Pagination;
