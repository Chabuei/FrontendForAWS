import { useState, useEffect, useRef } from 'react'
import { Html } from '@react-three/drei'
import { FaSearch } from 'react-icons/fa'
import styles from './Header2.module.css'
import StateHandler from '@/utils/Statehandler.js'

const Header2 = () => 
{
    const firstRender = useRef(false)
    const [keyword, setKeyword] = useState('')    
    const setSearchKeyword = StateHandler((state) => { return state.setSearchKeyword })
    const currentState = StateHandler((state) => { return state.currentState })
    const currentPageNumber = StateHandler((state) => { return state.currentPageNumber })
    const setCurrentPageNumber = StateHandler((state) => { return state.setCurrentPageNumber })
    const setCurrentState = StateHandler((state) => { return state.setCurrentState })
    const setSearchResults = StateHandler((state) => { return state.setSearchResults })

    const inputKeyword = (event) => 
    {
        setKeyword(event.target.value)
    }

    const searchKeyword = (keyword) => 
    {
        if(keyword.length >= 1)
        {
            setSearchKeyword(keyword)
            setCurrentState('search')
            setCurrentPageNumber(0)
            setSearchResults(keyword)
        }
    }

    useEffect(() => 
    {
        if(!firstRender.current)
        {
            firstRender.current = true
        }
    }, [])

    useEffect(() => 
    {
        if(firstRender.current)
        {
            if(currentState == 'search')
            {    
                setSearchResults(keyword)
            }
        }
    }, [currentPageNumber])

    return (
        <>
        <mesh position = { [0, 3.6, 0] }>
            <Html transform>
                <header className = { styles.header }>
                    <div className = { styles.container }>
                        <div className = { styles.subHeader }>
                            <div className = { styles.headerTitle }>
                                Movie-<span className = { styles.soul }>X</span>                            
                            </div>
                        </div>
                        <div className = { styles.inputContainer }>
                            <input className = { styles.headerInput } type = "text" placeholder = 'movie name' onChange = { (event) => { inputKeyword(event) } }/>
                            <button className = { styles.headerButton } onClick = { () => { searchKeyword(keyword) } }>
                                <FaSearch className = { styles.headerIcon }/>
                            </button>
                        </div>
                    </div>
                </header>
            </Html>
        </mesh>
        </>
    )
}

export default Header2