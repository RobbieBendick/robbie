import "./LeetCode.scss";
import { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import {motion} from "framer-motion";
import Nav from "../../components/Nav/Nav"
import {Modal, Button} from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';



let LeetCode = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = (title, body, timeComplexity) => {
        setModalHeader(title);
        setModalBody(body)
        setModalTimeComplexity(timeComplexity)
        setShow(true);
    };
    function MyModal() {


        let navyShadow = "hsl(216, 86%, 6%, 0.7)";
        let slate = 'hsl(225, 20%, 61%)';
        let lightestSlate = 'hsl(226, 70%, 88%)';
        let lightestNavy = { backgroundColor: 'hsl(218, 41%, 23%)', border: 'none', color: slate}
        return (
              <>
                <Modal show={show} onHide={handleClose} style={{width: "100%",backgroundColor: 'hsl(216, 65%, 11%)',  border: 'none', boxShadow: `0 10px 30px -15px ${navyShadow}`}}>
                  <Modal.Header closeButton style={{ backgroundColor: 'hsl(218, 41%, 23%)', border: 'none'}}>
                    <Modal.Title style={{ backgroundColor: 'hsl(218, 41%, 23%)', border: 'none', color: lightestSlate}}>{modalHeader}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body style={{ backgroundColor: 'hsl(218, 41%, 23%)', border: 'none', color: slate}}>{modalBody}</Modal.Body>
                  <Modal.Footer style={lightestNavy}>
                  <p>Time Complexity: {modalTimeComplexity}</p>
                    <Button style={lightestNavy} onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
        )
    }

    const [modalBody, setModalBody] = useState("");
    const [modalHeader, setModalHeader] = useState("");
    const [modalTimeComplexity, setModalTimeComplexity] = useState("");


    let Table = () => {

        let tableBodyRow = (title, difficulty, language, funcParam1, timeComplexity) => {
            return (
            <tr>
                <td>{title}</td>
                <td><button className={difficulty.toLowerCase()}>{difficulty}</button></td>
                <td><button onClick={() => handleShow(title, funcParam1, timeComplexity)}>Code Explanation</button></td>
                <td>{language}</td>
            </tr>
            )
     
        }

        let tableRows = [
        {
            "title": "Find First and Last Position of Element in Sorted Array",
            "difficulty": "Medium",
            "language": "JavaScript",
            "body": <SyntaxHighlighter language="javascript">{
                `let searchRange = (nums, target) => {
                    let first = -1;
                    let last = -1;
                    for(i=0;i<nums.length;i++){
                        if(nums[i] === target && first === -1) first = i;
                        if(nums[i] === target && first !== -1 && nums[i+1] !== target) last = i;
                    }
                    return [first, last];
                };`}
            </SyntaxHighlighter>,
            "timeComplexity": "O(n)",
        },
        {
            "title": "Contains Duplicate III", 
            "difficulty": "Medium",
            "language": "JavaScript",
            "body": <SyntaxHighlighter language="javascript">{`let containsNearbyAlmostDuplicate = (nums, k, t) => {
                for (i=0; i<nums.length; i++) {
                    for(j=0;j<nums.length;j++) {
                        if (Math.abs(nums[i] - nums[j]) <= t &&
                        Math.abs(i - j)<= k && i !== j)
                        return true
                    } 
                }
                return false
            };`}</SyntaxHighlighter>,
            "timeComplexity": "O(n²)",

        },
        {
            "title": "Contains Duplicate II", 
            "difficulty": "Easy",
            "language": "JavaScript",
            "body": <SyntaxHighlighter language="javascript">{`let containsNearbyAlmostDuplicate = (nums, k, t) => {
                for (i=0; i<nums.length; i++) {
                    for(j=0;j<nums.length;j++) {
                        if (Math.abs(nums[i] - nums[j]) <= t &&
                        Math.abs(i - j) <= k && i !== j)
                        return true
                    } 
                }
                return false
            };`}</SyntaxHighlighter>,
            "timeComplexity": "O(n²)",

        },
        {
            "title": "Unique Occurences",
            "difficulty": "Easy",
            "language": "JavaScript",
            "body": <SyntaxHighlighter language="javascript">{
                `let uniqueOccurrences = arr => {
                let map = new Map();
                let temp = [];
                for(i=0;i<arr.length;i++){
                    if(!map.has(arr[i])){
                        map.set(arr[i], 1)
                    } else {
                        map.set(arr[i], map.get(arr[i]) + 1)
                    }
                }
                for(let [key,value] of map) {
                    if (!temp.includes(value)) {
                        temp.push(value)
                    } else {
                        return false;
                    }
                }
                return true;
            };`}
            </SyntaxHighlighter>,
            "timeComplexity": "O(a+m)",
        },
 

    ]

    let tableHeaders = ['Title', 'Difficulty', 'Solution', 'Language'];
        return (
            <>
            <Nav />
            <html>
                <body>
                    <table>
                        <thead>
                            <tr>
                                {tableHeaders.map(v => <th>{v}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows.map(v => tableBodyRow(v.title, v.difficulty, v.language, v.body, v.timeComplexity))}
                        </tbody>
                    </table>
            <MyModal />
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