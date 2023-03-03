
const nodemailer = require("nodemailer")



/*------------------- Start's Send OTP On Email -------------------------*/


const transporter = nodemailer.createTransport({

    service: 'gmail',

    hosts: 'smpt.gmail.com',
    secure:false,
    // port:465,

    auth: {
        
        user: 'gomemahero@gmail.com',
        pass:'cplmletrtixvvpid'

    

    }

});






const  sendEmail =(async (email, subject, text) => {
	try {


		await content(email, subject, text)
			.then(async (data) => {
				const mail = await transporter.sendMail({
					form: `Maher`,
					to: email,
					subject: subject,
					html: `
						<b>Name:</b>INSTAGRAM</br>
						<b>Phone:</b>FDACEBOOK</br>
                        `
					
				});

			//	console.log('Preview URL: %s', nodemailer.getTestMessageUrl(mail));
				return Promise.resolve();
			})
			.catch((errors) => {
				return Promise.reject(errors);
			});

		return 'Posted!';
	} catch (error) {
        console.log("email not sent");

        console.log(error);
	//	sendError(event, createError({ statusCode: 400, statusMessage: error }));
	}

});




async function content(email, subject, text) {
	return Promise.resolve({
		name: text,
	
	})
}




/*------------------- End Send OTP On Email -------------------------*/

/********************************Start's Send OTP for Forgot password On Email*****************************/
const sendEmailforget = async (email, subject, text) => {

    try {

        const transporter = nodemailer.createTransport({

            service: 'gmail',

            hosts: 'smpt.gmail.com',

            auth: {

                user: 'thinkinternet2020@gmail.com',
                
                pass: 'wzzjkvkmedietwni'
            }

        });

        await transporter.sendMail({

            from: 'thinkinternet2020@gmail.com',


            to: email,

            subject: "local Happinez Please verify your OTP",

            html: `<html>
            <body style="padding: 50px;">
            
            <div style="padding: 20px; border-radius: 10px; border: 1px solid gray;">
            <h1 style="text-align: center">Let's verify your OTP to Forgot Password</h1>
                        <p style="text-align: center">A sign in attempt requires further verification because we did not recognize your
                            device. To complete the sign in, enter the verification code on the unrecognized device.</p>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmCvNTyyVkSryj0kgAzAsN4SIt7KzRRgdKO33KyUmKw&s"
                                style="display: block;
                                        margin-left: auto;
                                        margin-right: auto;
                                        width: 50%; width: 50px;">
                        </div>
                        <h2 style="text-align: center; background-color: #e3e3e3; display: block;
                                        margin-left: auto;
                                        margin-right: auto;
                                        width: 50%; width: 100px;
                                        border-radius: 10px;
                                        padding: 10px 10px">${subject}</h2></div>
            </body>
            </html>`,
            text: text

        });

        console.log("email sent sucessfully");

    } catch (error) {

        console.log("email not sent");

        console.log(error);
    }
};

/********************************End Send OTP for Forgot password On Email*****************************/








module.exports = { sendEmail, sendEmailforget}