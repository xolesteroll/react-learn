const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
    users: [
        // {
        //     id: 1,
        //     imageUrl: 'https://cdn.pixabay.com/photo/2019/03/10/18/46/kampfstort-4046939_960_720.jpg',
        //     fullName: 'Anton',
        //     status: 'I am A BOSS',
        //     location: {city: 'Minsk', country: 'Belarus'},
        //     followed: true
        // },
        // {
        //     id: 2,
        //     imageUrl: 'https://cdn.pixabay.com/photo/2019/03/10/18/46/kampfstort-4046939_960_720.jpg',
        //     fullName: 'vasya',
        //     status: 'I am A BOSSssssssss',
        //     location: {city: 'NYC', country: 'USA'},
        //     followed: false
        // },
        // {
        //     id: 3,
        //     imageUrl: 'https://cdn.pixabay.com/photo/2019/03/10/18/46/kampfstort-4046939_960_720.jpg',
        //     fullName: 'shmara',
        //     status: 'I am A BOSSsssssss',
        //     location: {city: 'Chisinau', country: 'MOLDOVA'},
        //     followed: true
        // }
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS :
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})

export default usersReducer