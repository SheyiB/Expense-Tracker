// src/users/users.service.ts

/**
 * Data Model Interfaces
 */
import {User, NewUser} from "./user.interface";
import {Users} from "./users.interface";


/**
 * In-Memory Store
 */

let users: Users ={
    1:{
        id: 1,
        firstname: "Elijah",
        lastname: "Banjo",
        dob: "1-MAY-2000",
        email: "elijahbanjo@gmail.com",
        phone: 2349079891715,
        cash: 5000,
        password: "12345"
    },
    2:{
        id: 2,
        firstname: "Ebenezer",
        lastname: "Banjo",
        dob: "12-NOVEMBER-2001",
        email: "mobolaji77@gmail.com",
        phone: 2349079351705,
        cash: 15000,
        password: "12345"
    },
    3:{
        id: 3,
        firstname: "Olabisi",
        lastname: "Banjo",
        dob: "2-JUNE-1974",
        email: "elijahbanjo@gmail.com",
        phone: 2349079891715,
        cash: 5000,
        password: "12345"
    }
}


/**
 * Service Methods
 */