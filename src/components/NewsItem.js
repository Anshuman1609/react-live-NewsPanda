import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="container my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl ? imageUrl : "https://www.livemint.com/lm-img/img/2024/03/01/1600x900/xiaomi_14_ultra_1708671913109_1709272035612.jpg" } className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem