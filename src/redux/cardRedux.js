import shortid from 'shortid';


export const getCardsForList = ({ cards }, columnId) => cards.filter(card => card.columnId == columnId);


// reducer name
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action type
export const ADD_CARD = createActionName('ADD_CARD');

//action creator
export const createActionAddCard = payload => ({
  payload: { ...payload, id: shortid.generate() },
  type: ADD_CARD
});

//reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}