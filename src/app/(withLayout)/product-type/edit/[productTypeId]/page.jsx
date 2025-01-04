import { getUniqueProductType } from "@/actions/productTypesAction";
import EditProductType from "@/screens/product-type/edit";
import Script from "next/script";

const EditProductTypePage = async ({ params, searchParams }) => {
  const resolvedParams = await params; // Await the params object
  const { productTypeId: productTypeId } = resolvedParams; // Destructure the userId

  const productType = await getUniqueProductType(parseInt(productTypeId));

  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <EditProductType searchParams={searchParams} productType={productType} />
    </>
  );
};

export default EditProductTypePage;
