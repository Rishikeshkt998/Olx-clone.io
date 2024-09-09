import React, { useState } from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';

const Mycontext = React.createContext()



function Home(props) {
  const [state,SetState]=useState(500)
  return (
    <div className="homeParentDiv">
      <Mycontext.Provider value={state}>
        <Header />
        <Banner />
        <Posts />
        <Footer />
      </Mycontext.Provider>
    </div>
  );
}


export default Home;
export{
  Mycontext
}

