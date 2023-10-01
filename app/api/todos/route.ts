import Todo from "@/db/models/todo";
import connectDB from "@/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const {title, description} = await req.json();
    await connectDB();
    await Todo.create({title, description});
    return NextResponse.json({message: "Todo created."}, {status: 201});
}

export async function GET(){
    const todos = await Todo.find({});
    await connectDB();
    return NextResponse.json([...todos],{ status : 200 });
}

export async function DELETE(req: NextRequest){
    const id = req.nextUrl.searchParams.get('id');
    await connectDB();
    await Todo.findByIdAndDelete(id);
    return NextResponse.json({message: "Todo Deleted"}, {status: 200});
}