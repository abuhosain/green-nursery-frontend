 
import Container from '../../../components/ui/container/Container';
import { useGetAllCategoryQuery } from '../../../redux/feature/category/categoryApi';
import CategoryCard, { ICategory } from './_components/CategoryCard';

const Category = () => {
  const { data, error, isLoading } = useGetAllCategoryQuery(undefined);

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10">Error loading categories</div>;

  const categories = data?.data || [];

  return (
    <Container>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-12 text-indigo-600">proDuct CaTegOry</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category : ICategory) => (
            <CategoryCard
              key={category._id}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Category;
