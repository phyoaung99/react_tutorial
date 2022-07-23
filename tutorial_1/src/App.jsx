import React from 'react';
import Footer from './component/Footer.js';
import Header from './component/Header.js'
import SecondOjt from './component/SecondOjt.js';
 
class App extends React.Component {

 render() {
  const styles = {
    content:{
    padding:'10px 0 10px 0',
    background:'purple',
    },
    

  };
 return (
  <div>
 <div style={styles.content}><Header title="Welcome From OJT Project" /></div>
 <div><SecondOjt /></div>
 <div style={styles.content}><Footer /></div>
 </div>
 )
}
}
export default App;

