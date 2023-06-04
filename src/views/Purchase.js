import {Button} from '@mui/material';
export default function Purchase() {
    function handleClick(){

    
        window.location.href = '/student/Course'
        
    }
    
   
    return(
        <div>
        <h1>Purchase</h1>
        <Button variant="text" className="Button" onClick = {handleClick}  style={{justifySelf : "flex-end"}}>PURCHASE</Button>
        </div>
    )
}