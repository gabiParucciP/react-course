import "./App.css";
import { Component } from "react";
import RoutesApp from "./routes";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     hora: "00:00:00",
  //   };
  // }

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({ hora: new Date().toLocaleTimeString() });
  //   }, 1000);
  // }

  // componentDidUpdate() {
  //   console.log("Atualizou!");
  // }

  // shouldComponentUpdate() {
  //
  // }

  render() {
    return (
      <>
        <RoutesApp />
      </>
      // <div>
      //   <h1>teste</h1>
      //   {/* <Cron /> */}
      //   {/* <LuckCookie /> */}
      //   {/* <Form /> */}
      //   {/* <SimpleForm /> */}
      //   {/* <List /> */}
      //   {/* <Conditional /> */}
      //   {/* <Member name="Gabis" /> */}
      //   {/* <span>{this.state.hora}</span> */}
      // </div>
    );
  }
}
export default App;
