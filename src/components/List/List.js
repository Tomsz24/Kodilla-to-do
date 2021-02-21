import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js';
import Creator from '../Creator/Creator.js';
import ReactHtmlParser from 'react-html-parser';
import { settings } from '../../data/dataStore.js';

class List extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const { title, image, description, columns } = this.props;

    return (
      <section className={styles.component}>
        <Hero titleText={title} imageSrc={image}></Hero>
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>

        <div className={styles.columns}>
          {columns.map((columnData) => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>

        {/* <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} />
        </div> */}
      </section>
    );
  }
}

export default List;