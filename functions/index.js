const functions = require("firebase-functions");
const yahooFinance = require("yahoo-finance")
const cors = require("cors")({origin: true});

exports.searchTicker = functions.https.onRequest(async (request, response) => {
    cors(request, response, () => {

    });
    const tickerRequest = request.body.ticker;
    console.log(request.body)
    let searchResult = [];
    if (tickerRequest === undefined) return response.send(JSON.stringify(searchResult))
    if (tickerRequest === "" || tickerRequest === '') return response.send(JSON.stringify(searchResult))
    console.log(tickerRequest)

    if (tickerRequest.includes(",")) {
        const tickerList = tickerRequest.split(",")
        console.log(tickerList)
        let promises = [];
        tickerList.forEach(ticker => {
            promises.push(yahooFinance.quote(ticker.trim(), ['summaryProfile', 'summaryDetail', 'defaultKeyStatistics', 'financialData', 'price']))
        })
        await Promise.all(promises).then(responses => {
            console.log(responses)
            return response.send(JSON.stringify(responses));
        })


    } else {
        let temp = await yahooFinance.quote(tickerRequest.trim(), ['summaryProfile', 'summaryDetail', 'defaultKeyStatistics', 'financialData', 'price'])
        searchResult.push(temp);
        return response.send(JSON.stringify(searchResult));
    }


    return response.send(JSON.stringify(searchResult));
})