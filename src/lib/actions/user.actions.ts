"user server";

import User from "@/lib/modals/user.modal";
import {connect} from "@/lib/db";


export async function createUser(user: any) {

    try{
        await connect();
        const existingUser = await User.findOne({email: user.email});
        if(existingUser){
            throw new Error("User already exists");
        }
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));

    } catch(error){
        console.error(error);
        throw new Error("Failed to create user");
    }
    
}