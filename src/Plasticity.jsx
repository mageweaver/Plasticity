import React from 'react';

class Plasticity extends React.Component {
  constructor(props) {
    super(props);

    this.loadModules		= this.loadModules.bind(this);

    this.state = {
      this.state.modules = this.loadModules(this.props.modules);
    };
  }

  componentWillReceiveProps(nextProps) {
  }

  componentDidMount() {
  }

  componentWillUnMount() {
  }

  loadModules(modules) {
    return modules;
  }

  render() {
    return (
    );
  }
};

Plasticity.defaultProps = {
}

export default Plasticity;
