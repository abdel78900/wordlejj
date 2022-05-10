import { styled } from "@stitches/react"
import  { useContext } from 'react'
import { WordleContext } from "../context/wordleContext"
import Square from "./Square"

interface IRow {
    isActive: boolean
}

const StyledRow = styled("div", {
    height:'100%',
    display:'flex',
    gap:'10px'
});

const Row = (props: IRow) =>{

    const {word, secretWord} = useContext(WordleContext);

    const getLetter=(index:number)=>{
    if (props.isActive){
        return word[index]
    }
    return ''
};

    return (
        <StyledRow>
            {Array.from (Array(secretWord.length).keys()).map((_, index) =>(
                 <Square letter={getLetter(index)}/>   
                ))}
        </StyledRow>
)}
export default Row