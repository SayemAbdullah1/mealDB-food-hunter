import logo from './logo.svg';
import './App.css';
import Header from './Componant/Header/Header';
import Meals from './Componant/Meal-sec/Meals';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="">
      <Header></Header>
      <Meals></Meals>
    </div>
  );
}

export default App;
