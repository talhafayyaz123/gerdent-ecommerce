import React from 'react'
import Link from "next/link"

const BottomFooter = () => {
    return (
        <div className="copy-right-wrapper w-full bg-white text-sm text-center mt-10 h-20 flex items-center justify-center mb-20 lg:mb-0">
            <div className="copy-right">
                Copyright © 2021
                <span>&nbsp;
                <Link href='/'>
                    <a className="border-b border-black border-solid">GerDentUSA.com.</a>
                </Link>&nbsp;
                </span>
                All Right Reserved.
            </div>
        </div>
    )
}

export default BottomFooter
