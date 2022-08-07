//Create an a class and extend it - Can be anything you would like it to be! 

class ShadyRecords {
    constructor ( name, specialPower, age){
        this.artistName = name
        this.specialPower = specialPower
        this.age = age
    }
}
class Griselda extends ShadyRecords{
    constructor( name, specialPower, age, signature){
        super(name, specialPower, age)
        this.signature = signature
    }
        finisher(){
            alert(`${this.artistName}: ${this.signature}`)
        }
}

let BennyTheButcher = new Griselda('Benny The Butcher', 'BARZ', 37, 'THE BUTCHER COMIN N****!')
let WestsideGunn = new Griselda ('Westside Gunn', "ADLIBS", 40, "DOOT DOOT DOOT DOOT DOOT DOOT, BOOM BOOM BOOM, DOOT DOOT DOOT!" ) 