import Link from 'next/link'
import React from 'react'

const MobileFooter = () => {
    return (
        <div className="footer-subscription-container-mob block lg:hidden width">
            <div className="footer-subscription-wrapper-mob flex flex-col sm:flex-row">
                <div className="footer-support-links w-full w-12/12 sm:w-6/12 mt-8">
                    <div className="col-title text-black font-bold">Customer Care</div>
                    <div className="link-wrapper mt-8 flex flex-col">
                        <Link href='/pages/shipping-and-returns'>
                            <a className="text-gray-600">Shipping &amp; Return</a>
                        </Link>
                        <Link href='/pages/privacy-policy'>
                            <a className="mt-4 text-gray-600">Privacy Policy</a>
                        </Link>
                        <Link href='/pages/terms-and-conditions'>
                            <a className="mt-4 text-gray-600">Terms &amp; Conditions</a>
                        </Link>
                    </div>
                </div>
                <div className="footer-subscribe-wrapper w-full w-12/12 sm:w-6/12 mt-8">
                    <div className="col-title text-black font-bold">Subscribe Now</div>
                    <p className="text-gray-600 leading-normal mt-8">Subscribe your email for newsletter updates based on your interest</p>
                    <div className="subscribe-input-wrapper border border-gray-300 border-solid text-sm rounded-lg bg-white mt-4 flex items-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#bbb">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <input className="p-3 rounded-lg focus:outline-none w-full" type="email" placeholder="Enter you email" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer transform-gpu rotate-90 justify-self-end mr-2" viewBox="0 0 20 20" fill="#52A0F2">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileFooter
