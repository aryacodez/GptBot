const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
exports.chat = async (req, res) => {
    try{
        const {message} =req.body
        const completion = await openai.createCompletion({
            prompt: message,
            model: "text-davinci-003",
            temperature: 0.7,            
            max_tokens: 100,
        })
        const response = completion.data.choices[0].text;
        res.json({ response })
    }catch(e){
        console.log(e);
    }
}
