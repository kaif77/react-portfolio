import React from "react";

type ConnectProps = {
  url:string,
  icon:any,
  text:string
}

const Connect:React.FC<ConnectProps> = (props) => {
  const {url,icon,text} = props;

  return(
    <>
      <a href={url} className="con-link" >{icon} <span>{text}</span></a>
    </>
  )
}

export default Connect;