let name1 = "zia ahemed khan"
console.log(`hello ${name1}, would you like to learn some Python today`)

let Tittlecase = name1.split(" ").map((e)=>{
    return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()
}).join(' ')
console.log(name1.toUpperCase()+" "+name1.toLowerCase()+" "+Tittlecase)
console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`)
let Famous_person = "Albert Einstein" ; let code ="A person who never made a mistake never tried anything new.";
console.log(`${Famous_person } once said, "${code}" `)
let strim = "\t Muzammil\n\t haris ahmed"
console.log("\t Muzammil \n  \t haris ahmed")
console.log(strim.trim().replace("\t","").replace("\n",""))
console.log(5+3)
console.log(11-3)
console.log(2*4)
console.log(16/2)
let Favorite_Number = 26
console.log(Favorite_Number)

//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

let array = ["Haris","Muzammil","Taha","Umair"]
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])


console.log(array[0]+" hello Bro")
console.log(array[1]+" hello Bro")
console.log(array[2]+" hello Bro")
console.log(array[3]+" hello Bro")

let Transportation = ["Honda","Suzuki","Toyota","Yamaha"]

console.log(Transportation[0]+" “I would like to own a Honda motorcycle.”")
console.log(Transportation[1]+" “I would like to own a Honda motorcycle.”")
console.log(Transportation[2]+" “I would like to own a Honda motorcycle.”")
console.log(Transportation[3]+" “I would like to own a Honda motorcycle.”")

let Guest_List = ["Haris","Muzammil","Taha","Umair"]

console.log(Guest_List[0]+" “Lorem ipsum dolor sit amet.”")
console.log(Guest_List[1]+" “Lorem ipsum dolor sit amet.”")
console.log(Guest_List[2]+" “Lorem ipsum dolor sit amet.”")
console.log(Guest_List[3]+" “Lorem ipsum dolor sit amet.”")
Guest_List[3]="khan"
console.log(Guest_List[3]+" “Lorem ipsum dolor sit amet.”")
console.log("umair is not coming")
console.log(Guest_List[3])
console.log(Guest_List)
Guest_List.push("Tahir")
Guest_List.push("faisal")
Guest_List.push("qasim")
console.log(Guest_List)
console.log(`hello ${Guest_List}, Bigger dinner table.`)
Guest_List.splice(3,0,"jhanziab")
console.log(Guest_List)
    Guest_List.forEach(function (list) {
    console.log(list +" Lorem ipsum dolor sit amet.");
    });
    Guest_List.forEach(function (list) {
        console.log(list +"invite only two people for dinner.");
        });
for(let i = Guest_List.length-1 ; i > 1 ; i--){

    //console.log(Guest_List[i])
    console.log("You can't join us for dinner "+Guest_List[i]);
    Guest_List.pop()

}
console.log(Guest_List)
Guest_List.forEach(function (list) {
    console.log(list +"  please come fast");
    });
    Guest_List = []
    console.log(Guest_List)
