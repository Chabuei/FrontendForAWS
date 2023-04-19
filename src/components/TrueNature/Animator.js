import { useFrame } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import { useEffect } from 'react'
import StateHandler from '@/utils/Statehandler.js'

export default function Animator(props)
{   
    const animations = props.animations
    const [ subscribeKeys, getKeys ] = useKeyboardControls()
    const previousState2 = StateHandler((state) => { return state.previousState2 })
    const setState2 = StateHandler((state) => { return state.setState2 })
    const executeState2= StateHandler((state) => { return state.executeState2 })
    
    useEffect(() => 
    {
        setState2('Idle')
    }, [])
    
    useFrame((state, deltaTime) => 
    {
        const keys = getKeys()

        if(keys.KeyW || keys.KeyS) //このfsmはもっとキレイにしたい
        {
            if(keys.Space)
            {
                if(previousState2 == 'Walk' || previousState2 == 'Idle')
                {
                    setState2('Run')
                    executeState2(animations)    
                }
            }
            else
            {
                if(previousState2 == 'Idle' || previousState2 == 'Run')
                {
                    setState2('Walk')
                    executeState2(animations)
                }
            }
        }
        else
        {
            if(previousState2 == 'Walk' || previousState2 == 'Run' || previousState2 == null)
            {
                setState2('Idle')
                executeState2(animations)
            }
        }
    })

    return <>
    </>
}