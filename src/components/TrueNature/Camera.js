import { useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import StateHandler from '@/utils/Statehandler.js'

export default function Camera()
{
    const mouse = new THREE.Vector2()
    const currentPosition = new THREE.Vector3(0, 0, 0)
    const currentLookAt = new THREE.Vector3(0, 0, 0)

    const currentState3 = StateHandler((state) => { return state.currentState3 })
    const previousState3 = StateHandler((state) => { return state.previousState3 })

    window.addEventListener('mousemove', (event) =>
    {
        mouse.x = event.clientX / window.innerWidth * 2 - 1
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1
    })
    
    useFrame((state, deltaTime) => 
    {
        //毎フレーム処理するのはよくないかもしれない
        if(currentState3 == 'movieRecommend')
        {
            const forMovieRecommend = 
            {
                target: new THREE.Vector3(0, 1, 0),
                position: new THREE.Vector3(2.8, 1, 1.5),
                quaternion: new THREE.Quaternion(0, 0, 0 ,0)
            }

            if(previousState3 == null)
            {
                forMovieRecommend.quaternion.setFromAxisAngle(forMovieRecommend.target, 0)

                state.camera.position.copy(forMovieRecommend.position)
                state.camera.quaternion.copy(forMovieRecommend.quaternion)
            }
            else
            {
                const idealPosition = new THREE.Vector3(2.8, 0.5, 3.5)

                forMovieRecommend.quaternion.setFromAxisAngle(forMovieRecommend.target, 0)

                state.camera.position.copy(idealPosition)
                state.camera.quaternion.copy(forMovieRecommend.quaternion)
            }
        }

        if(currentState3 == 'foodBank')
        {
            const forFoodBank = 
            {
                target: new THREE.Vector3(0, 1, 0),
                position: new THREE.Vector3(-5.5, 0.5, 3.5),
                quaternion: new THREE.Quaternion(0, 0, 0 ,0)
            }

            forFoodBank.quaternion.setFromAxisAngle(forFoodBank.target, 0)

            state.camera.position.copy(forFoodBank.position)
            state.camera.quaternion.copy(forFoodBank.quaternion)
        }

        if(currentState3 == 'EishinIshida')
        {
            const forFoodBank = 
            {
                target: new THREE.Vector3(0, 1, 0),
                position: new THREE.Vector3(0, 0.8, 1.75),
                quaternion: new THREE.Quaternion(0, 0, 0 ,0)
            }

            forFoodBank.quaternion.setFromAxisAngle(forFoodBank.target, 0)

            state.camera.position.copy(forFoodBank.position)
            state.camera.quaternion.copy(forFoodBank.quaternion)
        }

        if(currentState3 == 'gravityPoint')
        {
            const forFoodBank = 
            {
                target: new THREE.Vector3(0, 1, 0),
                position: new THREE.Vector3(-2.8, 0.5, 3.5),
                quaternion: new THREE.Quaternion(0, 0, 0 ,0)
            }

            forFoodBank.quaternion.setFromAxisAngle(forFoodBank.target, 0)

            state.camera.position.copy(forFoodBank.position)
            state.camera.quaternion.copy(forFoodBank.quaternion)
        }

        if(currentState3 == 'underDevelopment')
        {
            const forFoodBank = 
            {
                target: new THREE.Vector3(0, 1, 0),
                position: new THREE.Vector3(5.5, 0.6, 3.1),
                quaternion: new THREE.Quaternion(0, 0, 0 ,0)
            }

            forFoodBank.quaternion.setFromAxisAngle(forFoodBank.target, 0)

            state.camera.position.copy(forFoodBank.position)
            state.camera.quaternion.copy(forFoodBank.quaternion)
        }


        if(currentState3 == 'trueNature')
        {
            const time = 1.0 - Math.pow(0.001, deltaTime)
            const idealOffset = new THREE.Vector3(-1.0, 2.0, -2.5)
            const idealLookAt = new THREE.Vector3(0, 0, 2)
            
            idealOffset.applyQuaternion(state.scene.children[1].quaternion)
            idealLookAt.applyQuaternion(state.scene.children[1].quaternion)
            
            idealOffset.add(state.scene.children[1].position)
            idealLookAt.add(state.scene.children[1].position)
            
            currentPosition.lerp(idealOffset, time)
            currentLookAt.lerp(idealLookAt, time)

            state.camera.position.copy(currentPosition)
            state.camera.lookAt(currentLookAt)
        } 
    })

    return <>
    </>
}