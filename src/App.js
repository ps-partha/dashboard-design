import logo from './logo.svg';
import './css/style.css';
import SideBar from './components/SideBar';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
function App() {
  return (
    <div className="App">
      <SideBar/>
      <MainContainer/>
    </div>
  );
}

export default App;
