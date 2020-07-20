import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: "post",
    initialState: {

        /*
            Here is a struture of your data like:

            name: "",
            surnname: "",
            age: 0,
        */

        posts: [],

    },
    reducers: {

        addPost: (state, action) => {

            // 'payload' is to get the thing that your received

            state.posts.push(action.payload);

        },

        removePost: (state, action) => {

        },

    },
});

// exports what you put on "reducers" here
export const { addPost, removePost } = postSlice.actions;


/**
 * Async functions
 */

export const sendToServer = thingReceived => dispatch => {

    /**
     * Fake sender example
     * 
     * but you can put your things here, 
     * like send something to backend 
     * 
     * api.send("http:/...", {id: 22, name: "teste", });
     * 
     * here you can do async things, up there don't
     * 
     */
    
    dispatch(addPost(thingReceived));

};

export const sendOtherThingToServer = (thingReceived) => dispatch => {
    // Other thing here
};


//                               state.sliceName.thingYouWannaGet
export const allPostsReference = state => state.post.posts;


// export the reducer the "createSlice" created for you
export default postSlice.reducer;