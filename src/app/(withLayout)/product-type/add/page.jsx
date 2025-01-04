import AddProductTypes from "@/screens/product-type/add";

const AddProductTypePage = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  //const { searchParamsMsg } = resolvedParams;
  return <AddProductTypes searchParams={resolvedParams} />;
};

export default AddProductTypePage;
