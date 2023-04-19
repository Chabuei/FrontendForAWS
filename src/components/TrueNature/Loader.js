import { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import Animator from './Animator.js'
import StateHandler from '@/utils/Statehandler.js'

export default function Loader(props)
{
    const { animations, scene } = useGLTF('/model/Soldier.glb')
    const newAnimations = useAnimations(animations, scene)
    const currentState3 = StateHandler((state) => { return state.currentState3 })
    
    return (
        <>
            <primitive castShadow receiveShadow visible = { currentState3 == 'trueNature' ? true : false } object = { scene } position = {[1.5, 0.1, 2.5]} rotation = {[3.141, -0.348, 3.141]}/>

            <mesh visible = { false } position = { [0, 0, 0] }>
                <boxGeometry args = { [14.5, 0.5, 10] }/>
                <meshBasicMaterial color = 'green'/>
            </mesh>
    
            <hemisphereLight args = { ['#fbc367', '#4b3d60', 3] }/>

            <Animator animations = { newAnimations }/>
        </>
    )
}

