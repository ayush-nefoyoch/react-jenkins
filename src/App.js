import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit and save to reload. Docker New
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          Do you know from where I am coming?
        </a>
      </header>
    </div>
  );
}

export default App;

// without docker compose, use this command
// I have run this in terminal -> docker run -d -p 3000:3000 --name jenkns-react --rm ayush8771/react-jenkins-react-app 
// it will create container inyour local docker and run on localhost:3000

// with docker-compose - used to resolve issue for using same port
// docker-compose up -d
// docker-compose down