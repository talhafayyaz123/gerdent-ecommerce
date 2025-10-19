import { useEffect } from "react"
import { BASE_URL } from "../../lib/constants"
import Breadcrumb from "../../UIComponents/Breadcrumb"
import Style from "../Blogs/SingleBlogDetail.module.css"
import RecentBlog from "./RecentBlog"
import Image from 'next/dist/client/image'

const SingleBlogDetail = (props: any) => {

    useEffect(() => {
    }, [])

    
    const date = new Date(props.blog.post !=undefined && props.blog.post.created_at)

    const data = {"name" : `Blogs / ${props.blog.breadcrumbs}`};

    return (
        <>
            <Breadcrumb data={data} />
            {props.blog.post !=undefined && (
                <div className="mb-28 mt-14 relative width flex flex-col lg:flex-row">
                <div className="blog-container leading-normal text-gray-600 lg:w-9/12 lg:mr-16">
                    <h2 className="text-3xl font-bold blog-title text-black leading-snug">{props.blog.post.heading_content}</h2>
                    <div className="mt-4 text-gray-600">
                        On
                        <span className="blog-date"> {date.toDateString()}</span>
                    </div>
                    <div className="mt-4">
                        <Image src={`${BASE_URL}up_data/blog/${props.blog.post.image}`} layout="responsive" width={900} height={479} alt={props.blog.post.heading_content} />
                    </div>
                    <div className="blog-content">
                        <div className={Style.detail} dangerouslySetInnerHTML={{ __html:  props.blog.post.full_content}}></div>
                    </div>
                </div>
                <div className="recent-blogs mt-6 lg:mt-0 lg:w-3/12">
                    <h2 className="leading-snug text-black text-3xl font-bold">Recent Posts</h2>
                    <div className="recent-blog-wrapper grid sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 lg:grid-cols-1">
                    {
                        props.blog.recent_posts != undefined && 
                        ( props.blog.recent_posts.data.map((recent_post : any) => {
                            return (
                                <RecentBlog recent_post={recent_post} key={recent_post.id} />
                            )
                        }))
                    }
                    </div>
                </div>
            </div>
            )}
        </>

    )
}

export default SingleBlogDetail
