import React from 'react';

const Newsitem =(props)=> {
    
    
        let {title,description,imgurl,newsurl,author,date}= props;
        return (
            <div className="container my-4">
                <div className="card" style={{width: "18rem"}}>
                    <img src={imgurl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                              <p className="card-text">{description}...</p>
                              <p className="card-text"><small class="text-muted">By {!author?"unkown":author} on {new Date(date).toGMTString()} </small></p>
                            <a rel = "noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                        </div>
                </div>
            </div>
        )  
    
}

export default Newsitem
