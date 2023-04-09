import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
const prisma=new PrismaClient()

export async function GET(request: Request, {params}:{params:{id:string}}) {
    const getTodo=await prisma.todos.findUnique({
         where:{
              id:params.id
         }
    })
    return NextResponse.json(getTodo)
  
   }
export async function PUT(request: Request) {

   }
export async function DELETE(request: Request, {params}:{params:{id:string}}) {
    const deleteTodo=await prisma.todos.delete({
        where:{
            id:params.id
        }
    })
    return NextResponse.json(deleteTodo)
 
   }