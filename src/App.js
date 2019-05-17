import React from 'react';
import Header from './component/header';
import './app.scss';
import Headline from './component/headline';

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'sss@gmail.com',
  age: 24,
  onlineStatus: true
}]


function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts" tempArr={ tempArr } />
      </section>
    </div>
  );
}

export default App;
