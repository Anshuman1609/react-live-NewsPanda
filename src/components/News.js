import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        console.log("This is Constructor");
        this.state = {
            articles: [],
            loading: false,
            page : 1,

        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8b8b72eea7ed4aa69fd61b85158342b3&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles : parsedData.articles , totalResults : parsedData.totalResults});
    }

    handlePrevClick = async () => {
        console.log("prev");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8b8b72eea7ed4aa69fd61b85158342b3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page : this.state.page - 1,
            articles : parsedData.articles
        })
    }
    
    handleNextClick = async () => {
        console.log("next");
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{                              
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8b8b72eea7ed4aa69fd61b85158342b3&page=${this.state.page  + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page : this.state.page + 1,
                articles : parsedData.articles
            })
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">NewsPanda - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}
                            />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News;                