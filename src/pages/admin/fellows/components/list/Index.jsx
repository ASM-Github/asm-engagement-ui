import React from 'react';
import { Container, Card } from 'react-bootstrap'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import { BiSort, BiChevronUp, BiChevronDown } from 'react-icons/bi'
import { COLUMNS } from './Columns'
import { GlobalFilter } from './GlobalFilter';

function ManageFellowsPage({ fellows: data }) {

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
        <Container>
            <h3 className="fw-bolder mb-4">
                Manage Fellows
            </h3>
            <Card className="py-4 border-0 mb-5">
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                <table {...getTableProps()}
                    className="table table-hover mt-4 table-borderless asm-table">
                    <thead className="cs-table-header text-uppercase">
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getFooterGroupProps()}>
                                {headerGroup.headers.map((column) =>
                                    <th className="align-middle"
                                        {...column.getHeaderProps(
                                            column.getSortByToggleProps()
                                        )}>
                                        {column.render('Header') + " "}

                                        <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? <BiChevronDown size={24} spacing={100}
                                                        className="text-black text-opacity-25" />
                                                    : <BiChevronUp size={24} spacing={100}
                                                        className="text-black text-opacity-25" />
                                                : column.disableSortBy ? null :
                                                    <BiSort className="text-black text-opacity-25" />}
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
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return <td className="align-middle asm-border-top"
                                            {...cell.getCellProps()}>
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
                                    {pageSize} fellows
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
            </Card>
        </Container>
    )
}

export default ManageFellowsPage;

