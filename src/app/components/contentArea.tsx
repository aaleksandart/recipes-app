import React from 'react'
import { Interface } from 'readline';
import Btn from './btn';

interface IContent {
    name: string;
    bgColor: string;
    // recipes: string[];
}

export default function ContentArea(content: IContent) {
    return (
        <>
            <div className="bg-white h-64 w-full max-w-sm p-4 rounded-lg shadow-lg md:h-80 xl:h-96 max-w-lg">
                <span className={`underline px-2 ${content.bgColor} marker-font text-2xl`}>{content.name}</span>
                {
                    // content.recipes.map(r => (
                    //     <Link key={rec.id}>
                    //         <Customer member={customer}/>
                    //     </Link>
                    // ))
                }
                <Btn text='Explore' size="w-36"/>
            </div>
        </>
    )
}
