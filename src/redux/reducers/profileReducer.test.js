import profileReducer, {addPost} from "./profileReducer";
import React from "react";


it('new post should be added', () => {
    // 1. Data
    let action  = addPost("Hello")
    let initialState = {
        posts: [
            {
                id: 1,
                message: "First",
                likeCount: 1
            },
            {
                id: 2,
                message: "Second Post",
                likeCount: 45
            },
            {
                id: 3,
                message: "Third Post",
                likeCount: 36
            },
            {
                id: 4,
                message: "Forth Post",
                likeCount: 789
            },
            {
                id: 5,
                message: "Fifth Post",
                likeCount: 16
            }
        ]
    }

    // 2. Some action
    let newState = profileReducer(initialState, action)

    // 3. Expectation

    expect(newState.posts.length).toBe(6)
    expect(newState.posts[0].id).toBe(6)
    expect(newState.posts[0].message).toBe('Hello')
    expect(newState.posts[0].likeCount).toBe(0)
    console.log(newState)

})