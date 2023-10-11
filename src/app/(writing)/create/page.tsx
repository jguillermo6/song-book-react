'use client'

import React from "react"
import HeaderMenu from "../header-menu"
import NavButton from "@/app/controls/nav-button"
import { useRouter } from 'next/navigation';

export default function CreateSong(){
    const router = useRouter()

    return (
        <>
        <HeaderMenu>
            <NavButton title="title" action={() => console.log("xD")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-indigo-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg> 
            </NavButton>
        </HeaderMenu>
        <textarea className="w-screen h-1/2">
        </textarea>
        <div>
            <div className="flex flex-row gap-1">
                <div className="basis-1/7">C</div>
                <div className="basis-1/7">D</div>
                <div className="basis-1/7">E</div>
                <div className="basis-1/7">F</div>
                <div className="basis-1/7">G</div>
                <div className="basis-1/7">A</div>
                <div className="basis-1/7">B</div>
            </div>
            <div>
                <div>ø</div>
                <div>b</div>
                <div>maj</div>
                <div>sus</div>
                <div>add</div>
                <div>m</div>
                <div>#</div>
                <div>°</div>
            </div>
            <div>
                <div>5</div>
                <div>4</div>
                <div>7</div>
                <div>9</div>
            </div>            
        </div>
        </>
    )
}

