// orient class
class Hewan {
    warna
    makanan

    constructor(nama) {
        this.nama = nama
    }

    set newColor(color) {
        this.warna = color
    }
    set newFood(food) {
        this.makanan = food
    }

    get detail() {
        return `Hi! I'm ${this.nama}, ${this.warna} cat, I like eating ${this.makanan}!`
    }

}

const kucing = new Hewan('bow')
kucing.newColor = "Blonde"
kucing.newFood = "Whiskas"

console.log(kucing.detail)
