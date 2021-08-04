import React  from "react";

type NumberBtnProps = {
    url : string,
    text:string,
    classname:string
}

const NumberBtn:React.FC<NumberBtnProps> = (props) => {
    const {url,classname,text} = props;
    return(
        <>
        <a href={url} target="_blank" className={classname}>{text}</a>
        </>
    );
}

export default NumberBtn;