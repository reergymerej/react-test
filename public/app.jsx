(function () {
  
  // You should probably define the component, though.
  // http://facebook.github.io/react/docs/top-level-api.html#react.createclass
  var List = React.createClass({

    getInitialState: function () {
      return {
        data: [],
        intervalId: null
      };
    },

    componentDidMount: function () {
      var intervalId = setInterval((function (scope) {
        return function () {
          var max = 10;
          var data = scope.state.data || [];

          while (max--) {
            data.push(<ListItem number={max} />);
          }

          scope.setState({
            data: data
          });

          if (data.length > 33) {
            clearInterval(scope.state.intervalId);
          }
        };
      }(this)), 1000);

      this.setState({
        intervalId: intervalId
      });
    },

    render: function () {
      return (
        <ul>
          { this.state.data }
        </ul>
      );
    }
  });

  var ListItem = React.createClass({
    render: function () {
      return (
        <li>hello! { this.props.number }</li>
      );
    }
  });

  // All you have to do is render a component.
  React.render(
    <List />,
    document.getElementById('main')
  );


}());