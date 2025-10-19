import React from 'react'
import Link from 'next/link'

const Breadcrumb = (props: any) => {
    return (
        <div className="bg-gray-100">
            <div className="breadcrumb py-4 text-black width leading-snug">
                <Link href="/">
                    <a>
                        Home
                    </a>
                </Link>
                <span> / </span>
                <a >{props.data != undefined && (props.data.name)}</a>
            </div>
        </div>
    )
}

export default Breadcrumb