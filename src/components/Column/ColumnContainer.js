import { connect } from 'react-redux';
import { createActionAddCard, getCardsForList } from '../../redux/cardRedux.js';
import Column from './Column.js';


// export const getCardsForList = ({ cards }, columnId) => cards.filter(card => card.columnId == columnId);

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

const mapStateToProps = (state, props) => ({
  cards: getCardsForList(state, props.id),

});

export default connect(mapStateToProps, mapDispatchToProps)(Column);