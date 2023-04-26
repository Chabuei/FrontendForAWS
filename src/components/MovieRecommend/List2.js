import { useEffect, useRef, useState } from 'react'
import { Html } from '@react-three/drei'
import { gsap } from 'gsap'
import styles from './List2.module.css'
import StateHandler from '@/utils/Statehandler.js'
import LikeCard from './LikeCard.js'
import axios from 'axios'

const List2 = () => 
{
    const [check, setCheck] = useState('error')
    const [currentUserLikes, setCurrentUserLikes] = useState([])
    const firstRender = useRef(false)
    const cardsContainerRef = useRef(null)
    const userLikes = StateHandler((state) => { return state.userLikes })
    const setCurrentState = StateHandler((state) => { return state.setCurrentState })
    const setCurrentPageNumber = StateHandler((state) => { return state.setCurrentPageNumber })
    const setRecommendedMovies = StateHandler((state) => { return state.setRecommendedMovies })
    const deleteAllUserLikes = StateHandler((state) => { return state.deleteAllUserLikes })

    const submit = async () => 
    {
        const arrayForRecommend = []

        currentUserLikes.map((currentUserLike) => 
        {
            arrayForRecommend.push(currentUserLike.id)
        })

        setCheck('okay')

        //const recommendedMovies = await axios.post('https://6s5f0hxwnj.execute-api.us-east-1.amazonaws.com/prod/createrecommend', { userInput: arrayForRecommend }, { headers: { "Content-type": "text/plain" } })
        //const recommendedMovies = await axios.get(`https://xei7ax90q9.execute-api.us-east-1.amazonaws.com/prod/createrecommend?items=${arrayForRecommend}`)
        const recommendedMovies = await (await fetch(`https://xei7ax90q9.execute-api.us-east-1.amazonaws.com/prod/createrecommend?items=${arrayForRecommend}`)).json()
        
        setCurrentState('recommend')
        setCurrentPageNumber(0)
        setRecommendedMovies(recommendedMovies.data, 'fromList')
    }

    const deleteAll = () => 
    {        
        deleteAllUserLikes()
    }

    useEffect(() => 
    {
        if(firstRender.current)
        {
            setCurrentUserLikes(userLikes)
            const timeline = gsap.timeline({})
            timeline.add(gsap.to(cardsContainerRef.current, { x: -10, duration: 0.25, opacity:0, ease: 'linear' }))
            timeline.add(gsap.to(cardsContainerRef.current, { x: 20, duration: 0 }))
            timeline.add(gsap.to(cardsContainerRef.current, { x: 0, opacity: 1, duration: 0.75, ease: 'expo.out' }))
        }
        else
        {
            firstRender.current = true
        }
    }, [userLikes])

    return (
        <>
            <mesh position = { [0, 0, 0] }>
                <Html transform>
                    <div className = { styles.container }>
                        <div className = { styles.explanation }>
                            <div className = { styles.buttons }>
                                <span className = { styles.howManyLikes }>{currentUserLikes.length}/10</span>                                
                                <button className = { styles.deleteAll } onClick = { () => { deleteAll() } }>
                                    Delete All
                                </button>                                                                
                                <button className = { styles.recommendButton } onClick = { () => { submit() } }>
                                    Recommend
                                </button>                                
                            </div>
                        </div>
                        {
                            <div className = { styles.list } ref = { cardsContainerRef }>
                                {
                                    currentUserLikes.map((currentUserLike, index) => 
                                    {
                                        return (                                        
                                            <LikeCard title = { currentUserLike.title } key = { index } index = { index }/>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                </Html>
            </mesh>
        </>
    )
}

export default List2