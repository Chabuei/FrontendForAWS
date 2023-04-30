import { Html } from '@react-three/drei'
import styles from './EishinIshida.module.css'
import StateHandler from '@/utils/Statehandler.js'

const EishinIshida = () => 
{
    const setState3 = StateHandler((state) => { return state.setState3 })

    const stateTransition = () => 
    {
        setState3('trueNature')
    }

    return (
        <>
            <Html transform distanceFactor = { 1 } occlude = 'blending'>
            <div className = { styles.container }>
                <div className = { styles.test1}>
                    <h3 className = { styles.explanation }>自己紹介</h3>
                    <span className = { styles.span }>会津大学3年の石田栄心です。私は主にWeb、レコメンダシステム、メタバースについて勉強・開発を行っています。</span>
                    <h3 className = { styles.skills }>技術スタック</h3>
                    <span className = { styles.span }>Python&Recommender System, React Three Fiber&Drei&Rapier, Node.js, Laravel, AWS, SQL, Next,js, Vue.js</span>
                    <h3 className = { styles.skills }>今やっていること</h3>
                    <span className = { styles.span }>深層強化学習を用いた推薦システムの勉強・開発, 物理エンジンを使わない当たり判定システム(GPU負荷を20%軽減)</span>
                    <h3 className = { styles.detail }>特に興味があること</h3>
                    <span className = { styles.span }>メタバースの在り方とその応用方法(マーケティング・広告等), 深層強化学習を用いたレコメンダシステム, 仮想空間におけるスマートコントラクトの応用方法, ドメイン駆動開発, UX設計</span>
                    <h3 className = { styles.url }>私のGithubはこちらから</h3>
                    <span className = { styles.span }><a href = 'https://github.com/Chabuei?tab=repositories' className = 'span'>https://github.com/Chabuei?tab=repositories</a></span>
                </div>
                <button className = { styles.back } onClick = { () => { stateTransition() } }>
                    Click here to back to home
                </button>
            </div>
            </Html>
        </>
    )
}

export default EishinIshida