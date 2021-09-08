
let initialState = {
        friends: [
            {
                id: 1,
                name: 'Roma',
                imageUrl: 'https://pbs.twimg.com/profile_images/515757105140084736/rHu9s_8B_reasonably_small.jpeg'
            },
            {
                id: 2,
                name: 'Denis',
                imageUrl: 'https://pbs.twimg.com/profile_images/515757105140084736/rHu9s_8B_reasonably_small.jpeg'
            },
            {
                id: 3,
                name: 'Artem',
                imageUrl: 'https://pbs.twimg.com/profile_images/515757105140084736/rHu9s_8B_reasonably_small.jpeg'
            },
        ]
}

const sidebarReducer = (state = initialState, action) => {
    return state
}

 export default sidebarReducer