// var unirest = require("unirest");

// var req = unirest("GET", "https://bing-news-search1.p.rapidapi.com/news/search");

// req.query({
// 	"q": "buenas noticias",
// 	"freshness": "Day",
// 	"textFormat": "Raw",
// 	"safeSearch": "Off"
// });

// req.headers({
// 	"x-bingapis-sdk": "true",
// 	"x-rapidapi-key": "35a885e9acmsh103b1ffe15f0ac1p102ed8jsn7e74708e0a0f",
// 	"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
// 	"useQueryString": true
// });


// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });


import React from 'react';
import './noticias.css';
import Header from '../common/header/header'


async function searchNews(q) {
  //q = encodeURIComponent(q);
  q="Ciencia"
  const response = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&safeSearch=Strict&q=${q}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": "35a885e9acmsh103b1ffe15f0ac1p102ed8jsn7e74708e0a0f",
      "x-bingapis-sdk": "true"
    }
  });
  const body = await response.json();
  return body.value;
}


function Noticias() {
  const [query, setQuery] = React.useState("Tenemos esto para ti");
  const [list, setList] = React.useState(null);
  const [logo, setLogo] = React.useState(true);

  const search = (e) => {
    e.preventDefault();
    searchNews(query).then(setList);
    setLogo(!logo)
  };
  return (
    <div className="appnoti">
		<Header/>
      <form onSubmit={search}>
        {/* <input
          autoFocus
          value={query}
          onChange={e => setQuery(e.target.value)}
        /> */}
        <button>Noticias de Hoy</button>
      </form>
      {!list
        ? null
        : list.length === 0
          ? <p><i>No results</i></p>
          : <ul>
            {list.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </ul>
      }
    <div class= {logo? "container" : "no-container"}>
<div class="circle">
<div class="pulse-ring"></div>
<div class="red-medium-circle"></div>
<div class="red-big-circle"></div>
<div class="red-huge-circle"></div>
</div>
 </div>


    </div>
  );
}
function Item({ item }) {
  const separateWords = s => s.replace(/[A-Z][a-z]+/g, '$& ').trim();
  const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
  return (
    <li className="item">
      {item.image &&
        <img className="thumbnail"
          alt=""
          src={item.image?.thumbnail?.contentUrl}
        />
      }
      <h2 className="title">
        <a href={item.url}>{item.name}</a>
      </h2>
      <p className="description">
        {item.description}
      </p>
      <div className="meta">
        <span>{formatDate(item.datePublished)}</span>
        <span className="provider">
          {item.provider[0].image?.thumbnail &&
            <img className="provider-thumbnail"
              alt=""
              src={item.provider[0].image.thumbnail.contentUrl + '&w=16&h=16'}
            />
          }
          {item.provider[0].name}
        </span>
        {item.category &&
          <span>{separateWords(item.category)}</span>
        }
      </div>
    </li>
  );
}
export default Noticias;