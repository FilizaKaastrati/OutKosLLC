import DomainList from "../components/domain/DomainList";
import DomainData from "../components/domain/DomainData";
import CardList from "../components/cards/CardList";
import CardData from "../components/cards/CardData";


function FirstTaskPage() {
  return (
    <div>
      <DomainList lists={DomainData} />
      <CardList list={CardData} />
    </div>
  );
}
export default FirstTaskPage;
