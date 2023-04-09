import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function GET(request: Request) {
   const getAllTodos=await prisma.todos.findMany()
   return NextResponse.json(getAllTodos)
  }
  
export async function POST(request:Request){
    const {title, description}=await request.json();
    const createTodo=await prisma.todos.create({
        data:{
            title,
            description
        }
    })
    
    return NextResponse.json({success:true, createTodo}, {status:201})
}