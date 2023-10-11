import React, { Children } from "react";
import NavButton from "../controls/nav-button";
import { useRouter } from "next/navigation";

export default function HeaderMenu({children}:{children: React.ReactNode}){

    const router = useRouter()

    const headerItems = Children.map(children, (child) => <li>{child}</li>)

    return (
        <>
            <ul>
                <li>
                    <NavButton title="title" action={() => router.push("list-song")}>            
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-indigo-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                    </NavButton>
                </li>
                { headerItems }
            </ul>
        </>
    )

}