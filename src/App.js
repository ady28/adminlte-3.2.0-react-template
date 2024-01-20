import {Footer, Header, Menu} from './components/index'
import {Home} from './pages/index'
 
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Home />
      <Footer />
    </div>
  );
}
 
export default App;