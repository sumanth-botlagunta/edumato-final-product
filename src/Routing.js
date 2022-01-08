import Home from './components/Home/Home';
import { BrowserRouter, Route} from 'react-router-dom';
import Listing from './components/listing/Listing';
import Details from './components/details/Details';
import Placeorder from './components/orders/Placeorder';
import ViewOrderApi from './components/orders/ViewOrderApi';
import Paymentfail from './components/Paymentfail'

function Routing() {
  return (
    <div className="App">

      <BrowserRouter >

      <Route exact path="/" component={Home }/>
      <Route path="/Listing/:mealtype_id" component= {Listing }/>
      <Route path="/details/:restId" component= {Details }/>
      <Route path="/placeorder/:restname" component= {Placeorder }/>
      <Route path="/vieworder" component= {ViewOrderApi }/>
      <Route path="/paymentfail" component= {Paymentfail }/>

      </BrowserRouter>

      

      
    </div>
  );
}

export default Routing;
