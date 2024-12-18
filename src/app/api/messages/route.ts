// API の処理です

import OpenAI from 'openai';
import {PrismaClient} from "@prisma/client"
import {createId} from "@paralleldrive/cuid2";
import {Message} from "@/app/_types/Message";

const openAi = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

const prisma = new PrismaClient()

async function findAllMessages(): Promise<Message[]> {
    return (await prisma.message.findMany({
        orderBy: {createdAt: 'asc'}
    }))
}

/**
 * メッセージ一覧を返す
 */
export async function GET() {
    return Response.json(await findAllMessages())
}

/**
 * 新しいメッセージを投稿する
 */
export async function POST(request: Request) {
    const a = await request.json() as Message

    // ユーザーのメッセージを保存
    await prisma.message.create({
        data: {
            id: createId(),
            text: a.text,
            createdAt: new Date()
        }
    })

    // 過去の履歴は使っていない
    const chatCompletion = await openAi.chat.completions.create({
        messages: [{role: 'user', content: a.text}],
        model: 'gpt-4o',
    });

    // AI のメッセージを保存
    await prisma.message.create({
        data: {
            id: createId(),
            text: chatCompletion.choices[0].message.content ?? '',
            createdAt: new Date()
        }
    })

    return Response.json({"status": "ok"})
}
