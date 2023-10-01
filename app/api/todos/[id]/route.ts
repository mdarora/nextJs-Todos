import Todo from "@/db/models/todo";
import connectDB from "@/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, {params} : any){
    const { id } = params;
    const {title, description} = await req.json();
    await connectDB();
    await Todo.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({message: "todo Updated"}, {status: 200});    
}

export async function GET(req: NextRequest, {params}: any){
    const {id} = params;
    await connectDB();
    const todo = await Todo.findById(id);
    return NextResponse.json({todo}, {status: 200});
}