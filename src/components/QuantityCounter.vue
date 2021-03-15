<template>
    <div>
    <button v-on:click= "downsize()">-</button>
    {{count}}
    <button v-on:click ="upsize()">+</button>
    </div>
</template> 

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    props: [
        'item'
    ],
    methods: {
        upsize: function() {
            if (this.count > 9) {
                alert("You cannot buy more than 10 items.")
            } else {
            this.count +=  1
            }
            console.log(this.item)
            this.$emit('counter', this.item, this.count)
        },
        downsize: function() {
            if (this.count > 0) {
            this.count -=  1
            }
            this.$emit('counter', this.item, this.count)
        }
    },

}
</script>

<style scoped>
    button {
        font-family: 'Avenir',Helvetica, Arial, sans-serif;
        text-align: center;
        background-color: pink;
        border-radius: 4px;
    }
</style>

