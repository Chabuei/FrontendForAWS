import { Html } from '@react-three/drei'
import styles from './Information.module.css'
import StateHandler from '@/utils/Statehandler.js'

const Information = () => 
{
    const limit = 30
    const recommendStatus = StateHandler((state) => { return state.recommendStatus })
    const currentState = StateHandler((state) => { return state.currentState })
    const searchKeyword = StateHandler((state) => { return state.searchKeyword })
    const currentMovies = StateHandler((state) => { return state.currentMovies })

    const displayInformation = (state) => 
    {
        if(state == 'home')
        {
            if(recommendStatus == 'begin')
            {
                return 'あなたへのおすすめを作成しています...(Now loading)'
            }

            return `人気順で表示(最大10件の映画を選んでRecommendボタンを押しましょう)※初回レコメンドのみ10秒ほどかかります`
        }

        if(state == 'search')
        {
            if(recommendStatus == 'begin')
            {
                return 'あなたへのおすすめを作成しています...(Now loading)'
            }

            if(searchKeyword.length >= limit)
            {
                return `キーワード: ${searchKeyword.substr(0, limit)}…の検索結果`
            }
            else
            {
                return `キーワード: ${searchKeyword}の検索結果`
            }
        }

        if(state == 'genre')
        {
            if(recommendStatus == 'begin')
            {
                return 'あなたへのおすすめを作成しています...(Now loading)'
            }

            if(searchKeyword.length >= limit)
            {
                return `ジャンル: ${searchKeyword.substr(0, limit)}…の検索結果`
            }
            else
            {
                return `ジャンル: ${searchKeyword}の検索結果`
            }
            
        }

        if(state == 'recommend')
        {
            if(recommendStatus == 'begin')
            {
                return 'あなたへのおすすめを作成しています...(Now loading)'
            }

            if(currentMovies[0].movie_id !== '')
            {
                return `あなたへのおすすめ`
            }
            else
            {
                return `データ不足のためレコメンドできませんでした。他の映画を選んでみましょう。`
            }
            
        }
    }
    
    return (
        <>
            <mesh position = { [2, 2.8, 0] }>
                <Html transform>
                    <div className = { styles.information }>
                        <span className = { styles.display }>
                            { displayInformation(currentState) }
                        </span>
                    </div>
                </Html>
            </mesh>
        </>
    )
}

export default Information