import { create } from 'zustand'
import IdleState from '@/components/TrueNature/states/IdleState.js'
import WalkState from '@/components/TrueNature/states/WalkState.js'
import RunState from '@/components/TrueNature/states/RunState.js'

const StateHandler = create((set, get) => 
{
    return {
        currentState4: 'init',

        setState4: (inputState) => 
        {
            console.log(inputState)   
            if(inputState !== get().currentState4)
            {             
                
                set(() => 
                {   
                    return { currentState4: inputState }
                })
            }
        },

        currentState3: 'movieRecommend',
        previousState3: null,
        renderingCounter: 0,

        setState3: (inputState) => 
        {
            if(inputState !== get().currentState3)
            {
                const previousState = get().currentState3
                console.log(inputState)
                set(() => 
                {   
                    return { currentState3: inputState, previousState3: previousState }
                })
                
            }
        },

        setPreviousState3: (inputState) => 
        {
            //console.log(inputState)
            set((state) => 
            {
                return { previousState3: inputState }
            })
        },

        previousState2: null,
        currentState2: null,
        states2: { Idle: IdleState, Walk: WalkState, Run: RunState },

        setState2: (inputState) => 
        { //つまりcurrentStateを書き換える前に参照するとそれはpreviousStateと同義である
            const previousState = get().currentState2

            set((state) => 
            {
                return { previousState2: previousState, currentState2: inputState }
            })
        },

        executeState2: (animations) => 
        {
            const previousState = get().previousState2

            get().states2[get().currentState2](animations, previousState)
        },

        allAdaptedMovies: 0,
        currentState: 'home',
        currentPageNumber: 0,
        currentLeftTrigger: 0,
        currentRightTrigger: 0,
        currentMovies : [],
        userLikes: [],
        currentRecommendedMovies: [],
        currentSearchResults: [],
        EishinIshida: false,
        searchKeyword: '',

        setSearchKeyword: (keyword) => 
        {
            console.log(keyword)
            set((state) => 
            {
                return { searchKeyword: keyword }
            })
        },

        setEishinIshida: () => 
        {
            set(() => 
            {
                return { EishinIshida: true }
            })
        },

        setCurrentState: (state) => 
        {
            set(() => 
            {
                return { currentState: state }
            })
        },

        setAllAdaptedMovies: (number) => 
        {
            set(() => 
            {
                return { allAdaptedMovies: number }
            })
        },

        setCurrentPageNumber: (number) => 
        {
            set(() => 
            {
                return { currentPageNumber: number }
            })
        },

        incrementPageNumber: () => 
        {
            const currentState = get().currentState

            if(currentState == 'home')
            {
                set((state) => 
                {
                    if(state.currentPageNumber + 10 >= get().currentMovies[10][0]['COUNT(*)'] )
                    {
                        return { currentPageNumber: state.currentPageNumber }
                    }
                    else
                    {                    
                        const nextPageNumber = state.currentPageNumber + 10
                        const nextRightTrigger = state.currentRightTrigger + 1
                        
                        return { currentPageNumber: nextPageNumber, currentRightTrigger: nextRightTrigger }
                    }
                })
            }
            
            if(currentState == 'recommend')
            {
                set((state) => 
                {
                    if(state.currentPageNumber + 10 >= state.currentRecommendedMovies.length)
                    {
                        return { currentPageNumber: state.currentPageNumber }
                    }
                    else
                    {
                        const nextPageNumber = state.currentPageNumber + 10
                        const nextRightTrigger = state.currentRightTrigger + 1
                        
                        return { currentPageNumber: nextPageNumber, currentRightTrigger: nextRightTrigger }
                    }
                })
            }

            if(currentState == 'search')
            {
                set((state) => 
                {
                    if(state.currentPageNumber + 10 >= get().currentMovies[10]['COUNT(*)'])
                    {
                        return { currentPageNumber: state.currentPageNumber }
                    }
                    else
                    {
                        const nextPageNumber = state.currentPageNumber + 10
                        const nextRightTrigger = state.currentRightTrigger + 1
                        
                        return { currentPageNumber: nextPageNumber, currentRightTrigger: nextRightTrigger }
                    }
                })
            }

            if(currentState == 'genre')
            {
                set((state) => 
                {
                    if(state.currentPageNumber + 10 >= get().currentMovies[10]['COUNT(*)'])
                    {
                        return { currentPageNumber: state.currentPageNumber }
                    }
                    else
                    {
                        const nextPageNumber = state.currentPageNumber + 10
                        const nextRightTrigger = state.currentRightTrigger + 1
                        
                        return { currentPageNumber: nextPageNumber, currentRightTrigger: nextRightTrigger }
                    }
                })
            }
        },

        decrementPageNumber: () => 
        {
            const currentState = get().currentState

            if(currentState == 'home')
            {
                set((state) => 
                {
                    if(state.currentPageNumber <= 1)
                    {
                        return { currentPageNumber: state.currentPageNumber }
                    }
                    else
                    {
                        const nextPageNumber = state.currentPageNumber - 10
                        const nextLeftTrigger = state.currentLeftTrigger + 1

                        return { currentPageNumber: nextPageNumber, currentLeftTrigger: nextLeftTrigger }
                    }
                })
            }

            if(currentState == 'recommend')
            {
                set((state) => 
                {
                    if(state.currentPageNumber <= 0 )
                    {
                        return { currentPageNumber: state.currentPageNumber }
                    }
                    else
                    {
                        const nextPageNumber = state.currentPageNumber - 10
                        const nextLeftTrigger = state.currentLeftTrigger + 1

                        return { currentPageNumber: nextPageNumber, currentLeftTrigger: nextLeftTrigger }
                    }
                })
            }

            if(currentState == 'search')
            {
                set((state) => 
                {
                    if(state.currentPageNumber <= 0 )
                    {
                        return { currentPageNumber: state.currentPageNumber }
                    }
                    else
                    {
                        const nextPageNumber = state.currentPageNumber - 10
                        const nextLeftTrigger = state.currentLeftTrigger + 1

                        return { currentPageNumber: nextPageNumber, currentLeftTrigger: nextLeftTrigger }
                    }
                })
            }

            if(currentState == 'genre')
            {
                set((state) => 
                {
                    if(state.currentPageNumber <= 0 )
                    {
                        return { currentPageNumber: state.currentPageNumber }
                    }
                    else
                    {
                        const nextPageNumber = state.currentPageNumber - 10
                        const nextLeftTrigger = state.currentLeftTrigger + 1

                        return { currentPageNumber: nextPageNumber, currentLeftTrigger: nextLeftTrigger }
                    }
                })
            }
        },

        initMovies: (movies) => 
        {
            set((state) => 
            {
                return { currentMovies: [...movies] , allAdaptedMovies: movies[10][0]['COUNT(*)']}
            })
        },

        setMovies: async () => 
        {   
            const currentState = get().currentState

            //const test = await (await fetch('https://l4rzvuj9k8.execute-api.us-east-1.amazonaws.com/prod/test')).json()
            //console.log(test)

            if(currentState == 'home')
            {
                try
                {
                    const nextMovies = await (await fetch(`https://l4rzvuj9k8.execute-api.us-east-1.amazonaws.com/prod/movies?pagination=${parseInt(get().currentPageNumber)}`)).json()
                
                    set(() => 
                    {                        
                        //set内でsyancを使ってはいけない、なぜか値が更新できなくなる
                        return { currentMovies: [...nextMovies], allAdaptedMovies: nextMovies[10][0]['COUNT(*)'] }
                    })
                } 
                catch(error)
                {
                    const nextMovies = []
                    for(let i = 0 ; i < 10; i++)
                    {
                        nextMovies.push({movie_id: '', title: '', rating: '', evaluations: '', image: ''})

                        if(i == 9)
                        {
                            nextMovies.push([{'COUNT(*)': 10}])

                            set(() => 
                            {                                
                                //set内でsyancを使ってはいけない、なぜか値が更新できなくなる
                                return { currentMovies: [...nextMovies], allAdaptedMovies: nextMovies[10][0]['COUNT(*)'] }
                            })
                        }
                    }
                }     
            }

            if(currentState == 'recommend')
            {
                set((state) => 
                {
                    const nextMovies = state.currentRecommendedMovies.slice(state.currentPageNumber, state.currentPageNumber + 10)
                    
                    return { currentMovies: [...nextMovies] }
                })
            }
        },

        setSearchResults: async (keyword) => 
        {
            try
            {
                const nextSearchResults = await (await fetch(`https://l4rzvuj9k8.execute-api.us-east-1.amazonaws.com/prod/movies/search?keyword=${keyword}&pagination=${get().currentPageNumber}`)).json()
                
                set(() => 
                {
                    return { currentMovies: [...nextSearchResults], allAdaptedMovies: nextSearchResults[10]['COUNT(*)'] }
                })
            }
            catch(error)
            {
                const nextMovies = []
                
                for(let i = 0 ; i < 10; i++)
                {
                    nextMovies.push({movie_id: '', title: '', rating: '', evaluations: '', image: ''})

                    if(i == 9)
                    {
                        nextMovies.push([{'COUNT(*)': 10}])

                        set(() => 
                        {
                            console.log(nextMovies)
                            //set内でsyancを使ってはいけない、なぜか値が更新できなくなる
                            return { currentMovies: [...nextMovies], allAdaptedMovies: nextMovies[10][0]['COUNT(*)'] }
                        })
                    }
                }
            }
        },

        setGenredMovies: async (genre) => 
        {
            try
            {
                const nextSearchResults = await (await fetch(`https://l4rzvuj9k8.execute-api.us-east-1.amazonaws.com/prod/movies/genre?genre=${genre}&pagination=${get().currentPageNumber}`)).json()
                
                set(() => 
                {
                    return { currentMovies: [...nextSearchResults], allAdaptedMovies: nextSearchResults[10]['COUNT(*)']}
                })
            }
            catch(error)
            {
                const nextMovies = []
                
                for(let i = 0 ; i < 10; i++)
                {
                    nextMovies.push({movie_id: '', title: '', rating: '', evaluations: '', image: ''})

                    if(i == 9)
                    {
                        nextMovies.push([{'COUNT(*)': 10}])

                        set(() => 
                        {
                            console.log(nextMovies)
                            //set内でsyancを使ってはいけない、なぜか値が更新できなくなる
                            return { currentMovies: [...nextMovies], allAdaptedMovies: nextMovies[10][0]['COUNT(*)'] }
                        })
                    }
                }
            }
        },

        setRecommendedMovies: (recommendedMovies, from) => 
        {
            if(from == 'fromList')
            {
                let currentRecommendedMovies = get().currentRecommendedMovies
            
                //currentRecommendedMovies = [...currentRecommendedMovies, ...recommendedMovies]
                currentRecommendedMovies = [...recommendedMovies, ...currentRecommendedMovies]

                set((state) => 
                {
                    return { currentMovies: [...recommendedMovies], currentRecommendedMovies: [...currentRecommendedMovies], allAdaptedMovies: currentRecommendedMovies.length }
                })
            }

            if(from == 'fromIndex')
            {
                const currentMovies = get().currentRecommendedMovies

                set(() => 
                {
                    return { currentMovies: [...currentMovies] }
                })
            }
        },

        setUserLikes: (title, id) => 
        {
            const currentUserLikes = get().userLikes

            if(currentUserLikes.length >= 10)
            {
                console.log('これ以上追加できません')

                return 
            }
            
            set((state) => 
            {
                const userLikeObject = { 'id': id, 'title': title }

                currentUserLikes.push(userLikeObject)    

                return { userLikes: [...currentUserLikes] }
            })
        },

        deleteUserLikes: (movie, movieIndex) => 
        {
            const currentUserLikes = get().userLikes
            const nextUserLikes = []
            
            currentUserLikes.map((currentUserLike, index) => 
            {
                if(movieIndex != index)
                {
                    nextUserLikes.push(currentUserLikes[index])
                }
            })

            set(() => 
            {
                return { userLikes: [...nextUserLikes] }
            })
        },

        deleteAllUserLikes: () => 
        {
            set((state) => 
            {
                return { userLikes: [] }
            })
        }
    }
})

export default StateHandler