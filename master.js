'use strict';

const e = React.createElement;
const {Container } = required('semantic-ui-react')

// class Container extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

const domContainer = document.querySelector('#container');
ReactDOM.render(e(Container), domContainer);
