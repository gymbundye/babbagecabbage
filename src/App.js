
import './App.css';

import Header from './components/Header'
import Items from './components/Items'
import Footer from'./components/Footer'
function App() {
  return (
    <div className="App">

      <Header title='Babbage Cabbage'  eventname='50-50 sale!' event='January 7th-9th from 9:00 a.m. - 3:00 p.m.' image='https://th.bing.com/th/id/OIP.m8Z06p6QWwmXOt7UF2AyyAHaEQ?w=270&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'></Header>
      <Items name='Charcoal Grill' price='$197.00' image='https://th.bing.com/th/id/OIP.x3n4nxBmOEoKrgMDDEMk6gHaFj?w=265&h=199&c=7&r=0&o=5&dpr=1.5&pid=1.7'></Items>
      <Items name='Fruit Platter'  price='$12.88'  image='https://th.bing.com/th/id/OIP.TWA3WKUz_gdszY_1os0cCQHaFE?w=265&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7'></Items>
      <Items name='Gourmet Cupcakes 6 Count' price='$19.99' image='https://th.bing.com/th/id/OIP.3j4_tTRskrYsrWLtEQIfbgHaKp?w=186&h=267&c=7&r=0&o=5&dpr=1.5&pid=1.7'></Items>
      <Items name='Charcuterie Board' price='$29.87' image='https://th.bing.com/th/id/OIP.HWTPbN_IlvzS7gcJhmx4sAHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.5&pid=1.7'></Items>
      <Items name='Organic Avocados' price='$4.24' image='https://th.bing.com/th/id/OIP.-LHYqjqLkhTMAKV2FlEDDgHaFJ?w=264&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7'></Items>
      <Items name='Kitchen Knife Set' price='$63.59' image='https://th.bing.com/th/id/OIP.fZme7pkuXrtdfIL6OmhVIQHaIz?w=172&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7'></Items>
      <Items name='Cabbage' price='$3.75' image='https://th.bing.com/th/id/OIP.vRhOmI8T_jkiG_E-axh4VQHaI_?w=152&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7'></Items>
      <Footer hours= 'Store Hours (9am to 9pm) Tuesday-Sunday' location='123 Babbage St. Beverely Hills CA 90210' phone='101-101-1010'></Footer>
  
    
    </div>
  );
}

export default App;
