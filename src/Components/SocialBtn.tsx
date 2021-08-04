import React from "react";

type SocialBtnProps = {
    url : string,
    type:any,
}

const SocialBtn:React.FC<SocialBtnProps> = (props) => {
    const {url,type} = props;

    return (
        <React.Fragment>
        <a href={url} target="_blank" className="soc-btn">{type}</a>
        </React.Fragment>
    );
}

export default SocialBtn;