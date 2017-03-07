import React from 'react';

export default class PropsComponent extends React.Component {
  
  render() {
    return (
      <div>
        Hello {this.props.firstName} {this.props.lastName}
      </div>
    );
  }
}

PropsComponent.defaultProps =  {
  lastName: "Reigns"
}