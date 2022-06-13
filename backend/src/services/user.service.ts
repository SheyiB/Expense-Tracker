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
                const users = await User.find();
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
                const user = await  User.findById(userid);
                if (user) return resolve(user);

                reject('User Not Found!')
            }
            catch(e){
                e.source = 'Get User Service';
                return reject(e)
            }
        })
    }

    updateUser (userid: number, body: [any]) {
        return new Promise(async(resolve, reject) => {
            try{
                let user = await User.findById(userid);
                if(!user) return reject('User not found!')

                user = await User.findByIdAndUpdate(userid, body, { new: true, runValidators: true})
                return resolve(user)
            } catch (e){
                e.source = 'Update User Service';
                return reject(e)
            }
        })
    }

    deleteUser(userid: number) {
        return new Promise(async(resolve, reject) => {
            try{
                let user = await User.findById(userid);
                if(!user) return reject('User not found!')

                user = await User.findByIdAndDelete(userid)
                return resolve(user)
            } catch (e){
                e.source = 'Update User Service';
                return reject(e)
            }
        })
    }

}


module.exports = UserService;