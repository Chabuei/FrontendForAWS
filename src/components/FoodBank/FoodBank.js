import { Html } from '@react-three/drei'
import styles from './FoodBank.module.css'
import StateHandler from '@/utils/Statehandler.js'

const FoodBank = () => 
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
                    <iframe className = { styles.iframe } src = 'https://fb-fujinokuni.org/'/>
                    <div className = { styles.test1}>
                        <h3 className = { styles.explanation }>概要</h3>
                        <span className = { styles.span }>NPO法人フードバンクふじのくに様のホームページリニューアル及び保守管理(2021-2023)</span>
                        <h3 className = { styles.skills }>技術スタック</h3>
                        <span className = { styles.span }>WordPress, PHP, Debianを用いたローカル開発環境構築</span>
                        <h3 className = { styles.detail }>詳細</h3>
                        <span className = { styles.span }>　NPO法人フードバンクふじのくに様のホームページのリニューアルを個人で行いました。開発にはWordPressとPHPを利用しました。綿密なコミュニケーションを行い双方向での齟齬を減らす工夫を行い、満足していただけるホームページを製作できました。開発後も安心して継続利用していただくために、保守管理を行っていました。</span>
                        <h3 className = { styles.url }>URL</h3>
                        <a href = 'https://fb-fujinokuni.org/' className = { styles.span }>https://fb-fujinokuni.org/</a>
                    </div>
                    <button className = { styles.back } onClick = { () => { stateTransition() } }>
                        Click here to back to home
                    </button>
                </div>
            </Html>
        </>
    )
}

export default FoodBank