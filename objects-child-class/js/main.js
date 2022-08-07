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
        super(artistName)
        super(specialPower)
        super(age)
        this.signature = signature
        finisher(){
            alert(`${Griselda.artistName}: ${Griselda.signature}`)
        }
    }
}

