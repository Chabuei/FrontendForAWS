import { Html } from '@react-three/drei'
import StateHandler from '@/utils/Statehandler.js'
import styles from './EishinIshida.module.css'

export const EishinIshida2 = () => 
{
    const setState3 = StateHandler((state) => { return state.setState3 })

    const stateTransition = () => 
    {
        setState3('trueNature')
    }

    return (
        <>
            <mesh position = { [ 5, -7.125, 0 ] }>
                <Html transform>
                    <button className = { styles.EishinIshida } onClick = { () => { stateTransition() } }>
                        Who is Eishin?
                    </button>                    
                </Html>
            </mesh>
        </>
    )
}