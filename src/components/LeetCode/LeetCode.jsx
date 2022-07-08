import "./LeetCode.scss";
import { useEffect, useState } from "react";
import {motion} from "framer-motion";
import Nav from "../../components/Nav/Nav"
import {Modal} from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';



let LeetCode = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [modalInfo, setModalInfo] = useState(
        {
            "title": "",
            "difficulty": "",
            "language": "",
            "problemHref": "",
            "problem": "",
            "problemDescription": "",
            "solution": "",
            "solutionDescription": "",
            "timeComplexity": "",
        }
    );

    const handleShow = (title, solution, problemHref, problemDescription, problem, solutionDescription, timeComplexity, difficulty) => {
        setModalInfo({title: title, solution: solution, problemHref: problemHref, problemDescription: problemDescription, problem, solutionDescription, timeComplexity, difficulty })
        setShow(true);
    };
    let MyModal = () => {
        let navyShadow = "hsl(216, 86%, 6%, 0.7)";
        let slate = 'hsl(225, 20%, 61%)';
        let lightestSlate = 'hsl(226, 70%, 88%)';
        let lightestNavy = 'hsl(218, 41%, 23%)';
        const {title, solution, problemHref, problemDescription, problem, solutionDescription, timeComplexity, difficulty} = modalInfo;
        return (
              <>
                <Modal show={show} onHide={handleClose} style={{width: "100%",backgroundColor: 'hsl(216, 65%, 11%)',  border: 'none', boxShadow: `0 10px 30px -15px ${navyShadow}`}}>
                <Modal.Header  closeButton style={{ backgroundColor: lightestNavy, border: 'none'}}>
                    <Modal.Title style={{ backgroundColor: lightestNavy, border: 'none', color: lightestSlate, display: 'flex'}}><motion.a whileHover={{color: 'hsl(166, 100%, 70%)'}} href={problemHref}>{title}</motion.a></Modal.Title>
                    <Modal.Title className={difficulty.toLowerCase()} style={{textDecoration: 'none'}}>{difficulty}</Modal.Title>
                  </Modal.Header>
                <Modal.Body style={{ backgroundColor: lightestNavy, border: 'none', color: slate}}>{problemDescription}</Modal.Body>
                <Modal.Body style={{ backgroundColor: lightestNavy, border: 'none', color: slate}}>{problem}</Modal.Body>
                <Modal.Header  style={{ backgroundColor: lightestNavy, border: 'none'}}>
                    <Modal.Title className="modal-title" style={{ backgroundColor: lightestNavy, border: 'none', color: lightestSlate}}>{"Solution"}</Modal.Title>
                </Modal.Header>
                  <Modal.Body style={{ backgroundColor: lightestNavy, border: 'none', color: slate}}>{solution}</Modal.Body>
                  <Modal.Footer style={{ backgroundColor: lightestNavy, border: 'none', color: slate }}>
                    <p>{solutionDescription}</p>
                  </Modal.Footer>
                  <Modal.Footer style={{ backgroundColor: lightestNavy, border: 'none', color: slate }}>
                    <p>Time Complexity: {timeComplexity}</p>
                  </Modal.Footer>
                </Modal>
              </>
        )
    }


    let Table = () => {

        let tableBodyRow = (title, difficulty, language, problemHref, problemDescription, problem, solution, solutionDescription, timeComplexity) => {
            return (
            <tr>
                <td><motion.a whileHover={{color: 'hsl(166, 100%, 70%)'}} href={problemHref} target="_blank" rel="noopener noreferrer">{title}</motion.a></td>
                <td><button className={difficulty.toLowerCase()}>{difficulty}</button></td>
                <td><motion.button whileHover={{backgroundColor: 'hsl(166, 100%, 70%, / 0.1)'}} onClick={() => handleShow(title, solution, problemHref, problemDescription, problem, solutionDescription, timeComplexity, difficulty)}>Explanation</motion.button></td>
                <td>{language}</td>
            </tr>
            )
     
        }

        let tableRows = [
        {
            "title": "Find First and Last Position of Element in Sorted Array",
            "difficulty": "Medium",
            "language": "JavaScript",
            "problemHref": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
            "problemDescription": "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1].",
            "problem": <SyntaxHighlighter>{`Example 1: Input: nums = [5,7,7,8,8,10], target = 8;\n           Output: [3,4];\nExample 2: Input: nums = [5,7,7,8,8,10], target = 6;\n           Output: [-1,-1];\nExample 3: Input: nums = [], target = 0;\n           Output: [-1,-1];\n`}</SyntaxHighlighter>,
            "solutionDescription": "Solution Description",
            "solution": <SyntaxHighlighter language="javascript">{
`let searchRange = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;
    
    // If target is not found in the array, return [-1, -1].
    let temp = [-1, -1];
    
    while(left <= right){
        mid = Math.floor((left + right) / 2);
        
        if(nums[mid] === target){
            temp[0] = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    // reset left and right
    left = 0;
    right = nums.length - 1;
    
    while(left <= right){
        mid = Math.floor((left + right) / 2);
        
        if(nums[mid] === target){
            temp[1] = mid;
            left = mid + 1;
        } else if (nums[mid] < target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return temp;
};`}
            </SyntaxHighlighter>,
            "timeComplexity": "O(log n)",
        },
        {
            "title": "Contains Duplicate III", 
            "difficulty": "Medium",
            "language": "JavaScript",
            "solution": <SyntaxHighlighter language="javascript">{
`let containsNearbyAlmostDuplicate = (nums, k, t) => {
    for (i=0; i<nums.length; i++) {
        for(j=0;j<nums.length;j++) {
            if (Math.abs(nums[i] - nums[j]) <= t &&
            Math.abs(i - j) <= k && i !== j)
            return true;
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
            "problemDescription": "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1].",
            "problem": <SyntaxHighlighter language="javascript">{`Example 1 Input: nums = [5,7,7,8,8,10], target = 8; \n          Output: [3,4]; \n
Example 2 Input: nums = [5,7,7,8,8,10], target = 6;\n
          Output: [-1,-1];\n        
Example 3 Input: nums = [], target = 0;\n
          Output: [-1,-1]`}</SyntaxHighlighter>,
            "solutionDescription": "Solution Description",
            "solution": <SyntaxHighlighter language="javascript">{`let containsNearbyAlmostDuplicate = (nums, k, t) => {
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
            "problemDescription": "Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.",
            "problem": <SyntaxHighlighter language="javascript">{`Example 1: Input: arr = [1,2,2,1,1,3];\n           Output: true;\n           Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1.\n           No two values have the same number of occurrences.\nExample 2: Input: arr = [1,2];\n           Output: false;\nExample 3: Input: arr = [-3,0,1,-3,1,1,1,-3,10,0];\n           Output: true;\n`}</SyntaxHighlighter>,
            "solution": <SyntaxHighlighter language="javascript">{
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
                            {tableRows.map(v => tableBodyRow(v.title, v.difficulty, v.language, v.problemHref, v.problemDescription, v.problem, v.solution, v.solutionDescription, v.timeComplexity))}
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