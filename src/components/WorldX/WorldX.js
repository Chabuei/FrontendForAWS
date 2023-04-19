import { Html } from "@react-three/drei"
import styles from './WorldX.module.css'
import StateHandler from "@/utils/Statehandler.js"

const WorldX = () => 
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
                    <div className = { styles.none }>開発中(2022-)</div>
                    <div className = { styles.test }>
                        <h3 className = { styles.explanation }>概要</h3>
                        <span className = { styles.span }>World X</span>
                        <h3 className = { styles.skills }>技術スタック</h3>
                        <span className = { styles.span }>未定</span>
                        <h3 className = { styles.detail }>詳細</h3>
                        <span className = { styles.span }>　Webベースの新しい世界。全てのポートフォリオはこれを実現させるための勉強用です。仮想空間上をユーザが移動できるシステムをこのポートフォリオサイトにも搭載しています。<br/>開発中項目: サンドボックスゲーミフィケーション, 深層強化学習を用いた推薦システム(3dモデルを活用した視覚情報連携等)<br/>未着手項目: Solidityで実装した仮想土地内でのスマートコントラクトシステム, 仮想空間でのE-Commerce&支援システム</span>
                    </div>
                    <button className = { styles.back } onClick = { () => { stateTransition() } }>
                        Click here to back to home
                    </button>
                </div>
           </Html>
        </>
    )
}

export default WorldX