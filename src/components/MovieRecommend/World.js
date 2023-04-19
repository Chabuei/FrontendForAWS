import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Card from '@/components/MovieRecommend/Card.js'
import Genre from '@/components/MovieRecommend/Genre.js'
import GenreInput from '@/components/MovieRecommend/GenreInput.js'
import StateHandler from '@/utils/Statehandler.js'

const World = ({ movies }) => 
{
    const cardsElement = useRef(null)
    const renderFlag = useRef(0) //userefは値を更新しても再レンダリングが起きない使用を持つ
    const currentLeftTrigger = StateHandler((state) => { return state.currentLeftTrigger })
    const currentRightTrigger = StateHandler((state) => { return state.currentRightTrigger })

    useEffect(() => 
    {
        if(renderFlag.current) //このdependencyのuseeffectとが初回レンダリングで発火するのをフラグを使って防ぐ
        {
            const timeline = gsap.timeline({})
            timeline.add(gsap.to(cardsElement.current.position, { x: -7, duration: 0.5, opacity:0, ease: 'linear' }))
            timeline.add(gsap.to(cardsElement.current.position, { x: 7, duration: 0 }))
            timeline.add(gsap.to(cardsElement.current.position, { x: 0, opacity: 1, duration: 1.5, ease: 'expo.out' }))
        }
        else
        {
            renderFlag.current = true
        }
    }, [currentRightTrigger])

    useEffect(() => 
    {
        if(renderFlag.current) //このdependencyのuseeffectとが初回レンダリングで発火するのをフラグを使って防ぐ
        {
            const timeline = gsap.timeline({})
            timeline.add(gsap.to(cardsElement.current.position, { x: 7, duration: 0.5, opacity:0, ease: 'linear' }))
            timeline.add(gsap.to(cardsElement.current.position, { x: -7, duration: 0 }))
            timeline.add(gsap.to(cardsElement.current.position, { x: 0, opacity: 1, duration: 1.5, ease: 'expo.out' }))
        }
        else
        {
            renderFlag.current = true
        }
    }, [currentLeftTrigger])

    return (
        <>
            <mesh position = { [ 12.275, 5.2, 0 ] }>
                <Genre />
            </mesh>
            <mesh position = { [ 0, 0, 0 ] }>
                <GenreInput />
            </mesh>
            <mesh ref = { cardsElement } position = { [ 0, -1.5, 0 ] }>
                <Card />
            </mesh>          
        </>
    )
}

export default World