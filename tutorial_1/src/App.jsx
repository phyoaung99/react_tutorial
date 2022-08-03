import React from "react";
// import Footer from "./component/Footer.js";
// import Header from "./component/Header.js";
// import SecondOjt from "./component/SecondOjt.js";

class App extends React.Component {
  //first second OJT
  // render() {
  //   const styles = {
  //     content: {
  //       padding: "10px 0 10px 0",
  //       background: "purple",
  //     },
  //   };
  //   return (
  //     <div>
  //       <div style={styles.content}>
  //         <Header title="Welcome From OJT Project" />
  //       </div>
  //       <div>
  //         <SecondOjt />
  //       </div>
  //       <div style={styles.content}>
  //         <Footer />
  //       </div>
  //     </div>
  //   );
  // }

  //Class Component ToggleDisplay
  // constructor() {
  //   super();
  //   this.state = { displayBio: false };
  //   console.log("Component this", this);
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }

  // toggleDisplayBio() {
  //   this.setState({ displayBio: !this.state.displayBio });
  // }
  // render() {
  //   return (
  //     <div>
  //       <h1>Welcome to JavaTpoint!!</h1>
  //       {this.state.displayBio ? (
  //         <div>
  //           <p>
  //             <h4>
  //               Javatpoint is one of the best Java training institute in Noida,
  //               Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of
  //               experienced Java developers and trainers from multinational
  //               companies to teach our campus students.
  //             </h4>
  //           </p>
  //           <button onClick={this.toggleDisplayBio}> Show Less </button>
  //         </div>
  //       ) : (
  //         <div>
  //           <button onClick={this.toggleDisplayBio}> Read More </button>
  //         </div>
  //       )}
  //     </div>
  //   );
  // }

  constructor() {
    super();
    this.state = {
      name: "pepeag",
    };
  }
  render() {
    return (
      <div>
        <JTP JPTProps={this.state.name} />
      </div>
    );
  }
}
class JTP extends React.Component {
  render() {
    return (
      <div>
        <h1>State & Props Example</h1>
        <h3>Welcome to {this.props.JPTProps}</h3>
        <p>pepeag is pepeag,</p>
      </div>
    );
  }
}
export default App;
