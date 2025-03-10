import SplitBar from "../ui/SplitBar";
import PriceFilter from "./PriceFilter";
import CustomLink from "../ui/CustomLink";

const categoriesMock = ["T-Shirts", "Shorts", "Jeans", "Shirts"];

const Filter = () => {
  return (
    <div className="border border-gray-400 flex-1/4 min-h-96 rounded-2xl p-2 flex flex-col gap-4">
      <p>Filtros</p>
      <SplitBar />
      <div className="flex flex-col gap-2">
        {categoriesMock.map((category) => (
          <CustomLink className="text-base" key={category} href={"/products"}>
            {category}
          </CustomLink>
        ))}
      </div>
      <SplitBar />
      <PriceFilter />
      <SplitBar />
    </div>
  );
};

export default Filter;
