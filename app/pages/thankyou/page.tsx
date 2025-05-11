import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineArrowLeft} from 'react-icons/ai'

const ThankYouPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-1/2">
                {/* <Image src="/images/thankyou.png" width={500} height={500} /> */}
            </div>
            <h1 className="text-3xl font-bold">Thank you for shopping with us!</h1>
            <p className="text-lg">We appreciate your business and hope to see you again soon!</p>
            <Link href="/" legacyBehavior>
                <div className="flex items-center mt-4 text-lg font-bold">
                    <AiOutlineArrowLeft className="mr-2" /> Back to Home
                </div>
            </Link>
        </div>
    )
}

export default ThankYouPage

