function user(user={
    loading:true,
    data:{
        avatar_url:'',
        loginname:''
    },
    isError:false,
    err_msg:''
},action){
    switch(action.type){
        case 'USER_LOADING':
            return {
                data:{
                    avatar_url:'',
                    loginname:''
                },
                loading:true,
                isError:false,
                err_msg:''
            }
        case "USER_LOADOVER":
            return {
                data:action.data,
                loading:false,
                isError:false,
                err_msg:''
            }
        case "USER_ERROR":
            return {
                data:{
                    avatar_url:'',
                    loginname:''
                },
                loading:false,
                isError:true,
                err_msg:action.err_msg
            }
        default:
            return user;
    }
}

export default user;