import CustomLink from '../ui/CustomLink'

const categoriesMock = ["T-Shirts", "Shorts", "Jeans", "Shirts"];

const CategoryFilter = () => {
  return (
    <div className="flex flex-col gap-2">
    {categoriesMock.map((category) => (
      <CustomLink className="text-base" key={category} href={"/products"}>
        {category}
      </CustomLink>
    ))}
  </div>
  )
}

export default CategoryFilter