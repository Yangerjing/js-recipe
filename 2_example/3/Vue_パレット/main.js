new Vue({
    el: "#app",
    data: {
        red: 0,
        green: 0,
        colors: [

        ],
    },
    methods: {
        changeColor(e) {
            this.red = e.offsetX
            this.green = e.offsetY
        },
        pickColor() {
            const newColor = {
                red: this.red,
                green: this.green,
            }
            this.colors.push(newColor)
        },
        showColor(color) {
            this.red = color.red
            this.green = color.green
        },
    },
    computed: {
        paletteStyle() {
            return {
                backgroundColor: `rgba(${this.red}, ${this.green}, 200, 0.5)`,
            }
        },
    },
})