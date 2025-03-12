import Button from "../ui/Button";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

const pagMock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

type NumProps = {
  num: number;
  selected?: boolean;
  pageLength: number;
};

const Num = ({ num, selected = false, pageLength }: NumProps) => {
  return (
    <div
      className={`border flex items-center px-4 py-3 border-r-0 cursor-pointer hover:bg-gray-200 transition-all ${
        num == 1 && "rounded-l-xl"
      } ${
        selected
          ? "border-black border-r-2 border-2 bg-gray-200"
          : "border-gray-400"
      }
      ${num == pageLength && "rounded-r-xl border-r-2"}
      `}
    >
      {num}
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Pagination = (props: Props) => {
  return (
    <div className="flex w-full justify-between mt-8">
      <Button className="font-medium">{"<- Anterior"}</Button>
      <div className="flex">
        {pagMock.map((pagNum, index) => {
          return (
            <Num
              selected={index == 0}
              num={pagNum}
              pageLength={pagMock.length}
              key={index}
            />
          );
        })}
      </div>
      <Button className="font-medium">{"Próximo ->"}</Button>
    </div>
  );
};

export default Pagination;
