import { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { ClickEventButton } from "../../../UIComponents/Button";
import BlogSection from "./BlogSection";

const BlogList = ( props : any) => {

    const {redirectTo} = useContext(MainContext)

    const redirectBtnFunc = () => {
        redirectTo('/blog')
    }

    return (
        <>
            <section className="blog pt-28">
                <div className="blog-container flex flex-col lg:flex-row width">
                    <div className="blogs-wrapper flex flex-col items-center w-full">
                        <h2 className="text-3xl text-center font-bold">
                            Our Recent Blogs
                        </h2>
                        <div className="blogs-imgs-container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 mb-10 gap-6">
                            {props.Blogs.map((recentBlog : any, index:any) => {
                                return (<BlogSection key={index} blog={recentBlog} />)
                            })}
                        </div>
                        <ClickEventButton text="All Blogs" eventFunction={redirectBtnFunc} classpara="primary-blue-bg read-all-blogs-btn" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogList;
