import SplitBar from "../ui/SplitBar";
import PriceFilter from "./PriceFilter";
import FilterTitle from "./FilterTitle";
import ColorFilter from "./ColorFilter";
import Selector from "../ui/Selector";
import Button from "../ui/Button";
import CategoryFilter from "./CategoryFilter";

const Filter = () => {
  return (
    <div className="border border-gray-400 flex-1/4 min-h-96 rounded-2xl p-4 flex flex-col gap-4 py-6">
      <FilterTitle title="Filtros" />
      <SplitBar />
      <CategoryFilter />
      <SplitBar />
      <PriceFilter />
      <SplitBar />
      <ColorFilter />
      <SplitBar />
      <Selector title="Tamanho" />
      <SplitBar />
      <Button black>Aplicar Filtros</Button>
    </div>
  );
};

export default Filter;
