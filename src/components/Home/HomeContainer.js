import { connect } from 'react-redux';
import Home from './Home';
import { createActionAddList } from '../../redux/listsRedux';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
  columns: state.columns,
});

const mapDispatchToProps = (dispatch, props) => ({
  addList: title => dispatch(createActionAddList({
    id: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);