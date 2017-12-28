Vue.component("cus-input",{
    props:["title"],
    template:`<header><input type="text" @focus="focus" v-model="title"></header>`,
    methods:{
        focus(){
            this.$emit("select-input");
        },
    }
});

Vue.component("cus-list",{
    props:["datas","state"],
    template:`<ul v-show="state==true">
        <li v-for="item in datas" @click="click(item.title)">{{item.title}}</li>
    </ul>`,
    methods:{
        click(Sselect){
            this.$emit("select-list",Sselect);
        },

    }
});