import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

export async function POST(request) {

   try {
       const reqBody = await request.json();
       const { username, email, password } = reqBody;



       // Example: Simple email format validation
       if (!isValidEmail(email)) {
           throw new Error("Invalid email format");
       }

       

      

       
       async function createuser() {
         try {
            const prisma = new PrismaClient();
      
            const usercreated = await prisma.User.create({ data: reqBody });
      
            console.log(usercreated);

            console.log("DB created");
      
         }  catch (e) {
             console.error("Error:", e);
             throw e; // Re-throw the error for the caller to handle
         }
      }

      // Further processing...
      await createuser();

       return NextResponse.json({
         message: "Successfully processed",
         success: true,
         reqBody
     });

       


   } catch (error) {
       // Error handling
       console.error("Error:", error);
       return NextResponse.json({ error: error.message }, { status: 400 });
   }
}



function isValidEmail(email) {
   // Simple email format validation
   // This is just an example, you can use a more robust validation method
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
}