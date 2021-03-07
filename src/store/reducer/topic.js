function topics(topics={
    loading:true,
    data:[]
},action){
    switch(action.type){
        case 'TOPIC_LOADING':
            return {
                data:[],
                loading:true
            }
        case "TOPIC_LOADOVER":
            return {
                data:action.data,
                loading:false
            }
        default:
            return topics;
    }
}

export default topics;