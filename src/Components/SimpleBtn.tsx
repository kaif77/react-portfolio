type SimpleBtnProps = {
    url:string, 
    text:string,
    classname:string
}

const SimpleBtn:React.FC<SimpleBtnProps> = (props) => {
    const {url,classname,text} = props;
    return (
        <div>
            <a href={url}></a>
        </div>
    );
}

export default SimpleBtn;
