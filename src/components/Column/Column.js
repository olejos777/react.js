import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    addCard: PropTypes.func,
    icon: PropTypes.string,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const { title, icon, cards, addCard } = this.props;

    return (
      <section className={styles.component}>
        <span className={styles.icon}>
          <Icon name={icon} />
        </span>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>

        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>
      </section>
    );
  }
}

export default Column;

