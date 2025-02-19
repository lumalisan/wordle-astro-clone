import type { APIContext } from 'astro';
import { WORDS } from '../../data/words';

export async function GET({ params }: APIContext) {
    const index = parseInt(params.id!, 10);
    const word = WORDS[index - 1];

    // Return the word as JSON without exposing the full WORDS array
    return new Response(JSON.stringify({ word }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
};

export function getStaticPaths() {
    return WORDS.map((word, index) => ({
        params: { id: (index + 1).toString() },
        props: { word }
    }));
};