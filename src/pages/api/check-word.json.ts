import type { APIContext } from "astro";
import { WORDS } from "../../data/words";

export const prerender = false;

export function GET({ request }: APIContext) {
    const url = new URL(request.url);
    const word = url.searchParams.get("word");

    if (!word) {
        return new Response(JSON.stringify({ error: "Missing word parameter" }), {
            status: 400,
        });
    }

    const exists = WORDS.includes(word.toUpperCase());

    return new Response(JSON.stringify({ exists }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}