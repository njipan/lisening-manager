import React from "react";
import { Header, Footer } from "../../layouts";
import Routes from "../../components/Routes";
import routes from "../../routes/dashboard";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <div className="container">
            <Routes routes={routes} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
