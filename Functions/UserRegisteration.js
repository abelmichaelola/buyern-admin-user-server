import User from './../Models/User.js';
function registrationStatusCheck(req, res, next) {
    var id = req.body.id;
    var regStatus = req.body.regStatus;
    // get user from server
   
    User.findOne({ _id: id })
        // check if regstatus match
        // if they matchMedia, continue signup
        // else send to new signup screen
        .then((result) => {
            if (!result) {
                //Email not regitered
                console.log("account with id doesnt exist");
                res.send({ isRegistered: false, message: "Account doesnt exist" });
                return;
            }
            var serverRegStatus = result.regStatus;
             if (serverRegStatus === undefined || serverRegStatus >= 4) {
                //user registration has already been completed
//check if session is running
                res.send({ isRegistered: false, message: "Registration has already been completed" });
             } else if (id !== serverRegStatus + 1) {
                 //TODO: redirect user to right signup page
             }
            res.send({ isRegistered: true, message: regStatus });
            switch (regStatus) {
                case 1:
                    step1(req.body);
                    break;
                case 2:
                    console.log("yeah");
                    break;
                case 3:
                    console.log("yeah");
                    break;
                case 4:
                    console.log("yeah");
                    break;

                default:

                    break;
            }

        })
        .catch((err) => {
            console.log(err);
            res.send({ isRegistered: false, message: "user Id is Wrong" });
        })
}

function step1 (userDetails) {
    
    function verifyDetails(params) {

    }
    

}


export {
    registrationStatusCheck
}