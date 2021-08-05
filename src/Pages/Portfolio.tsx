import {useState} from "react";
import {project} from "../Data/Project";


const Portfolio = () => {
  const [boxes] = useState(project);

    return (
        <div>
            <section className="portfolio-page">
                <h1>Portfolio Page</h1>

                <div className="boxes">
                  {
                    project.map((box:{id:string,title:string,description:string,github:string
                    demo:string,image:string})=> {
                      const {id,title,description,github,demo,image} = box;
                      return(
                        <div className="bx" key={id}>
                          <img src={image} alt={title}/>
                          <h4>{title}</h4>
                          <p>{description}</p>
                          <div className="pro-btns">
                            <a href={github} target="_blank">Github</a>
                            <a href={demo} target="_blank">Demo</a>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
            </section>
        </div>
    )

}

export default Portfolio;