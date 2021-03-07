function details(details={
    loading:true,
    data:{
        author:{}
    },
    isError:false,
    err_msg:''
},action){
    switch(action.type){
        case 'DETAILS_LOADING':
            return {
                data:{
                    author:{}
                },
                loading:true,
                isError:false,
                err_msg:''
            }
        case "DETAILS_LOADOVER":
            return {
                data:action.data,
                loading:false,
                isError:false,
                err_msg:''
            }
        case "DETAILS_ERROR":
            return {
                data:{
                    author:{}
                },
                loading:false,
                isError:true,
                err_msg:action.err_msg
            }
        default:
            return details;
    }
}

export default details;