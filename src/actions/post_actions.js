export const ADD_TO_POSTS = 'ADD_TO_POSTS';
export const UPDATE_POSTS = 'UPDATE_POSTS';
export const DELETE_FROM_POSTS = 'DELETE_FROM_POSTS';


export function addToPosts(id, userId, title, body) {
    return {
        type: ADD_TO_POSTS,
        payload: {
            id,
            userId,
            title,
            body
        }
    }
}

export function updatePosts(id, userId, title, body) {
    return {
        type: UPDATE_POSTS,
        payload: {
            id,
            userId,
            title,
            body
        }
    }
}

export function deleteFromPosts(id) {
    return {
        type: DELETE_FROM_POSTS,
        payload: {
            id
        }
    }
}