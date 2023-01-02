import Text from "../components/blocks/Text";
import Image from "../components/blocks/Image";
import Unknown from "../components/blocks/Unknown";
import Quote from "../components/blocks/Quote";
import Table from "../components/blocks/Table";
import HTML from "../components/blocks/HTML";

const typesMap = {
  text: Text,
  image: Image,
  quote: Quote,
  table: Table,
  html: HTML,
};

function getBlockComponent(type) {
  return typesMap[type] || Unknown;
}

export default getBlockComponent;
