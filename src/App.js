import { Route, Routes } from 'react-router';
import './App.css';
import ContentStart from './Pages/contentStart';
import ContentValutes from './Pages/contentValutes';
import Header from './Components/header/Header';
import IntroduceHeader from './Components/introduceHeader/IntroduceHeader';


function App() {

  

  return (
    <div className="wrapper">
      <IntroduceHeader />
      <Header />
      <Routes>
        <Route exact path='/menu1' element={<ContentStart/>} /> 
        <Route exact path='/menu2' element={<ContentValutes />} />
        {/* <Route exact path='/menu3' element={<ContentValutes />} />
        <Route exact path='/menu4' element={<ContentValutes />} />
        <Route exact path='/menu5' element={<ContentValutes />} /> */}
      </Routes>
    </div>
  );
}

export default App;
