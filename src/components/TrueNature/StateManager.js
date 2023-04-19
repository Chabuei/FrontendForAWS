import { useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Html, useKeyboardControls } from "@react-three/drei"
import styles from './StateManager.module.css'
import StateHandler from "@/utils/Statehandler.js"

const StateManager = () => 
{
    const [ subscribeKeys, getKeys ] = useKeyboardControls()
    const [currentState, setCurrentState] = useState('movieRecommend')
    const setState3 = StateHandler((state) => { return state.setState3 })

    useFrame((state, deltaTime) => 
    {
        const keys = getKeys()
        const avatarPosition = state.scene.children[1].position

        state.scene.children[4].position.x = avatarPosition.x
        state.scene.children[4].position.y = 1.9
        state.scene.children[4].position.z = avatarPosition.z

        if(keys.KeyF)
        {
            if(currentState !== '')
            {
                setState3(currentState)
            }
        }

        if(avatarPosition.z >= -1 && avatarPosition.z <= 4)
        {
            if(avatarPosition.x >= -6.8 && avatarPosition.x <= -4.11)
            {
                setCurrentState('foodBank')                
            }

            else if(avatarPosition.x >= -1.4 && avatarPosition.x <= 1.4)
            {
                setCurrentState('EishinIshida')
            }

            else if(avatarPosition.x >= -4.1 && avatarPosition.x <= -1.41)
            {
                setCurrentState('gravityPoint')                
            }

            else if(avatarPosition.x >= 1.41 && avatarPosition.x <= 4.1)
            {
                setCurrentState('movieRecommend')                
            }

            else if(avatarPosition.x >= 4.11 && avatarPosition.x <= 6.8)
            {
                setCurrentState('underDevelopment')
            }

            else setCurrentState('')
        }
    })

    return (
    <>
        <mesh>
            <Html>
                <div className = { styles.card }>
                    { currentState ? 'Push F key to see ' + currentState : '' }
                </div>
            </Html>
        </mesh>
    </>
    )
}

export default StateManager