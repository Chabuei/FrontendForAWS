import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Html, KeyboardControls } from '@react-three/drei'
import StateHandler from '@/utils/Statehandler.js'
import Header2 from '@/components/MovieRecommend/Header2.js'
import World from '@/components/MovieRecommend/World.js'
import Pagination2 from '@/components/MovieRecommend/Pagination2.js'
import List2 from '@/components/MovieRecommend/List2.js'
import Route from '@/components/MovieRecommend/Route.js'
import Information from '@/components/MovieRecommend/Information.js'
import FoodBank from '@/components/FoodBank/FoodBank.js'
import GravityPoint from '@/components/GravityPoint/GravityPoint.js'
import WorldX from '@/components/WorldX/WorldX.js'
import Camera from '@/components/TrueNature/Camera.js'
import Loader from '@/components/TrueNature/Loader.js'
import Controller from '@/components/TrueNature/Controller.js'
import StateManager from '@/components/TrueNature/StateManager'
import EishinIshida from '@/components/EishinIshida/EishinIshida.js'

export async function getServerSideProps(context)
{
  try
  {
    const movies = await (await fetch(`https://xei7ax90q9.execute-api.us-east-1.amazonaws.com/prod/movies?pagination=${0}`)).json()
    
    return { props: { movies } }
  }
  catch(error)
  {
    const movies = []
                
    for(let i = 0 ; i < 10; i++)
    {
        movies.push({movie_id: '', title: '', rating: '', evaluations: '', image: ''})

        if(i == 9)
        {
            movies.push([{'COUNT(*)': 10}])

            return { props: { movies } }
        }
    }
  }
}

const App = ({ movies }) => 
{
  const firstRender = useRef(false)
  const currentState3 = StateHandler((state) => { return state.currentState3 })
  const initMovies = StateHandler((state) => { return state.initMovies })
  const setState3 = StateHandler((state) => { return state.setState3 })

  const stateTransition = () => 
  {
    setState3('trueNature')
  }

  useEffect(() => 
  {
    if(!firstRender.current)
    {
      initMovies(movies)

      firstRender.current = true
    }
  }, [])

  return (
    <>
      <div className = { currentState3 == 'trueNature' ? 'buttons' : 'buttons2' }>
          <ul className = 'exp' >
            <li>
              <span>W: Walk</span>
            </li>
            <li>
              <span>A: Left</span>
            </li>
            <li>
              <span>D: Right</span>
            </li>
            <li>
              <span>W + Space: Run</span>
            </li>
          </ul>
        </div>
      <div className = 'canvas'>
        <KeyboardControls  map=
          { [
          { name: 'KeyW', keys: [ 'KeyW' ] },
          { name: 'KeyA', keys: [ 'KeyA' ] },
          { name: 'KeyS', keys: [ 'KeyS' ] },
          { name: 'KeyD', keys: [ 'KeyD' ] },
          { name: 'Space', keys: [ 'Space' ] },
          { name: 'KeyF', keys:[ 'KeyF' ] }
          ] }>
        <Canvas className='' camera = { { position: [3, -1.5, 15], fov: 45 } }>
          <gridHelper/>
          <Loader />
          <Camera/>
          <StateManager />
          <Controller/>
            <mesh position = { [2.55, 1.25, 0] } scale = { 0.1 }>    
              <mesh geometry = { new THREE.PlaneGeometry(27.5, 17.25) } material = { new THREE.MeshStandardMaterial({ color: 'black' }) } position={ [2.5, -3.4, -0.1] } />
              <mesh position = { [0, -11.8, 0] }>
                <Html transform>
                    <div className = 'information'>
                        <h3 className = 'explanation'>概要</h3>
                        <span className = 'span'>Item2Vec(深層学習推薦システム)を用いた映画レコメンド(2023)</span>
                        <h3 className = 'skills'>技術スタック</h3>
                        <span className = 'span'>Next.js, React Three Fiber, Zustand, Express.js, SQL, AWS(API Gateway, Lambda, Amplify, RDS, EFS, EC2を用いたサーバレス開発&デプロイ), Python&Item2Vec(Word2vec)</span>
                        <h3 className = 'detail'>詳細</h3>
                        <span className = 'span'>　推薦システムを研究するためにItem2Vecを用いた映画レコメンドサイトを製作しました。ユーザは好きな映画を最大10件選びRecommendボタンを押すと、Express.jsで作成したAPIがItem2Vecをバックエンドで実行し、その結果が表示されます。Item2Vecはオフライン学習させたWord2Vecで実装しています。フロントはNext.js(SSR)とReact Three Fiberで作成しました。</span>                      
                    </div>
                    <button className = 'back' onClick = { () => { stateTransition('') } }>
                        Click here to back to home
                    </button>
                </Html>
              </mesh>
              <mesh position = { [0, -1, 0] }>                  
                  <Header2 />
                  <Route />
                  <Information />
                  <World movies = { movies }/>
                  <Pagination2 />
                  <List2 />                
              </mesh>
            </mesh>
          <mesh position = { [-5.575, 0.925, 0] }>
            <FoodBank />
          </mesh>
          <mesh position = { [-2.75, 0.925, 0] }>
            <GravityPoint />
          </mesh>
          <mesh position = { [5.575, 0.925, 0] }>
            <WorldX/>
          </mesh>
          <mesh position = { [0, 0.935, 0] }>
            <EishinIshida />
          </mesh>
        </Canvas>
        </KeyboardControls>
      </div>
    </>
  )
}

export default App