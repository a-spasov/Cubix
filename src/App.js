import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import GoToTopBtn from './components/GoToTopBtn';

function App() {
  return (
    < BrowserRouter>
      <div className="App">
        <Header />
        <Content />
        <Footer />
        <GoToTopBtn />
      </div>
    </BrowserRouter>   
  )
}

export default App;
