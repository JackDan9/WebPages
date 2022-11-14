/**
 * HOC不会修改传入的组件，也不会使用继承来复制其行为。相反，HOC通过将组建包装在容器组件中来组成新组件。
 * HOC是纯函数，没有副作用。
 * 
 * 被包装的组件接收来自容器组件的所有prop，同时也接收一个新的用于render的data prop。
 * HOC不需要关心数据的使用方式或者原因，而被包装组件也不需要关心数据是怎么来的。
 * 
 * 因为withSubsciption是一个普通函数，你可以根据需要对参数进行增添和删除。
 * 例如，您可能希望使data prop的名称可配置，以进一步将HOC与包装组件隔离开来。或者你可以接受一个配置shouldComponentUpdate的参数，或者一个配置数据源的参数。因为HOC可以控制组件的定义方式，这一切都变得有可能。
 * 
 * 与普通组件一样，withSubscription和包装组件之间的契约完全基于之间传递的props。
 * 这种依赖方式使得替换HOC变得容易，只要它们为包装的组件提供相同的prop即可。例如你需要改用其他库来获取数据的时候，这一点就很有用。
 * 
 * 不要试图在HOC中修改组件的原型(或者以其他方式改变它)
 * @param {*} WrappedComponent 
 * @param {*} selectData 
 * @returns 
 */
// 此函数接收一个组件...
function withSubscription(WrappedComponent, selectData) {
  // ...并返回另一个组件...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props);
      };
    }

    componentDidMount() {
      // ...
      DataSource.addChangeLister(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      })
    }

    render() {
      // 
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  }
}