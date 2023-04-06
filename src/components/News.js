import React, {useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import Newsitem from './Newsitem';


const News =(props)=> {
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResult, settotalResult] = useState(0);


    
        // document.title= `CupofNews-${this.props.category}`;
    

    const  updatenews = async()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);


        setarticles(parsedData.articles)
        settotalResult(parsedData.totalResult)

    }

    useEffect(() => {
     updatenews()
    }, []);


    // async componentDidMount() {
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3d94e7ecff9248bd909e0ff1a16e6f15&page=1&pageSize=${this.props.pageSize}`;
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json()
    //     // console.log(parsedData);
    //     // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    //     this.updatenews();
    // }


    // for button click function
    const handleprevClick = async () => {
        // console.log("previous");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3d94e7ecff9248bd909e0ff1a16e6f15&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);

        // this.setState({

        //     page: this.state.page - 1,
        //     articles: parsedData.articles
        // })
        setpage(page-1)
        // this.setState({page:this.state.page-1})
        updatenews();

    }
    const handlenextClick = async () => {
        // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        // }
        // else {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3d94e7ecff9248bd909e0ff1a16e6f15&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     let data = await fetch(url);
        //     let parsedData = await data.json()
        //     console.log(parsedData);

        //     this.setState({

        //         page: this.state.page + 1,
        //         articles: parsedData.articles
        //     })
        // }
        // this.setState({page:this.state.page+1})
        setpage(page+1)
        updatenews();


    }


  
        return (
            <div className="container my-5">
                <h2 className="text-center  "style={{marginTop:'90px'}}>CupofNews - Latest Shorts on  {props.category}</h2>

                <div className="row my-4">
                    {articles.map((element) => {
                        return<div className="col md-4" key={element.url}>

                            <Newsitem title={element.title} description={element.description ? element.description.slice(0, 77) : ""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
                        </div>

                    })}

                </div>
                {/* for next and prev button */}
                <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-outline-success" onClick={handleprevClick}>&larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResult / props.pageSize)} type="button" className="btn btn-outline-success" onClick={handlenextClick}>Next &rarr;</button>
                </div>

            </div>
        );
    
}

News.defaultProps = {
    pageSize: 9,
    country: 'in',
    category: 'General'

}
News. propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string


}

export default News;
