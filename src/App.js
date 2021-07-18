import { useState } from "react";
import "./App.css";

import Wrapper from "./Wrapper/Wrapper";

const datos_from_api = Array.from({ length: 60 }, (value, index) => {
  return { id: index, title: `Item #${index}` };
});

const ITEMS_PER_PAGE = 10;

function App() {
  const [dataFromApi, setDataFromApi] = useState(datos_from_api);

  const [items, setItems] = useState([...dataFromApi].slice(0, ITEMS_PER_PAGE));

  const [currentPage, setCurrentPage] = useState(0);

  const next = () => {
    const totalElements = dataFromApi.length;

    const nextPage = currentPage + 1;

    const firstIndexOfNextPage = nextPage * ITEMS_PER_PAGE;

    if (firstIndexOfNextPage === totalElements) return;

    setItems([...dataFromApi].splice(firstIndexOfNextPage, ITEMS_PER_PAGE));
    setCurrentPage(nextPage);
  };

  const prev = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 0) return;
    const firstIndexOfPrevPage = prevPage * ITEMS_PER_PAGE;
    setItems([...dataFromApi].splice(firstIndexOfPrevPage, ITEMS_PER_PAGE));
    setCurrentPage(prevPage);
  };

  return (
    <Wrapper
      prevHandler={prev}
      nextHandler={next}
      currentPage={currentPage}
      items={items}
    ></Wrapper>
  );
}

export default App;
