import {User, IUser} from '../models/user';

class UserService {
    createUser (body: IUser){
        return new Promise(async(resolve, reject) => {
            try{
                const user = await User.create(body);
                return resolve(user);
            }
            catch (e){
                e.source = 'Create User Service';
                return reject(e)
            }
        })
    }

    getAllUser (){
        return new Promise(async(resolve, reject) => {
            try{
                const users = User.find();
                return resolve(users)
            }
            catch(e){
                e.source = 'Get User Service';
                return reject(e)
            }
        })
    }

    getUser (userid: number){
        return new Promise(async(resolve, reject) => {
            try{
                const user = User.findById(userid);
                if (user) return resolve(user);

                reject('User Not Found!')
            }
            catch(e){
                e.source = 'Get User Service';
                return reject(e)
            }
        })
    }
}

module.exports = UserService;