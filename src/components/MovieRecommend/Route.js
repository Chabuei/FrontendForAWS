import { Html } from '@react-three/drei'
import styles from './Route.module.css'
import StateHandler from '@/utils/Statehandler.js'

const Route = () => 
{
    const currentState = StateHandler((state) => { return state.currentState })
    const currentRecommendedMovies = StateHandler((state) => { return state.currentRecommendedMovies })
    const setState3 = StateHandler((state) => { return state.setState3 })
    const setMovies = StateHandler((state) => { return state.setMovies })
    const setCurrentState = StateHandler((state) => { return state.setCurrentState })
    const setAllAdaptedMovies = StateHandler((state) => { return state.setAllAdaptedMovies })
    const setRecommendedMovies = StateHandler((state) => { return state.setRecommendedMovies })
    const setCurrentPageNumber = StateHandler((state) => { return state.setCurrentPageNumber })

    const Home = () => 
    {
        setCurrentState('home')
        setCurrentPageNumber(1)
        setMovies()
    }

    const Recommend = () => 
    {
        if(currentRecommendedMovies.length >= 1)
        {
            setAllAdaptedMovies(currentRecommendedMovies.length)
            setCurrentState('recommend')
            setCurrentPageNumber(0)
            setRecommendedMovies([], 'fromIndex')
        }
    }

    const stateTransition = () => 
    {
        setState3('trueNature')
    }

    return (
        <>
            <mesh position = { [-1.25, 0, 0] }>
                <Html transform>
                    <div className = { styles.container }>                        
                        <button className = { currentState == 'home' ? 'specificHome' : 'normalHome' } onClick = { () => { Home() } }>
                            Home
                        </button>                        
                        <button className = { currentState == 'recommend' ? 'specificRecommend' : 'normalRecommend' } onClick = { () => { Recommend() } }>
                            Recommended
                        </button>                        
                    </div>
                </Html>   
            </mesh>
        </>
    )
}

export default Route