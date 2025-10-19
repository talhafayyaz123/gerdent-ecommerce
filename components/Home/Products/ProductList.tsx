import { useContext, useEffect } from "react";
import { MainContext } from "../../../contexts/MainContext";
import Product from "./Product";

const ProductList = ( props : any ) => {

    const {setIsLoading} = useContext(MainContext)

    useEffect(() => {
        setIsLoading(false)
    }, [setIsLoading])

    return (
        <>
            <section className="featured-products py-28 bg-gray-100">
                <div className="featured-products-wrapper width flex flex-col items-center">
                    <h2 className="text-3xl font-bold text-center">
                        Our Featured Products
                    </h2>
                    <div className="featured-products-imgs-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 w-full gap-4">
                        {props.Products.data.map((product : any) => (
                            <Product key={product.id} product={product} />
                        ))}
                        {/* <Product /> */}
                    </div>
                    {/* <Button text="All Products" link="" classpara="all-products-btn dark-blue-bg" /> */}
                </div>
            </section>
        </>
    );
};

export default ProductList;
