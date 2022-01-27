import React from 'react';
import { Container, Card } from 'react-bootstrap'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi'
import { COLUMNS } from './Columns'
import { GlobalFilter } from './GlobalFilter';
import '../../../../assets/css/table.css'
import '../../../../assets/css/form-control.css'

function ManageActivities({ programs: data }) {

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
            <h3 className="fw-bolder my-4">
                Involvement in Programs
            </h3>
            <Card className="py-4 border-0">
                <div className="d-flex justify-content-between">
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

                </div>
                <table {...getTableProps()} className="table table-hover mt-4 table-borderless asm-table fw-bold">
                    <thead className="cs-table-header text-uppercase">
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getFooterGroupProps()}>
                                {headerGroup.headers.map((column) =>
                                    <th className="align-middle text-black-50 fw-bolder"
                                        {...column.getHeaderProps(
                                            column.getSortByToggleProps()
                                        )}>
                                        {column.render('Header') + " "}

                                        <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? <BiChevronDown size={24} spacing={100} />
                                                    : <BiChevronUp size={24} spacing={100} />
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
                <div className="d-flex justify-content-between me-4">
                    <div className="col-form-label ms-4">
                        <label className="text-black-50">
                            {`Results : page  ${pageIndex + 1} of ${pageOptions.length} `}
                        </label>
                        <span>
                            <select
                                className="ms-4 asm-input"
                                value={pageSize}
                                onChange={(e) => setPageSize(Number(e.target.value))}>
                                {[2, 5, 10].map((pageSize) => (
                                    <option key={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                ))}
                            </select>
                        </span>
                    </div><div>
                    </div>
                    <div>
                        <span className="mx-4">Go to page : </span>
                        <input
                            type="number"
                            min="1"
                            max={pageOptions.length}
                            className="me-4 asm-input"
                            defaultValue={pageIndex + 1}
                            onChange={(e) => {
                                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(pageNumber)
                            }} />
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
            </Card>
        </Container>
    )
}

export default ManageActivities;

