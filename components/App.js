import "../prism.css";
import "./Profile";

export default class App extends React.Component {
  render() {
    console.log(this.props.users);
    return (
      <div
        className={"grid"}
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#f8f8f8",
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          paddingLeft: "30%",
          paddingRight: "30%"
        }}
      >
        {this.props.users.map((user, index) => {
          return <Profile key={`profile-${index}`} user={user} />;
        })}
      </div>
    );
  }
}
