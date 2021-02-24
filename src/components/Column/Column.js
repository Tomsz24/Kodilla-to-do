import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Icon from '../Icon/Icon.js';
import Card from '../Card/Card.js';
// import Creator from '../Creator/Creator.js';
import { settings } from '../../data/dataStore.js';
import Creator from '../Creator/Creator';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  // state = {
  //   cards: this.props.cards || [],
  // }

  render() {
    const { title, icon, cards, addCard } = this.props;

    return (

      <section className={styles.component}>
        <h3 className={styles.title}>{title}<span className={styles.icon}><Icon name={icon} /></span></h3>
        <div>
          {cards.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>


        <div className={styles.creator}>
          {/* <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} /> */}
          <Creator action={addCard} />
        </div>
      </section>
    );
  }
}

export default Column;