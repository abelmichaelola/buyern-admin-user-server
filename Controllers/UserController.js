import User from './../Models/User.js';
import Location from './../Models/Location.js';
import * as UserRegistration from './../Functions/UserRegisteration.js';
// user_index, user_details, user_create_get, user_create_post, user_delete

// get all users
function users(req, res, next) {
    User.find()
        .then((result) => {
            res.send(result);
        }).
        catch((err) => {
            console.log(err);
            res.send(err)
        })
}

// get user
function user(req, res, next) {
    const id = req.params.id;
    User.findById(id)
        .then((result) => {
            res.send(result);
        }).
        catch((err) => {
            console.log(err);
            res.send(err)
        })
}

// create new user
function user_signup(req, res, next) {
     UserRegistration.registrationStatusCheck(req, res, next);
    
    // const user = new User({
    //     "regStatus": 1,
    //     firstName: "Michael",
    //     lastName: "Abel",
    //     email: "abelmichaelola@gmail.com",
    //     phoneCode: "234",
    //     phone: "09030751122",
    //     dob: Date.now(),
    //     password: "qqqqqqqqqq",
    //     location: new Location({
    //         address: "21, Alaka street",
    //         address2: "address2",
    //         zipcode: 2754,
    //         country: "Nigeria",
    //         state: "Lagos",
    //         image: "www.image.com/picture.jpeg"
    //     })
    // });
    // user.save()
    //     .then((result) => {
    //         res.send(result);
    //     })
    //     .catch((err) => {
    //         if (err.code === 11000) {
    //             res.send({errorCode: err.code, message: "Email already registered"});
    //             return;
    //         }
    //         res.send(err);
    //     });
}

function isEmailRegistered(req, res, next) {
    var email = req.params.email;
    User.findOne({ email: email })
    .then((result)=>{
        if(!result) {
            //Email not regitered
            console.log("no result");
            res.send({isRegistered: false, message:"Email is not registered"});
            return;
        }
        res.send({ isRegistered: true, message: "Email is registered" });
    })
    .catch((err)=>{
        console.log(err);
    })
}

function user_login(req, res, next) {
}

function user_delete(req, res, next) {
}

function verifyUser(req, res, next) {
}
export {
    users, user, isEmailRegistered, user_signup, user_login, user_delete, verifyUser
};