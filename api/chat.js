// api/chat.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { question } = req.body;
        
        // Substitua "YOUR_OPENAI_API_KEY" pela sua chave da API do OpenAI
        const apiKey = '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';
        
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4', // ou o modelo desejado
                messages: [{ role: 'user', content: question }]
            })
        });

        const data = await response.json();
        const answer = data.choices[0].message.content;

        res.status(200).json({ answer });
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}
