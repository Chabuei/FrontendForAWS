import { Html } from '@react-three/drei'
import styles from './GravityPoint.module.css'
import StateHandler from '@/utils/Statehandler.js'

const GravityPoint = () => 
{
    const setState3 = StateHandler((state) => { return state.setState3 })

    const stateTransition = () => 
    {
        setState3('trueNature')
    }

    return (
        <>
            <Html transform wrapperClass = { styles.html } distanceFactor = { 1 } occlude = 'blending'>
                <div className = { styles.container }>
                    <iframe className = { styles.iframe } width="1100" height="680" src="https://www.youtube.com/embed/wDg_0sAQKus?start=6&autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className = { styles.test }>
                        <h3 className = { styles.explanation }>概要</h3>
                        <span className = { styles.span }>身体重心計算ソフト(2022)</span>
                        <h3 className = { styles.skills }>技術スタック</h3>
                        <span className = { styles.span }>Next.js, React Three Fiber&Drei</span>
                        <h3 className = { styles.detail }>詳細</h3>
                        <span className = { styles.span }>　体の37ヶ所に取り付けたモーションキャプチャセンサから身体座標を取得し、その身体重心を求めて表示するソフトです。</span>                    
                    </div>
                    <button className = { styles.back } onClick = { () => { stateTransition() } }>
                        Click here to back to home
                    </button>
                </div>
            </Html>
        </>
    )
}

export default GravityPoint
