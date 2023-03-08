import React, { Component } from "react";
// import CircularProgress from "@material-ui/core/CircularProgress";
import "./SplashScreen.css";
import LoadingSpinner from "../loader/Loader";

const LoadingMessage=()=>{
  return (
    <LoadingSpinner/ >
  );
}

function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 1500);
    }

    render() {
      if (this.state.loading) return <LoadingMessage />;

      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;
