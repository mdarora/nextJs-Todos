import Todo from "@/db/models/todo";
import connectDB from "@/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    await connectDB();

    const {title, description} = await req.json();
    await Todo.create({title, description});
    return NextResponse.json({message: "Todo created."}, {status: 201});
}

export async function GET(){
    await connectDB();

    const todos = await Todo.find({});
    return NextResponse.json([...todos],{ status : 200 });
}

export async function DELETE(req: NextRequest){
    await connectDB();
    
    const id = req.nextUrl.searchParams.get('id');
    await Todo.findByIdAndDelete(id);
    return NextResponse.json({message: "Todo Deleted"}, {status: 200});
}