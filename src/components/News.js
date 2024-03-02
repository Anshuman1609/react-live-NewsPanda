import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        console.log("This is Constructor");
        this.state = {
            articles: [],
            loading: false,
            page : 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8b8b72eea7ed4aa69fd61b85158342b3";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles : parsedData.articles});
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsPanda - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}
                            />
                        </div>
                    })}
                </div>
                
            </div>
        )
    }
}

export default News