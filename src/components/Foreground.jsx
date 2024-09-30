import React, { useRef } from 'react'
import Card from './Card'
// import { motion } from "framer-motion"

function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            filesize: ".8mb",
            close: true,
            tag: {isOpen: true, tagTitle:"Upload ", tagColor: "green"},
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            filesize: ".8mb",
            close: false,
            tag: {isOpen: true, tagTitle:"Download Now ", tagColor: "red"},
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            filesize: ".8mb",
            close: false,
            tag: {isOpen: false, tagTitle:"Upload ", tagColor: "green"},
        },
    ];
    return (
        <div ref={ref}className='fixed top-0 left-0 z-[3] w-full flex gap-10 flex-wrap p-5'>
            {data.map((item, index) => (
                <Card data={item} reference={ref}/>
            ))}
        </div>
    )
}

export default Foreground
