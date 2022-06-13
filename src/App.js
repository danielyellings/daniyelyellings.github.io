/* eslint-disable jsx-a11y/alt-text */
/* jshint ignore:start */
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className = "d-flex align-center" >
        <img width={40} height={40} src="/img/logo.png"></img>
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кросовок</p>
        </div>
    </div>
        <ul className = "d-flex" >
          <li className="mr-30"><img width={18} height={18} src="/img/cart1.png"></img><span>1205 $</span></li>
          <li><img width={18} height={18} src="/img/user.png"></img></li>
        </ul>
      </header>
      <div className = "content p-40 mb-40">
      <div className="d-flex align-center justify-between">
        <h1>Все кроссовки</h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Search..." />
        </div>
      </div>
      
    <div className="d-flex">
    <div className="card">
        <img width={133} height={112} src="/img/trainers/train1.jpg" alt="sNickers"/>
        <h5>Мужские Кроссовки Nike Air Max 270</h5>
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Price:</p>
          <b>259,99 $</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
        </button>
      </div>
    </div>

    <div className="card">
        <img width={133} height={112} src="/img/trainers/train2.jpg" alt="sNickers"/>
        <h5>Мужские Кроссовки Nike Kyrie Flytrap IV</h5>
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Price:</p>
          <b>249,99 $</b>
        </div>
        <button className="button">
        <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
  </button>
</div>
</div>
</div>
<div className="card">
        <img width={133} height={112} src="/img/trainers/train3.jpg" alt="sNickers"></img>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Price:</p>
          <b>299,99 $</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
        </button>
      </div>
    </div>
    <div className="card">
        <img width={133} height={112} src="/img/trainers/train4.jpg" alt="sNickers"></img>
        <h5>Мужские Кроссовки Nike Lebron XVIII Low</h5>
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Price:</p>
          <b>269,99 $</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
        </button>
      </div>
    </div>
    <div className="card">
        <img width={133} height={112} src="/img/trainers/train5.jpg" alt="sNickers"></img>
        <h5>Мужские Кроссовки Nike LeBron XVIII</h5>
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Price:</p>
          <b>289,99 $</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
        </button>
      </div>
    </div>
    <div className="card">
        <img width={133} height={112} src="/img/trainers/train6.jpg" alt="sNickers"></img>
        <h5>Мужские Кроссовки Jordan Air Jordan 11</h5>
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Price:</p>
          <b>299,99 $</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
        </button>
      </div>
    </div>
    <div className="card">
        <img width={133} height={112} src="/img/trainers/train7.jpg" alt="sNickers"></img>
        <h5>Мужские Кроссовки Nike Kyrie 7</h5>
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Price:</p>
          <b>269,99 $</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
        </button>
      </div>
    </div>
    <div className="card">
        <img width={133} height={112} src="/img/trainers/train8.jpg" alt="sNickers"></img>
        <h5>Мужские Кроссовки Under Armour Curry 8</h5>
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Price:</p>
          <b>209,99 $</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
        </button>
      </div>
    </div>
    <div className="card">
        <img width={133} height={112} src="/img/trainers/train9.jpg" alt="sNickers"></img>
        <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Price:</p>
          <b>229,99 $</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
        </button>
      </div>
    </div>
    <div className="card">
        <img width={133} height={112} src="/img/trainers/train10.jpg" alt="sNickers"></img>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Price:</p>
          <b>229,99 $</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
        </button>
      </div>
    </div>
    <div className="card">
        <img width={133} height={112} src="/img/trainers/train1.jpg" alt="sNickers"></img>
        <h5>Мужские Кроссовки Nike Air Max 270</h5>
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Price:</p>
          <b>259,99 $</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
        </button>
      </div>
    </div>
    <div className="card">
        <img width={133} height={112} src="/img/trainers/train7.jpg" alt="sNickers"/>
        <h5>Мужские Кроссовки Nike Kyrie 7</h5>
        <div className="d-flex justify-between">
        <div className="d-flex flex-column">
          <p>Price:</p>
          <b>269,99 $</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
        </button>
      </div>
    </div>
</div>
</div>
  
  );
}

export default App;