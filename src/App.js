import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { ApolloProvider, } from "react-apollo";
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect 
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";
import client from "./graphql";
import Setting from './containers/Setting'
import Home from "./containers/Home";
import MainLayout from './layouts/withLayout'
import EmptyLayout from './layouts/EmptyLayout'
import Posts from "./components/posts";
// ------------------------------


const NotFound = () => {
  return <div>NotFound</div>;
};

const DashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

const EmptyRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <EmptyLayout>
          <Component {...matchProps} />
        </EmptyLayout>
      )}
    />
  );
};

class App extends Component {
 
  render() {
    const { settings } = this.props;

    return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={settings.theme}>
        <CssBaseline />
        <div style={{ height: "100vh" }}>
          <Router>
              <Switch>
                <DashboardRoute path="/setting" component={Setting} />
                <DashboardRoute path="/dashboard" component={Home} />                
                <DashboardRoute path="/post/:id" component={DetailPage} />
                <DashboardRoute path="/" component={Landing} />
                <DashboardRoute path="/post" component={Posts} />
                <EmptyRoute component={NotFound} />
              </Switch>
            </Router>
        </div>
      </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}
App.propTypes = {};

const mapStateToProps = state => {
  return {
    settings: state.settings,
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
