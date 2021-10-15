"use strict"

const AWS = require("aws-sdk")

const deleteItem = async(event) => {

    const dynamoDB = new AWS.DynamoDB.DocumentClient()
    const {id} = event.pathParameters

    await dynamoDB.delete({
        TableName: "ItemTableNew",
        Key: {id}
    }).promise()

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Item with id ${id} deleted!`
        })
    }
    
}

module.exports = {
    handler:deleteItem
}