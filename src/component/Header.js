import React, { useState } from 'react'
import wikipedia from '../static/images/icons/wikipedia.png'
import wikipediaWordmarkEn from '../static/images/mobile/copyright/wikipedia-wordmark-en.svg'
import wikipediaTaglineEn from '../static/images/mobile/copyright/wikipedia-tagline-en.svg'
import { IoIosSearch } from "react-icons/io";

export default function Header() {
    const [search, setSearch] = useState('')
    const handleSubmit = () => {
        console.log(search)
    }
    return (
        <div style={{
            width: '90%',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <header style={{
                display: 'flex',
                width: '100%',
                gap: 40,
                alignItems: 'center'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <div style={{
                        display: 'flex',
                        height: '100%',
                        alignItems: 'center',
                        gap: 10
                    }}>
                        <img className="mw-logo-icon" src={wikipedia} alt="" aria-hidden="true" height="50" width="50" />
                        <span style={{
                            float: 'left',
                            maxWidth: 120
                        }}>
                            <img className="mw-logo-wordmark" alt="Wikipedia" src={wikipediaWordmarkEn} style={{ width: '7.5em', height: '1.125em' }} />
                            <img className="mw-logo-tagline" alt="The Free Encyclopedia" src={wikipediaTaglineEn} width="117" height="13" style={{ width: '7.3125em', height: '0.8125em' }} />
                        </span>
                    </div>

                </div>
                <div style={{
                    maxWidth: '35.71428571em',
                    marginRight: 12
                }}>
                    <form action='' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid gray' }}>
                        <div className="">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                                <IoIosSearch color='gray' size={24} />
                                <input
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        fontSize: 14,
                                        width: 350
                                    }}
                                    onChange={(e) => setSearch(e.target.value)}
                                    type="search"
                                    name="search"
                                    placeholder="Search Wikipedia"
                                    aria-label="Search Wikipedia"
                                    title="Search Wikipedia"
                                    id="searchInput"
                                />
                                <span className="cdx-text-input__icon cdx-text-input__start-icon"></span>
                            </div>
                            <input type="hidden" name="title" value="Special:Search" />
                        </div>
                        <button onClick={handleSubmit}
                            style={{
                                padding: '5px 10px',
                                border: 'none',
                                borderLeft: '1px solid gray',
                                fontWeight: 'bold',
                                fontSize: 14
                            }}>Search</button>
                    </form>
                </div>
            </header>
        </div>
    )
}