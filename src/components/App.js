import '../style/App.css';
import Header from './Header'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { useStateValue } from '../StateProvider';

function App() {

  const [{user}, dispatch]=useStateValue();

  return (
    <div className="app">

      {!user ? <Login /> : (
      <>
        <Header />
        <div className="app_body">
          <Sidebar />
          <Feed />
        </div>
      </>
      )}
    </div>
  );
}

export default App;
