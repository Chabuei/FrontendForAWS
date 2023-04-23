import { useEffect, useRef, useState, lazy } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { FaStar } from 'react-icons/fa'
import styles from './Card.module.css'
import StateHandler from '@/utils/Statehandler.js'
import Image from 'next/image'
import axios from 'axios'

const Title = lazy(() => {return import('../MovieRecommend/Title.js')})

const Rating = (props) => 
{
    return (
        <>
            { 
                (Math.round(props.rating * 10) / 10).toFixed(1) /*まず四捨五入する、これが整数だったら実数にしたいのでtofixedで有効数字2桁の実数にしている*/
            }
        </>
    )
}

const Image2 = (props) => 
{  
    const hoo = async () => 
    {
        const dogImage = await axios.get('https://dog.ceo/api/breeds/image/random')
    }

    hoo()
    console.log('hello')

    return (
        <Image width={400} height={200} className = { styles.cardImage } src = { 'https://images.dog.ceo/breeds/waterdog-spanish/20180723_185559.jpg' } alt = 'movie_poster' />                                            
    )
}

const Card = () => 
{
    const firstRender = useRef(false)
    const camera = useThree().camera
    const cameraQuaternion = new THREE.Quaternion(0, 0, 0, 0)
    const cardPositions = 
    [
        { x: -3, y: 2},
        { x: 0, y: 2},
        { x: 3, y: 2},
        { x: 6, y: 2},
        { x: 9, y: 2},
        { x: -3, y: -3},
        { x: 0, y: -3},
        { x: 3, y: -3},
        { x: 6, y: -3},
        { x: 9, y: -3}
    ]

    const currentMovies = StateHandler((state) => { return state.currentMovies })
    const currentPageNumber = StateHandler((state) => { return state.currentPageNumber })
    const setUserLikes = StateHandler((state) => { return state.setUserLikes })
    const [moviesNow, setMoviesNow] = useState(currentMovies)

    const getCardInfo = (title, id) => 
    {
        setUserLikes(title, id)
    }

    useEffect(() => 
    {
        camera.lookAt(3, 0, 0)
        camera.quaternion.copy(cameraQuaternion)
    }, [])

    useEffect(() => 
    {
        if(firstRender.current)
        {
            setMoviesNow(currentMovies)
        }
        else
        {
            firstRender.current = true
        }
    }, [currentPageNumber])

    return (
        <>
            { 
                cardPositions.map((cardPosition, index) => 
                {
                    return (
                        <mesh position = { [cardPosition.x, cardPosition.y, 0] } key = { index }>
                            <Html transform>
                                <div className = { styles.all }>
                                    <div className = { styles.cardExtra }>
                                        <div className= { styles.cardContents }>
                                            <FaStar className = { styles.cardIcon } />
                                            <div className = { styles.cardRating }>                                                
                                                <Rating rating = { currentMovies[index].rating }/>                                                
                                            </div>                                                                              
                                        </div>
                                    </div>
                                    <div className = { styles.card } onClick = { () => { getCardInfo(currentMovies[index].title, currentMovies[index].movie_id) } }>
                                        <div className = { styles.cardHead }>
                                            <div className = { styles.cardContents2 }>                                            
                                                <Image2 image = { currentMovies[index].image }/>                                            
                                            <hr className = { styles.cardLine } noshade = '' align = 'center'/>
                                            </div>
                                        </div>
                                        <div className = { styles.cardTitle }>                                            
                                            <Title title = { currentMovies[index].title }/>                                                                                        
                                        </div>
                                    </div>
                                </div>
                            </Html>
                        </mesh>
                    )       
                })
                
            }
        </>
    )
}

export default Card