import {User, IUser} from '../models/user';

export class AuthService{
	signUp (body: IUser){
        return new Promise(async(resolve, reject) => {
            try{
                const user = await User.create(body);

                const token = user.getSignedJwtToken();

                return resolve({user, token});
            }
            catch (e){
                e.source = 'Sign-Up Service';
                return reject(e)
            }
        })
    }

    login (email:  string, password: string){
        return new Promise(async(resolve, reject) => {
            try{
                
                const user = await User.findOne({email: email}).select('+password');

                if (!user) reject('Invalid Inforamtion Supplied!');

 				const isMatch =  await user.matchPassword(password);
 				          
                if(!isMatch) reject('Invalid Inforamtion Supplied!');

                user.password = undefined;

                const token = user.getSignedJwtToken();

                if(!token) reject ('Could not Sign User');
                

                resolve(sendTokenResponse(user,200,res))
            }
            catch(e){
                e.source = 'Get User Service';
                return reject(e)
            }
        })
    }

	const sendTokenResponse = (user, statusCode, res ) => {
    // Create token
    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true
    };

    if(process.env.NODE_ENV === 'production') {
        options.secure = true;
    }

    res
        .status(statusCode)
        .cookie('token', token, options)
        .json({
            success: true,
            token
        });

};

}

