import React from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import { BiCaretUpSquare, BiCaretDownSquare } from 'react-icons/bi'
import { COLUMNS } from './Columns'
import { GlobalFilter } from './GlobalFilter';
import { Card } from 'react-bootstrap';
function UserProgramsList({ programs: data, name }) {

    const columns = React.useMemo(() => COLUMNS, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state,
        setGlobalFilter,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
    } = useTable({
        columns,
        data,
    },
        useGlobalFilter,
        useSortBy,
        usePagination);

    const { globalFilter, pageIndex, pageSize } = state;

    return (
        <>
            <div className="d-flex align-items-center py-4">
                <div>
                    <h3 className="mb-0">
                        {`${name}'s programs`}
                    </h3>
                </div>
                <div className="flex-grow-1 ms-5">
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                </div>
            </div>
            <Card>
                <div className="mb-4">
                    <table {...getTableProps()} className="table table-striped">
                        <thead className="bg-dark text-light">
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getFooterGroupProps()}>
                                    {headerGroup.headers.map((column) =>
                                        <th {...column.getHeaderProps(
                                            column.getSortByToggleProps()
                                        )}>
                                            {column.render('Header') + " "}

                                            <span>
                                                {column.isSorted
                                                    ? column.isSortedDesc
                                                        ? <BiCaretDownSquare size={24} spacing={100} />
                                                        : <BiCaretUpSquare size={24} spacing={100} />
                                                    : ''}
                                            </span>
                                        </th>
                                    )}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map((row) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()} className="align-middle">
                                        {row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        })}
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                    <div className="px-4 row">
                        <span className="col-2">
                            <select
                                className="form-select"
                                value={pageSize}
                                onChange={(e) => setPageSize(Number(e.target.value))}>
                                {[2, 5, 10].map((pageSize) => (
                                    <option key={pageSize} value={pageSize}>
                                        {pageSize} fellows / page
                                    </option>
                                ))}

                            </select>
                        </span>
                        <span className="col-4 row">
                            <div className="col-4 col-form-label">
                                Go to page: {''}
                            </div>
                            <div className="col-8">
                                <input
                                    type="number"
                                    min="1"
                                    max={pageOptions.length}
                                    className="form-control"
                                    defaultValue={pageIndex + 1}
                                    onChange={(e) => {
                                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                                        gotoPage(pageNumber)
                                    }} />
                            </div>
                        </span>
                        <div className="col-6 row">
                            <div className="col-form-label col-2">
                                <label>
                                    {pageIndex + 1} of {pageOptions.length}
                                </label>
                            </div>
                            <div className="col-8">
                                <button
                                    className="btn btn-light mx-1"
                                    onClick={() => gotoPage(0)}
                                    disabled={!canPreviousPage}>{'<<'}</button>
                                <button
                                    className="btn btn-light mx-1"
                                    onClick={() => previousPage()}
                                    disabled={!canPreviousPage}>
                                    Previous
                                </button>
                                <button
                                    className="btn btn-light mx-1"
                                    onClick={() => nextPage()}
                                    disabled={!canNextPage}>
                                    Next
                                </button>
                                <button
                                    className="btn btn-light mx-1"
                                    onClick={() => gotoPage(pageCount - 1)}
                                    disabled={!canPreviousPage}>{'>>'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default UserProgramsList
