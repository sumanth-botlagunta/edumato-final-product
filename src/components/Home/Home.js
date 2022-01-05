import Topcover from './Topcover'
import Quicksearch from './Quicksearch';
import Quickapi from './Quickapi';

function Home() {
    return (
      <div className="home">
        <Topcover />
        <Quicksearch />
        <Quickapi />
      </div>
    );
  }
  
  export default Home;