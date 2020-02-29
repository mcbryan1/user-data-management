
export const addNewUser = (user)=>{

    return async(dispatch, getState,getFirestore)=>{
        let firestore = getFirestore()
        try {
            await firestore.collection("users").add({
                ...user, timestamp: firestore.FieldValue.serverTimestamp()
            })
        } catch (error) {
            
        }
        
    }
}

export const deleteUser = (id)=>{
    return (dispatch, getState, getFirestore)=>{
        let firestore = getFirestore()
        firestore.collection("users").doc(id).delete()
    }
}

export const editUser = (user)=>{
    return async(dispatch, getState, getFirestore)=>{
        let firestore = getFirestore()
        try {
            await firestore.collection("users").doc(user.id).update(user)
        } catch (error) {
            
        }
    }
}

export const getAllUsers = ()=>{
    return (dispatch, getState, getFirestore)=>{
        let firestore = getFirestore()
        try {
            firestore
                .collection("users")
                .orderBy("timestamp", "asc")
                .onSnapshot((snapshot)=>{
                let users = snapshot.docs.map((doc)=>{
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                dispatch({type:"UPDATE_ALL_USERS", payload:users})
            })
            
        } catch (error) {
            
        }
    }
}