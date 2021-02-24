import { connect } from 'react-redux';
import { createActionAddColumn, getColumnsForList } from '../../redux/columnRedux.js';
import List from './List.js';


// export const getColumnsForList = ({ columns }, listId) => columns.filter(column => column.listId == listId);

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);