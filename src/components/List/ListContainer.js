import { connect } from 'react-redux';
import { createActionAddColumn, getColumnsForList } from '../../redux/columnRedux.js';
import List from './List.js';


const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filtredList = state.lists.filter(list => list.id == id);
  const listParams = filtredList[0] || {};

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);