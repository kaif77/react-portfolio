import SimpleBtn from "./SimpleBtn";

type PortBoxProps = {
    gurl:string,
    lurl:string
    imgpath:string
}

const PortBox:React.FC<PortBoxProps> = (props) => {
    const {gurl,lurl,imgpath} = props;
    return (
        <div>
            <div className="box">
                <img src={imgpath} alt="greenImage" />
                <p></p>

                <div className="pro-btn">
                    <SimpleBtn  url={gurl} classname="gh-btn" text="Github" />
                    <SimpleBtn url={lurl} classname="demo-btn" text="Demo" />
                </div>

            </div>
        </div>
    );
}

export default PortBox;
