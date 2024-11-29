
import { CohereClientV2 } from "cohere-ai";
const cohere = new CohereClientV2({
  token: process.env.COHERE_API_TOKEN || "token_api",
});

export default defineEventHandler(async (event) => {

  const body = await readBody(event); // Obtén el cuerpo de la solicitud
  const query = body.query;

  if (!query) {
    return { statusCode: 400, message: "La pregunta es requerida." };
  }

  try {
    const response = await cohere.chat({
      model: 'command-r-plus',
      messages: [
        {
          role: 'user',
          content: 'Responde si fueras un experto de reciclaje en español : ' + query,
        },
      ],
    });

    console.log(response);
    
    if (response.message?.content) {
      return { statusCode: 200, response: response.message?.content[0].text || "Sin respuesta disponible." };
    }
    return { statusCode: 200, response: "Sin respuesta disponible." };

  } catch (error: any) {
    console.log(error);
    
    return { statusCode: 500, message: "Hubo un error en la consulta.", error: error.message };
  }



})