import "./LeetCode.scss";
import { useEffect, useMemo } from "react";
import { useTable } from "react-table";
import {motion} from "framer-motion";
import $ from "jquery";
import Nav from "../../components/Nav/Nav"

let LeetCode = () => {

    const data = useMemo(() => (
        [
            {
                "id": 1,
                "title": <motion.a whileHover={{"color": "#64ffda"}} className="leetcode-title" href="https://leetcode.com/problems/contains-duplicate/" target="_blank" rel="noopener noreferrer">Contains a</motion.a>,
                "difficulty": <motion.button whileHover={{"backgroundColor": "hsl(153, 53%, 53%, / 0.2)"}} className="easy">Easy</motion.button>,
                "language": "JavaScript",
                "solution": "Click Here",

            },
            {
                "id": 1,
                "title": <motion.a whileHover={{"color": "#64ffda"}} className="leetcode-title" href="https://leetcode.com/problems/contains-duplicate/" target="_blank" rel="noopener noreferrer">Leetcode title two</motion.a>,
                "difficulty": <motion.button whileHover={{"backgroundColor": "hsl(153, 53%, 53%, / 0.2)"}} className="easy">Easy</motion.button>,
                "language": "JavaScript",
                "solution": <a href="a">HTML ELEMENT</a>,

            },
            {
                "id": 1,
                "title": <motion.a whileHover={{"color": "#64ffda"}} className="leetcode-title" href="https://leetcode.com/problems/contains-duplicate/" target="_blank" rel="noopener noreferrer">Leetcode title three</motion.a>,
                "difficulty": <motion.button whileHover={{"backgroundColor": "hsl(153, 53%, 53%, / 0.2)"}} className="easy">Easy</motion.button>,
                "language": "JavaScript",
                "solution": "Click Here",
            },
        ]
    ), []);

    const columns = useMemo(() => (
        [
            {
                Header: "Title",
                accessor: "title",
            },
            {
                Header: "Difficulty",
                accessor: "difficulty",
            },
            {
                Header: "Solution",
                accessor: "solution",
            },
            {
                Header: "Language",
                accessor: "language",
            },
        ]
    ), []);

    const tableInstance = useTable({ columns, data });
    
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance

    let Table = () => {
        return (
            <>
            <Nav />
            <html>
                <body>
                <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            { headerGroup.headers.map(column => <th {...column.getHeaderProps()}>{column.render('Header')}</th>)}
                        </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                            prepareRow(row)
                            return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
                            </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            </body>
        </html>
        </>
        )
    }
        
    return (
       <Table></Table>
    )
}


export default LeetCode;