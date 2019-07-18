const myPet = {
    name: "Monroe",
    breed: "Boston Terrier",
    age: 3,
    stand: function() {
        alert("I'm a big tall boy")
    },
    howl: function() {
        alert("BOOOWOOOO")
    },
    favoriteToys: [],
    play: function(toy) {
        if (toy.includes("squeaky")) {
            this.favoriteToys.push(toy)
        }
    }
}

// myPet.stand();
// myPet.howl();
myPet.play("squeaky cow");
myPet.play("quiet teddy bear");
myPet.play("squeaky hotdog");

console.log(myPet.favoriteToys)



const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    getOrders: function () {
        return this.orders
    },
}

const chickenComboMeal = {
    sandwichType: "delicious",
    fries: true,
    drinkSize: "large"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)

// Invoke the function to return the list of all orders
const orders = restaurant.getOrders();

// Output all orders to the console using console.table()
console.table(orders);



const elizabethSanger = {
    district: 9,
    statements: {
        taxes: "I will improve taxes",
        jobs: "I will improve jobs",
        infrastructure: "Infrastructure? Consider it improved",
        healthcare: "I'm gonna take healthcare.... and then I'm gonna improve it",
        crime: "I will improve crime"
    },
    donations: "www.google.com",
    events: {
        sunday: "Big speech",
        monday: "Kiss a baby on the head",
        wednesday: "Cut a ribbon",
        saturday: "Give someone a giant check"
    },
    volunteers: [
        {
            name: "Tom",
            address: "123 redwood way",
            email: "tom@tom.com",
            phone: "1234567",
            availability: {
                sunday: false,
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: true,
                friday: true,
                saturday: false
            },
            skills: ["phones", "making stickers"]
        },
        {   
            name: "Sally",
            address: "456 oak street",
            email: "sally@sally.com",
            phone: "2468102",
            availability: {
                sunday: false,
                monday: false,
                tuesday: true,
                wednesday: false,
                thursday: true,
                friday: false,
                saturday: false
            },
            skills: ["phones", "making signs"]
        },
        {
            name: "Jack",
            address: "369 maple lane",
            email: "jack@jack.com",
            phone: "6739271",
            availability: {
                sunday: true,
                monday: false,
                tuesday: true,
                wednesday: true,
                thursday: true,
                friday: true,
                saturday: true
            },
            skills: ["phones", "making plans"]
        }
    ],
    biography: {
        hometown: "Nashville",
        birthday: "03-04-1977",
        synopsis: "Sanger was born, in a town, to two parents whose names were Mr. and Mrs. Sanger. They did other things too which is cool I think. Sanger wanted to be a politician when she was a child. And then now guess what? She is one now too. (A politician not a child)"
    },
    imageGallery: {
        headShot: "lookingGoodSanger.png",
        family: "theFam.png",
        constituents: "whateverThatMeans.png"
    },
    readyToVote: "www.govote.com"
}

const addImageToFamily = (newKey, newValue) => {
    elizabethSanger.imageGallery[newKey] = newValue
    return elizabethSanger.imageGallery
}

const dog = addImageToFamily("herDog", "cuteSangerDog.png")

console.log(dog)

const addSkills = (index, newSkill) => {
    const theVolunteer = elizabethSanger.volunteers[index].name
  
    const skills = elizabethSanger.volunteers[index].skills

    skills.push(newSkill)

    return `${index} ${theVolunteer} can do ${newSkill}`
}

const go = addSkills(2, "other stuff")
console.log(go)



