var app=new Vue({
    el:"#app",
    data:{
        datas:[
        {   id:1,
            title:'111',
        },
        {   id:2,
            title:'222',
        },
        {   id:3,
            title:'333',
        }
       ],
        state:false,
        title:'',
    },

    methods:{
        Sclick(){
            this.state=true;
        },
        Sselect(val){
            this.title=val;
            this.state=false;
        }
    }
})