import React from "react";

type InputBoxProps = {
  type:string,
  place:string
}

const InputBox:React.FC<InputBoxProps> = (props) =>{
  const {type,place} = props
  return(
    <>
        <input type={type} placeholder={place} className="inpb" required/>
    </>
  )
}

export default InputBox;