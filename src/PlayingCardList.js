import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { hooks } from "./hooks";
const { useAxios } = hooks;

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [items, addItem] = useAxios(
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addItem()}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {items.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
