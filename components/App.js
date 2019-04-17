import Prism from "prismjs";
import "../prism.css";

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

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  select() {
    this.setState({ selected: !this.state.selected });
  }

  render() {
    const user = this.props.user;
    return (
      <div
        onClick={() => this.select()}
        style={{
          margin: "10px",
          width: "100%",
          height: this.state.selected ? "auto" : "150px",
          backgroundColor: "#fff",
          borderRadius: ".25rem",
          boxShadow: "0 1px 0 rgba(0,0,0,.25)",
          border: "1px solid #ddd",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer"
        }}
      >
        <div
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            height: "100px",
            marginBottom: this.state.selected ? "15px" : 0
          }}
        >
          <img
            style={{
              borderRadius: "50%",
              width: "80px",
              height: "80px",
              border: "1px solid #ddd"
            }}
            src={user.profile.image_192}
          />
          <p style={{ fontSize: "19px" }}>{user.name}</p>
        </div>
        <div
          style={{
            display: this.state.selected ? "block" : "none",
            overflowX: "scroll"
          }}
        >
          <pre>
            <code className="language-JSON">
              {JSON.stringify(user, null, 2)}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}
