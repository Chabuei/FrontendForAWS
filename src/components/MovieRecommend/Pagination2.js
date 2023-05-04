import { useEffect, useRef } from 'react'
import { Html } from '@react-three/drei'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import styles from './Pagination2.module.css'
import StateHandler from '@/utils/Statehandler.js'

const Pagination2 = () => 
{
    const firstRender = useRef(false)
    const paginationButton = useRef(null)
    const allAdaptedMovies = StateHandler((state) => { return state.allAdaptedMovies })    
    const currentPageNumber = StateHandler((state) => { return state.currentPageNumber })
    const incrementPageNumber = StateHandler((state) => { return state.incrementPageNumber })
    const decrementPageNumber = StateHandler((state) => { return state.decrementPageNumber })
    const setMovies = StateHandler((state) => { return state.setMovies })
    const setState3 = StateHandler((state) => { return state.setState3 })

    const stateTransition = () => 
    {
        setState3('trueNature')
    }

    useEffect(() => 
    {
        if(firstRender.current)
        {
            setMovies(currentPageNumber)    
        }
        else
        {
            firstRender.current = true
        }
    }, [currentPageNumber])

    return (
        <>
            <mesh position = { [3, -7, 0] }>
                <Html transform>                    
                    <span className = { styles.paginationNumber }>
                        { Math.floor(((currentPageNumber / 10)) + 1)+'/'+ Math.ceil((allAdaptedMovies / 10)) }
                    </span>
                    <div className = { styles.pagination }>
                        <div className = { styles.paginationButton } onClick = { () => { decrementPageNumber() } } ref = { paginationButton }> 
                            <FaArrowLeft className = {styles.icon}/>
                        </div>
                        <div className = { styles.paginationButton2 } onClick = { () => { incrementPageNumber() } } ref = { paginationButton }>
                            <FaArrowRight className = {styles.icon}/>
                        </div>
                        {/*<button className = { styles.EishinIshida } onClick = { () => { stateTransition() } }>
                            Who is Eishin?
                        </button>*/}
                    </div>                    
                </Html>
            </mesh>
        </>
    )
}

export default Pagination2