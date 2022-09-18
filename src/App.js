import './App.css';
import FirstSection from './components/FirstSection';
import NavBar from './components/Navigation/NavBar';
import SecondSection from './components/SecondSection';
// import SecondNav from './components/SecondNav';
// import SecondNav from './components/SecondNav';
// import NavBar from './components/Navigation/NavBar';
const App = () => {
  return (
    <div className="App">
      <NavBar />
      {/* <SecondNav /> */}
      <FirstSection />
      <SecondSection />
      
    </div>
  );
}

export default App;
