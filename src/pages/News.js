import React from 'react';

const articles = [
  { 
    id: 1, 
    title: 'Pilne: Co to był za dzień!', 
    excerpt: 'Tego świat jeszcze nie widział',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  { 
    id: 2, 
    author: 'Jan Kowalski', 
    title: 'Wszyscy zazdroszą Polakom!', 
    excerpt: 'Takiego tytułu jeszcze nie było',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  { 
    id: 3, 
    author: 'Jan Kowalski', 
    title: 'Wyjątkoowa rozgrywka', 
    excerpt: 'Takie dni jak te tez sie zdazaja!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

const News = () => <p>News!</p>;

function News2(){
  return(
    <p>News!</p>
  );
}

function News3(props){
  const { id, author, title, excerpt, text} = props;

  return(
    <div>
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <div>{text}</div>
      <p>{author}</p>
    </div>
  );
}


function Content () {

  const Day = 'monday';

  if( Day !== 'monday' ){
    return(
      <div>
        <News />
        <News2 />
      </div>
    );
  }
  return(
    <div>
      <div className="row">
        { articles.map( ( elem ) => (
          <News3
            key={`news-${ elem.id }`}
            title={elem.title}
            excerpt={elem.excerpt}
            author={elem.author}
            text={elem.text}
          />
        )) }
      </div>
    </div>
  );
}

export default Content;