'use client'
import {MessageView} from "@/app/MessageView";
import {useEffect, useState, useTransition} from "react";
import {Message} from "@/app/_types/Message";
import {Button} from "@/app/_components/Button";
import {TextInput} from "./_components/TextInput";
import {VerticalList} from "@/app/_components/VerticalList";
import {HorizontalList} from "@/app/_components/HorizontalList";

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export default function Home() {
    const [messages, setMessages] = useState<Message[]>([])
    const [newMessage, setNewMessage] = useState("")

    // 初回表示時にメッセージを取得する
    // (本来はこのようなやり方はおすすめできないのですが、原理を理解するために)
    useEffect(() => {
        async function fetchMessages() {
            const res = await fetch(apiUrl + '/messages')
            setMessages(await res.json())
        }

        fetchMessages().then()
    }, [])

    // メッセージ投稿中を判定する
    const [isPending, startTransition] = useTransition();

    /**
     * メッセージを投稿する
     */
    function handleClick() {
        startTransition(async () => {
            await fetch(apiUrl + '/messages', {
                method: 'POST',
                body: JSON.stringify({text: newMessage})
            })

            // 最新メッセージを取り直す
            const res = await fetch(apiUrl + '/messages')
            setMessages(await res.json())
        });
    }

    return (
        <VerticalList>
            {messages.map((it) => (
                <MessageView key={it.id} message={it}/>
            ))}

            <HorizontalList>
                <TextInput value={newMessage} onValueChange={setNewMessage}/>
                {isPending ? <span>投稿中</span> :
                    <Button onClick={handleClick}>投稿</Button>}
            </HorizontalList>
        </VerticalList>
    );
}
