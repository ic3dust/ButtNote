import "../style/Home.css"
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';

function Home() {

  return (
    <div className="Home">
        <>
          <Header />
          <div className="Home_body">
            <Sidebar />
            <Feed />
          </div>
        </>
    </div>
  );
}

export default Home;   
