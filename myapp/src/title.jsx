import React from 'react';

const Title = () => {
    return(
      
        <div className="title container">
        <div className="border rounded p-5 shadow bg-warning">
        <h1 className="display-2 p-3" >Recipe Search API</h1>
        <h3 className="lead">This Edamam recipe API has the data of tens of thousands of foods, including international dishes.<br></br> Enter <strong>ANY</strong> sort of food (e.g.: pasta, chicken, dumpling, etc.) <span className="spinner-grow spinner-grow-sm"> </span></h3>
        </div>
        </div>
    );
}

export default Title;