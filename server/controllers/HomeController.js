const express = require('express');
const router = express.Router();
const request = require('request');

const getPainting = (clientReq, clientRes) => {
    let { url } = clientReq.params;

    request(url, (error, apiResponse, body) => {
        if (!error && apiResponse.statusCode === 200) {
            body = JSON.parse(body);

            clientRes.status(200).json({
                title: body.title,
                artist: body.artistDisplayName,
                imageURL: body.primaryImageSmall
            });
        }
    })
};

router.get("/painting/:url", getPainting);

module.exports = router;