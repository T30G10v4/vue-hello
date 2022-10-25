const { createApp } = Vue;

createApp ({

    data(){

        return {
            description : "Kalyan Myamoto, Human Warrior Lvl 10",
            imageSource : "img/kalyan.png"
            
        }
    },

    methods : {

        pariDispari : function() {

            if (this.num % 2 === 0) {

                this.result = "pari";
                this.color = "red";

            } else {

                this.result = "dispari";
                this.color = "blue";

            }

        }

    }

}).mount("#app")
