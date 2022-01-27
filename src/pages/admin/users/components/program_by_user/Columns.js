import { format } from 'date-fns';
export const COLUMNS = [

    {
        Header: 'No.',
        Cell: (props) => {
            return (Number(props.row.id) + 1 + ".")
        }
    },
    {
        Header: 'Topic',
        accessor: 'topic'
    },
    {
        Header: 'Description',
        accessor: 'description'
    },
    {
        Header: 'Start Date',
        accessor: 'start_date',
        Cell: ({ value }) => {
            return (format(new Date(value), 'P'))
        }
    },
    {
        Header: 'Start Date',
        accessor: 'end_date',
        Cell: ({ value }) => {
            return (format(new Date(value), 'P'))
        }
    },
]