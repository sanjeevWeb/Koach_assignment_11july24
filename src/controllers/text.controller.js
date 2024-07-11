const textModel = require("../models/text.model");


async function translateText(req, res, next) {
    const { text } = req.body;

    try {
        // basic validation
        if (!text) {
            return res.status(400).json({ error: 'Text input is required' });
        }

        const isEnglish = checkEnglish(text);
        if (!isEnglish) {
            return res.status(400).json({ error: 'Text must be in english' });
        }
        const processedText = text;  // In a real application, this would be the translated text with some mechanism

        const newText = new textModel({ text, translatedText: processedText })
        const translatedText = await newText.save()

        // Respond with a success message
        res.status(200).json({ message: 'Translation successful', translatedText });
    }
    catch (error) {
        return res.status(500).json({ error: 'Something went wrong' });
    }
};

function checkEnglish(text) {

    return /^[a-zA-Z0-9\s]*$/.test(text);
};


function test(req, res, next) {
    return res.status(200).send("Hello Koach")
}
module.exports = { translateText, test }